const http = require("http");
const fs = require("fs");

http
    .createServer(function(request, response) {
        fs.readFile("./index.html", "utf-8", (err, data) => {
            
            if (err) {
                return response.end("<h1> 404 file not found please try agin later</h1>");
            }
            response.end(data);
        });
    })
    .listen(3000, "192.168.1.51");