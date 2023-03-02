const cheerio = require("cheerio");
const axios = require("axios");
const fs = require("fs");
const url = require("url");
const path = require("path");
// 获取HTML文档得内容，内容得获取跟jquery一样
let httpUrl = "https://www.pkdoutu.com/article/list/?page=1";

//等待函数
async function wait(milliseconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, milliseconds);
  });
}

//获取页面总数
async function getNum() {
  let res = await axios.get(httpUrl);
  let $ = cheerio.load(res.data);
  let btnLength = $(".pagination li").length;
  let allNUm = $(".pagination li")
    .eq(btnLength - 2)
    .find("a")
    .text();
  return allNUm;
}

async function getListPage(pageNum) {
  let httpUrl = "https://www.pkdoutu.com/article/list/?page=" + pageNum;
  let res = await axios.get(httpUrl);
  let $ = cheerio.load(res.data);
  //获取当前页面得所有得表情页面的链接
  $("#home .col-sm-9>a").each(async (i, element) => {
    let pageUrl = $(element).attr("href");
    let title = $(element).find(".random_title").text();
    let reg = /(.*?)\d/gis;
    title = reg.exec(title)[1];
    fs.mkdir("./img/" + title, function (err) {
      if (err) {
        console.log("这是错误1", err);
      } else {
        console.log("成功创建目录：" + "./img/" + title);
      }
    });
    await wait(100);
    parsePage(pageUrl, title);
  });
}

async function parsePage(pageUrl, title) {
  let res = await axios.get(pageUrl);
  let $ = cheerio.load(res.data);
  $(".pic-content img").each(async (i, element) => {
    let imgUrl = $(element).attr("src"),
      extName = path.extname(imgUrl);
    // 图片写入路径和名字
    await wait(50);
    let imgPath = `./img/${title}/${i}${extName}`;
    // 创建写入图片流
    let ws = fs.createWriteStream(imgPath);
    axios.get(imgUrl, { responseType: "stream" }).then((res) => {
      res.data.pipe(ws);
      console.log("图片加载完成：" + imgPath);
      //关闭写入流
      res.data.on("close", () => {
        ws.close();
      });
    });
  });
}

async function spider() {
  //获取所有得页面总数
  let allPageNum = await getNum();
  for (let i = 1; i < allPageNum; i++) {
    await wait(2000);
    getListPage(i);
  }
}
spider();
