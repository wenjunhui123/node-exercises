let fs = require("fs");
let zlib = require("zlib");

// 压缩input.txt 文件为input.txt.gz
// fs.createReadStream("./stream/input.txt")
//   .pipe(zlib.createGzip())
//   .pipe(fs.createWriteStream("./stream/input.txt.gz"));

// console.log("文件压缩完成");

// 压缩input.txt 文件为input.txt.gz
fs.createReadStream("./stream/input.txt.gz")
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream("./stream/input.txt"));

console.log("文件解压完成");
