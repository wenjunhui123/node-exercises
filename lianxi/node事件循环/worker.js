const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "content-Type": "text/plan",
  });
  res.end("I am worker,pid:" + process.pid + ",ppid:" + process.ppid);
  throw new Error("worker process exception!");
});
let worker;
process.title = "node-worker";
process.on("message", function (message, sendHandle) {
  if (message === "server") {
    worker = sendHandle;

    worker.on("connection", function (socket) {
      server.emit("connection", socket);
    });
  }
});

process.on("uncaughtException", function (err) {
  console.log(1111, err);
  process.send({ act: "suicide" });
  worker.close(function () {
    process.exit(1);
  });
});
