let fs = require("fs");

fs.readFile(
  "hello.txt",
  { encoding: "utf-8", flag: "r" },
  function (err, data) {
    if (err) {
      console.log(err);
    } else {
      wjhHello.emit("hello", data);
    }
  }
);

class WjhEvent {
  constructor(data) {
    this.event = {};
  }
  on(eventName, eventFn) {
    if (this.event[eventName]) {
      this.event[eventName].push(eventFn);
    } else {
      this.event[eventName] = [];
      this.event[eventName].push(eventFn);
    }
  }
  emit(eventName, eventMsg) {
    if (this.event[eventName]) {
      this.event[eventName].forEach((fn) => {
        fn(eventMsg);
      });
    }
  }
}

let wjhHello = new WjhEvent();
wjhHello.on("hello", (msg) => {
  console.log("这是hello1", msg);
});
wjhHello.on("hello", (msg) => {
  console.log("这是hello2", msg);
});
wjhHello.on("hello", (msg) => {
  console.log("这是hello3", msg);
});
wjhHello.on("hello", (msg) => {
  console.log("这是hello4", msg);
});
