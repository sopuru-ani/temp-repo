const http = require('http');

const server = http.createServer((req, res)=>{
    // res.write('Hello world!. welcome to my home page');
    if(req.url === '/'){
        res.end('<h1>document, i say</h1>');
    }
    else if(req.url === '/about') {
        res.end('<h1>here is our short history</h1>');
    }
    else{
    res.end(`<h1>oops..yea <br> it don't work..probably under construction</h1>
        <a href = "/">go back to home</a>`);
    }
});

server.listen(5000);