var express = require("express");
var router = express.Router();
var sqlQuery = require("../lcMysql");

router.get("/", function (req, res, next) {
  res.render("login");
});

router.post("/", async (req, res) => {
  // 根据提交的邮箱和密码判断是否是正确的账号密码
  let strSql = "select *  from user where mail = ? and password = ?";
  let arr = [req.body.mail, req.body.password];
  let result = await sqlQuery(strSql, arr);
  if (result.length != 0) {
    // 登录成功
    user = result[0];
    req.session.username = user.username;
    res.render("info", {
      title: "登录成功",
      content: "账号密码正确，即将进入首页",
      href: "/",
      hrefTxt: "首页",
    });
  } else {
    // 登录失败
    res.render("info", {
      title: "登录失败",
      content: "账号密码错误，即将返回登录页",
      href: "/login",
      hrefTxt: "登录页",
    });
  }
});

module.exports = router;
