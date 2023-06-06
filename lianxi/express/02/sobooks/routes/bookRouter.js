let express = require("express");
let router = express.Router();
let sqlQuery = require("../lcMysql");

// 进入详情页面必须登录
// 1引入cookie，session相关模块
// 2引入一个判断是否登录的中间件
function isLoginMid(req, res, next) {
  if (req.session.username == undefined) {
    res.render("info", {
      title: "未登录",
      content: "尚未登录，请登录后再访问",
      href: "/login",
      hrefTxt: "登录页",
    });
  } else {
    next();
  }
}

// 3登录界面
router.get("/:bookid", isLoginMid, async (req, res) => {
  let bookid = req.params.bookid;
  let strSql = "select * from book where id=?";
  let result = await sqlQuery(strSql, [bookid]);
  let options = {
    book: result[0],
  };
  res.render("bookInfo.ejs", options);
});

// 4.退出
router.get("/out/exitSession", (req, res) => {
  req.session.destroy(() => {
    console.log("session已经销毁");
  });
  res.send("退出成功");
});

module.exports = router;
