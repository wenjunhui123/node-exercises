let events = require("events");
let fs = require("fs");
let ee = new events.EventEmitter();

ee.on("hello", function (eventMsg) {
  console.log("这是hello1", eventMsg);
});

ee.on("hello", function (eventMsg) {
  console.log("这是hello2", eventMsg);
});

ee.on("hello", function (eventMsg) {
  console.log("这是hello3", eventMsg);
});

ee.on("hello", function (eventMsg) {
  console.log("这是hello4", eventMsg);
});

function lcReadFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: "utf-8" }, (err, data) => {
      if (err) {
        reject(err);
      } else resolve(data);
    });
  });
}

console.log(process.env.NODE_ENV);

lcReadFile("hello.txt").then((data) => {
  ee.emit("hello", data);
});
