let mysql = require("mysql");

let options = {
  host: "localhost",
  port: "3306",
  user: "root",
  password: "123456",
  database: "test",
};

let connection = mysql.createConnection(options);

// 建立连接
connection.connect((err) => {
  if (err) {
    console.log("数据库连接失败");
  } else {
    console.log("数据库连接成功");
  }
});

function sqlQuery(strSql, arr) {
  return new Promise(function (resolve, reject) {
    connection.query(strSql, arr, function (err, results) {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

module.exports = sqlQuery;
