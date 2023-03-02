const http = require("http");
const fork = require("child_process").fork;

const server = http.createServer((req, res) => {
  if (req.url == "/computed") {
    const computed = fork("./fork_compute.js");
    computed.send("开启一个新的子进程");
    // 当一个子进程使用process.send() 发送消息时会触发'message'事件
    computed.on("message", (sum) => {
      res.end(`Sum is ${sum}`);
      computed.kill();
    });
    // 子进程监听到一些错误消息退出
    computed.on("close", (code, signal) => {
      console.log(
        `收到close事件，子进程收到信号${signal}而终止，退出码${code}`
      );
      computed.kill();
    });
  } else {
    res.end("ok");
  }
});

server.listen(3000, "127.0.0.1", () => {
  console.log("server started at http://127.0.0.1:3000");
});
