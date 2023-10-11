const fs = require("fs");
const readStream = fs.createReadStream("rep.txt", { encoding: "utf-8" }); //source file
const writeStream = fs.createWriteStream("w.txt", { encoding: "utf-8" }); //destination that has been overwritten

readStream.on("data", (chunk) => {
  console.log(chunk);
});
writeStream.on("error", (err) => {
  console.error("An error occurred while writing:", err);
});
writeStream.on("finish", () => {
  console.log("File written successfully using streams");
});

readStream.pipe(writeStream); // pipeline used to write into another file


