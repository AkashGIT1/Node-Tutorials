
const fs =  require('fs');

const userRequestHandler=(req,res)=>{

    
        console.log(req.url,req.method);
        if(req.url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My form</title></head>');
        res.write('<body><h1> Enter your details : </h1>');
        res.write('<form action="submit-details" method="POST">');
        res.write('<input type = "text" name="username" placeholder="Enter you name"><br> ');
        res.write('<label for="male">Male</label>');
        res.write('<input type="radio" id="male" name="gender" value="male" /><br>')
        res.write('<label for="female">Female<label>')
        res.write('<input type="radio" id="female" name="gender" value="female" /><br>')
        res.write('<input type="submit" value="Submit" >')
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
        }else if(req.url.toLowerCase()=== "/submit-details" && req.method =="POST"){
            const body=[];
            req.on('data',chunk=>{
                console.log(chunk); // reading chunk by chunk variabe passedin callback function
                body.push(chunk); //pushing all chunks in body array
            });
            req.on("end",()=>{
                const fullBody=Buffer.concat(body).toString(); // in full body we are concating all objects and converting them to string 
                console.log(fullBody);

                const bodyObject={}; // let us try to get input data in json or key pair value so that we can use it as any way we want
                const params= new URLSearchParams(fullBody)
                for(const [key,val] of params.entries()){
                    bodyObject[key]=val;
                }// above for loop is method 1 to get key value pair object which is generally longer method where we will get key value pair in bodyObject variable this is all done because of URLSeachParams class 
                console.log(bodyObject)

                // method 2 to get key value pair 
                const BodyObject2= Object.fromEntries(params);
                console.log(BodyObject2); // so basically by Obeject.fromEntries( ) method and passing URLSearchParams class object in it we an seperate key value pair by this short method also.



                // let Us try to write this data in the file.
                fs.writeFileSync('user.txt', JSON.stringify(BodyObject2)); //fs.writeFileSync() method to write content in file and passing parameters filename and constent after applying JSON.stringfy which converts the object to JSON String but will override existing content
            })
            fs.writeFileSync('user.txt', 'Akash Rawat')
            res.statusCode=302;
            res.setHeader('Location', '/');
        }
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Coding by akash</title></head>');
        res.write('<body><h1> Akash will be greatest coder ever existed</h1></body>');
        res.write('</html>');
        return res.end();
    
};
module.exports = userRequestHandler

/*
We can also export extra things instead of exporting only one object as by following methods:
Method 1 :
module.exports={
handler:userRequestHandler;
extra:"extra";
}

Method 2:
module.exports.handler=requesthandler;
module.exports.extra="Extra";

method 3:
exports.handler=;  
exports.extra=extra;
*/
