const http = require("http");

http.createServer(router).listen(3000);

function router(req, res) {
  console.log("New request");
  console.log(req.url);
  switch (req.url) {
    case "/hello":
      res.writeHead(201, { "Content-Type": "text-plain" });
      res.write("Hello HTTP NodeJS");
      res.end();
      break;
    default:
      res.writeHead(404, { "Content-Type": "text-plain" });
      res.write("I dont know that you nedd!");
      res.end();
  }
}

console.log("Listen in port 3000");
