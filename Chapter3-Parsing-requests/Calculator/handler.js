const {sumRequestHandeler}=require('./sum');

const userCalc=(req,res)=>{
    console.log(req.url,req.method);
    if(req.url==='/'){
        res.setHeader('Content-Type','text/html');
        res.write(`
            <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Welcome to my Calculator Practice Set</h1>
    <a href="/calculator"> Got to Calculator</a>
    </body>
</html>
            `);
    return res.end();
    }else if(req.url.toLowerCase()==='/calculator'){
        res.write(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Welcome to my Calculator</h1>
    <form action="/result" method="POST">
    <input type="text" placeholder="First number" name="first" >
    <input type="text" placeholder="Second NUmber" name="second">
    <input type="submit" value="Sum">
</form>
</body>
</html>
            `);

    return res.end();
        }
        else if(req.url.toLowerCase()==='/result' && req.method=='POST'){
        return sumRequestHandeler(req,res);
        }
    
    }

module.exports=userCalc;