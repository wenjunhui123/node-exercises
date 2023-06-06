let express = require("express");
let app = express();

// 字符串的路由模式
app.get("/", (req, res) => {
  res.send("这是首页");
});

// 类字符串的正则模式
// 例如：匹配2个路径abcd或者acd
app.get("ab?cd", (req, res) => {
  res.send("这是abcd/acd");
});

// 例如路径：/ab+cd /abcd /abbcd /abbbbcd
// 例如路径：/ab*cd,必须以ab开头，cd结尾，中间可以有任意的东西

// 正则匹配路径模式
app.get(/\/a\d{10,}/, (req, res) => {
  res.send("新闻页面");
});

// 动态路由
app.get(
  "/news/:cataoryid/a:newsid",
  (req, res, next) => {
    console.log(req.params);
    req.lcHost = "127.0.0.1";
    next();
  },
  (req, res, next) => {
    res.send(
      "新闻id页面:\n" +
        req.params.newsid +
        "分类ID:" +
        req.params.cataoryid +
        ";req.lcHost:" +
        req.lcHost
    );
  }
);

app.listen(8080);
module.exports = app;
