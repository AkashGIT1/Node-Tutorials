const http = require('http');
const requestHandler= require('./user');

const server=http.createServer(requestHandler);

const port=3003;
server.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`)
});