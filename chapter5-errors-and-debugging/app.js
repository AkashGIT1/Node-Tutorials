// const http = require('http');
// const testingSyntax= require('./syntax');
// const runtime = require('./runtime')
// const logical=require('./logical')

// const server=http.createServer((req,res)=>{
//     console.log(req.url,req.method);
//     testingSyntax();
//     //runtime();
//     logical();


// });
const http = require('http');
const requestHandler= require('./user');

const server=http.createServer(requestHandler);

const port=3003;
server.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`)
});