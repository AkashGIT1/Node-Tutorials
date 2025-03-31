const http = require('http');

const server = http.createServer((req,res)=>{

    
        console.log(req.url,req.method, req.headers);
        if(req.url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Coding by akash</title></head>');
        res.write('<body><h1> Welcome to homepage </h1></body>');
        res.write('</html>');
        return res.end();
        }else if(req.url === '/products'){
           
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Coding by akash</title></head>');
        res.write('<body><h1> Welcome to products page </h1></body>');
        res.write('</html>');
        return res.end();
        }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Coding by akash</title></head>');
    res.write('<body><h1> Akash will be greatest coder ever existed</h1></body>');
    res.write('</html>');
    return res.end();
    
    
});
const port=3001
server.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`)
});