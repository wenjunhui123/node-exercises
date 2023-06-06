let puppeteer = require("puppeteer");
let axios = require("axios");
let url = require("url");
let fs = require("fs");
let { fsRead, fsWrite } = require("./lcf.js");

(async function () {
  let debugOptions = {
    // 设置视窗的宽高
    defaultViewport: {
      width: 1400,
      height: 800,
    },
    // 设置为有界面，如果为true，即为无界面
    headless: false,
    // 设置放慢每个步骤的毫秒数
    slowMo: 250,
    timeout: 0,
  };
  let browser = await puppeteer.launch(debugOptions);
  // 将延迟函数封装成promise对象
  function lcWait(milliseconds) {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        resolve("成功执行延迟函数，延迟：" + milliseconds);
      }, milliseconds);
    });
  }

  async function parseTxt() {}
})();
