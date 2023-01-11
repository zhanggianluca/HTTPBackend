const http = require('http');
const server = http.createServer((req, res)=> {
    if (req.url === '/') {
        res.write("HELLO WORLD"); 
        res.end(); 
    }
    //second route
    if (req.url === "/api/courses") {
        res.write(JSON.stringify([1,2,3]));
        res.write("This is a list of offerings at BTHS"); 
        res.end(); 
    }
});

server.listen(3000); //localhost:3000
console.log("Listening on port 3000 ..."); 

