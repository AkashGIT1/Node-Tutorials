const sumRequestHandeler= (req,res)=>{
    console.log("in some request handler",req.url);
    const body=[];
    req.on('data',chunk=>body.push(chunk));
    req.on('end',()=>{
       const bodyStr= Buffer.concat(body).toString();
       const params=new URLSearchParams(bodyStr);
       const bodyObject=Object.fromEntries(params);
       const result= Number(bodyObject.first)+Number(bodyObject.second);
       console.log(result);
       res.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h1>Your Result is : ${result}</h1>
            
        </form>
        </body>
        </html>
                    `);
        return res.end();
    });
    
}

exports.sumRequestHandeler=sumRequestHandeler