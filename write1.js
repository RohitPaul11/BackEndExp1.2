const fs = require("fs").promises;
const http = require("http");
try {
  const read = async () => {
    const data = await fs.readFile("salary.html");
    fs.writeFile("new.html", data);
  };
  read();
} catch (e) {
  console.log("YOU HAVE AN ERROR", e);
}
try {
  setTimeout(() => {
    const ReadandDisplay = async () => {
      const data = await fs.readFile("new.html");
      http
        .createServer((req, res) => {
          res.write(data);
          res.end();
        })
        .listen(5050, () => {
          console.log("Listining to Port 5050");
        });
    };
    ReadandDisplay();
  }, 3000);
} catch (e) {
  console.log("YOU HAVE AN ERROR", e);
}
