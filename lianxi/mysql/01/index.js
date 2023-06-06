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

// var sql = "SELECT * FROM websites";
// connection.query(sql, function (error, results, fields) {
//   if (error) throw error;
//   console.log("The solution is: ", results);
// });

// 插入数据
// var addSql =
//   "INSERT INTO websites(id,name,url,alexa,country) VALUES(0,?,?,?,?)";
// var addSqlParams = ["菜鸟工具", "https://c.runoob.com", "23453", "CN"];
// connection.query(addSql, addSqlParams, function (err, result) {
//   if (err) {
//     console.log("插入失败", err.message);
//     return;
//   }
//   console.log("插入成功", result);
// });

// connection.end();

// 更新数据
// 我们也可以对数据进行更改
// var modSql = "UPDATE websites SET name = ?,url = ? WHERE id = ?";
// var modelSqlParams = ["移动站", "https://m.sxt.com", 6];
// connection.query(modSql, modelSqlParams, function (err, result) {
//   if (err) {
//     console.log("更新失败", err.message);
//     return;
//   }
//   console.log("更新成功", result);
// });

// 删除数据
// var delSql = "DELETE FROM websites where id=6";
// connection.query(delSql, function (err, result) {
//   if (err) {
//     console.log("删除失败", err.messag);
//     return;
//   }
//   console.log("删除成功", result);
// });
// connection.end();
