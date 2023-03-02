const http = require("http");
const numCPUs = require("os").cpus().length;
const cluster = require("cluster");
if (cluster.isMaster) {
  console.log("Master process id is", process.pid);
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  cluster.on("exit", function (worker, code, signal) {
    console.log("worker process died,id", worker.process.pid);
  });
  cluster.on("listening", function (worker, address) {
    console.log(
      "A worker with #" +
        worker.id +
        " is now connected to " +
        address.address +
        ":" +
        address.port
    );
  });
} else {
  // Worker可以共享同一个TCP连接
  // 这里是一个http服务器

  http
    .createServer(function (req, res) {
      res.writeHead(200);
      console.log(Math.random() + " process id is", process.pid);
      res.end(`hello word,process id is ${process.pid}`);
    })
    .listen(8000);
}
