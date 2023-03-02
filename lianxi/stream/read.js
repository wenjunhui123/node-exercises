let fs = require("fs");
let data = "";
let time = 0;

// 创建可读流
let readerStream = fs.createReadStream("./stream/1.html");
// 设置编码为 utf-8
readerStream.setEncoding("utf-8");
// 处理流事件 --> data,end,and error
readerStream.on("data", function (chunk) {
  data += chunk;
  time += 1;
  console.log(time);
});

readerStream.on("end", () => {
  console.log(878787);
});

readerStream.on("error", (err) => {});

console.log("程序执行完毕");
