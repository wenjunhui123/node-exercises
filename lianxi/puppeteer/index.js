let puppeteer = require("puppeteer");

async function test() {
  // puppeteer.launch实例开启浏览器
  // 可以传入一个options对象，可以配置为无界面浏览器，也可以配置为有界面浏览器
  // 无界面浏览器性能更高更快，有界面一般用于调试开发
  let options = {
    // 设置视窗的宽高
    defaultViewPort: {
      width: 1400,
      height: 800,
    },
    // 设置为有界面，如果为true，即为无界面
    headless: false,
    // 设置放慢每个步骤的毫秒数
    // slowMo: 250,
  };
  let browser = await puppeteer.launch(options);
  // 打开新页面
  let page = await browser.newPage();
  // 访问页面
  await page.goto("https://www.dytt8.net/index.html");
  // 获取页面对象
  // 通过点击页面跳转的方式
  // elementHandles = await page.$$("#menu li a")
  // elementHandles[2].click()
  // 通过表单输入进行搜索
  let inputEle = await page.waitForSelector(".searchl .formhue");
  // 让光标进入到输入框
  await inputEle.focus();
  // 往输入框输入内容
  await page.keyboard.type("蝙蝠侠");

  await page.$$eval('.bd3rl .searchr input[name="Submit"]', (element) => {
    element[0].addEventListener("click", function (event) {
      event.cancelBubble = true;
    });
  });
  // 点击按钮
  let btnEle = await page.waitForSelector('.searchr input[name="Submit"]');
  await btnEle.click();

  // 点击电影详细地址
  let movieLink = await page.waitForSelector(".bd3r .co_content8 ul tr td a");
  await movieLink.click();
}

test();
