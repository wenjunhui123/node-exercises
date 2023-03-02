let fs = require("fs");
let data = "";

// 创建一个可以写入的流，写入到文件output.txt中
let writeStream = fs.createWriteStream("./stream/output.txt");
// 使用utf-8编码写入数据
writeStream.write(data, "utf-8");
// 标记文件末尾
writeStream.end();
// 处理流事件 -->data,end,and error
writeStream.on("finish", () => {
  console.log("写入完成");
});
writeStream.on("error", (error) => {
  console.log(error);
});

console.log("程序执行完毕");
