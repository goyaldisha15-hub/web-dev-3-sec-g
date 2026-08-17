const http = require("http");

const server=http.createServer((req, res)=>{
    console.log(req.url);
    console.log(req.headers);
    if(req.url=="/"&& req.method=="GET"){
    res.writeHead(200, {"Content-Type":"text/html"});
    res.write("<h1>Hello World</h1>");
    res.end();
}else if(req.url=="/about"&& req.method=="GET"){
    res.writeHead(200, {"Content-Type":"text/html"});
    res.write("<h1>About Page</h1>");
    res.end();
}else if(req.url=="/contact"&& req.method=="GET"){
    res.writeHead(200, {"Content-Type":"text/html"});
    res.write("<h1>Contact Page</h1>");
    res.end();
}else if(req.url=="/api/users"&& req.method=="GET"){
    res.writeHead(200, {"Content-Type":"application/json"});
    res.write("Page not found")
}
res.end()})

server.listen(3000,()=>{
    console.log("server is running on port 3000")
});