const http=require('http');

const server=http.createServer((req , res)=>{
    console.log(req.url,req.method);

    res.write(`
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <head>
        <nav>
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/men">men</a></li>
                <li><a href="/women">women</a></li>
                <li><a href="/kids">kids</a></li>
                <li><a href="/cart">cart</a></li>

            </ul>
            <h1> Welcome to home </h1>
        </nav>
    </head>
    
</body>
</html>
        
        `);
        if(req.url=== '/men'){
            res.write(`
                <html>
                <head>
                <title> Practice</title>
                </head>
                <body>
                <div class="nav">
                </div>
                <br>
                <h1> Welcome to mens section</h1>
                </body>
                </html>
                
                `);
           
            }
        else if(req.url=== '/women'){
            res.write(`
                <html>
                <head>
                <title> Practice</title>
                </head>
                <body>
                <div class="nav">
                </div>
                <br>
                <h1> Welcome to women section</h1>
                </body>
                </html>
                
                `);
        }
        else if(req.url=== '/kids'){
            res.write(`
                <html>
                <head>
                <title> Practice</title>
                </head>
                <body>
                <div class="nav">
                </div>
                <br>
                <h1> Welcome to kids section</h1>
                </body>
                </html>
                
                `);

}
}
);

server.listen(3001,()=>{
    console.log('Server is running at address : http://localhost:3001');
})