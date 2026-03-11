// const http = require("http");
import http from "http";

http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World\n");
}).listen(8000);

// server.listen(3000, () => {
//   console.log("Server running at http://localhost:3000/");
// });


//callback hell
fs.readFile("file1.txt", "utf8", (err, data1) => {
  if (err) throw err;
  fs.readFile("file2.txt", "utf8", (err, data2) => {
    if (err) throw err;
    db.query(`INSERT INTO table VALUES('${data1}', '${data2}')`, (err, result) => {
      if (err) throw err;
      apiCall(result, (err, response) => {
        if (err) throw err;
        console.log("All tasks done!");
      });
    });
  });
});

//promise
const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Operation successful!"); // fulfilled
  } else {
    reject("Operation failed!"); // rejected
  }
});

myPromise
  .then(result => {
    console.log(result); // Runs if promise is fulfilled
  })
  .catch(error => {
    console.error(error); // Runs if promise is rejected
  });


//async/await

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
  console.log("Start");
  await wait(2000); // Wait 2 seconds
  console.log("End after 2 seconds");
}

run();

// Async/Await with File Reading (Node.js)

const fs = require("fs").promises;

async function readFiles() {
  try {
    const data1 = await fs.readFile("file1.txt", "utf8");
    const data2 = await fs.readFile("file2.txt", "utf8");
    console.log("File1:", data1);
    console.log("File2:", data2);
  } catch (err) {
    console.error("Error reading files:", err);
  }
}

readFiles();