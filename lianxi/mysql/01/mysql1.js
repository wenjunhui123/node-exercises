var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  port: "3306",
  database: "test",
});
connection.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log("连接成功");
  }
});

// 创建库
// var sql = "CREATE DATABASE test1";
// connection.query(sql, function (err, result) {
//   if (err) {
//     console.log("创建失败", err.message);
//     return;
//   }
//   console.log("创建成功", result);
// });

// 删除库
// var sql1 = "DROP DATABASE test1";
// connection.query(sql1, function (err, result) {
//   if (err) {
//     console.log("删除失败", err.message);
//     return;
//   }
//   console.log("删除成功", result);
// });

// 创建表
// let sql2 =
//   "CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT , `username` varchar(255) NULL , `password` varchar(255) NULL , `mail` varchar(255) NULL , PRIMARY KEY (`id`)) ";
// connection.query(sql2, function (err, result) {
//   if (err) {
//     console.log("创建失败", err.message);
//     return;
//   }
//   console.log("创建成功", result);
// });

// 插入数据
// let sql3 = "insert into user values(0,?,?,?)";
// let sqlParams = ["张三", "123456", "123@123.com"];
// connection.query(sql3, sqlParams, function (err, result) {
//   if (err) {
//     console.log("插入失败", err.message);
//     return;
//   }
//   console.log("插入成功", result);
// });

// 删除表
// let sql4 = "DROP TABLE user";
// connection.query(sql4, function (err, result) {
//   if (err) {
//     console.log("删除失败", err.message);
//     return;
//   }
//   console.log("删除成功", result);
// });

// 查询数据库
let sql5 = "SELECT * FROM user";
connection.query(sql5, function (err, result) {
  if (err) {
    console.log("查询失败", err.message);
    return;
  }
  console.log("查询成功", result);
});
