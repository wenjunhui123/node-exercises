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

var sql = "SELECT * from book ORDER BY viewcount ASC LIMIT 0,10";
connection.query(sql, function (err, result) {
  if (err) {
    console.log("查询失败", err.message);
    return;
  }
  console.log("查询成功", result);
});
