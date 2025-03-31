const http= require('http');
const requestHandler = require('./handler');

const server=http.createServer(requestHandler);

port=3002;
server.listen(port,()=>{
    console.log(`Server is running on : http://localhost:${port}`)
})