let url = require("url");
console.log(url);

let httpUrl = "https://sale.vmall.com/hwmate.html#abc?cid=10602";
let urlObj = url.parse(httpUrl);
console.log(urlObj);

let targetUrl = "http://www.taobao.com/";
httpUrl = "./sxt/qianduan/laochen.html";

let newUrl = url.resolve(targetUrl, httpUrl);
console.log(newUrl);
