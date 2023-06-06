var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser"); // cookie
var logger = require("morgan"); // 日志

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

app.set("views", path.join(__dirname, "views")); // 视图文件夹
app.set("view engine", "ejs"); // 视图引擎

app.use(logger("dev")); // 日志
app.use(express.json()); // 解析json
app.use(express.urlencoded({ extended: false })); // 解析表单
app.use(cookieParser()); // cookie
app.use(express.static(path.join(__dirname, "public"))); // 静态资源

app.use("/", indexRouter);
app.use("/users", usersRouter);

app.use(function (req, res, next) {
  next(createError(404)); // 404
});

app.use(function (err, req, res, next) {
  res.local.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
