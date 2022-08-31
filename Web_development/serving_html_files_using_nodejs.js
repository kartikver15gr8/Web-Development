const http = require('http');
const fs = require('fs');
const fileContent = fs.readFileSync('hosting_web_template_for_nodejs.htm','utf-8');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content_type':'text/html'});
    res.end(fileContent)
})

server.listen(80, '127.0.0.1',()=>{
    console.log("Listening to the port 80");
})