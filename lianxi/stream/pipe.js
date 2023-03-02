let fs = require("fs");

// 创建一个可读流
let readerStream = fs.createReadStream("./stream/1.html");
// 创建一个可以写流
let writeStream = fs.createWriteStream("./stream/output.txt");

// 管道读写操作
// 读取input.txt 文件内容，并将内容写入到output.txt文件中

readerStream.pipe(writeStream);

console.log("程序执行完毕");
