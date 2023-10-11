var fs = require("fs").promises;
async function readFile(filePath) {
  try {
    const data = await fs.readFile(Employee.html);
    console.log(data.toString());
    const data1 = data.toString();
    fs.writeFile("file.html", data1);
  } catch (error) {
    console.error(`Got an error trying to read the file: ${error.message}`);
  }
}
readFile("Employee.html");
var fs1 = require("fs");
var http = require("http");
var server = http.createServer(function (req, res) {
  fs1.readFile("file.html", function (error, data) {
    if (error) {
      res.writeHead(404);
      res.end;
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end;
    }
  });
});
server.listen(5050);
