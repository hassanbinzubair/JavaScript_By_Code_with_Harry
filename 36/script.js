// https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js
// // Syncronous programming
// let a = prompt("What is your name?");
// let b = prompt("What is your age?");
// let c = prompt("What is your favorite color?");
// alert(a + " is " + b + " years old and has " + c + " favorite color.");

// // Asynchronous programming
// console.log("Start");
// setTimeout(function () {
//   console.log("Hey I am good");
// }, 3000);
// console.log("End");
function loadScript(src, callback) {
  var script = document.createElement("script");
  script.src = src;
  script.onload = function () {
    console.log(`Script Loaded with ${src}`);
    callback(null, src);
  };
  script.onerror = function () {
    console.log("Error Loading Script with" + src);
    callback(new Error("SRC got Some Error"));
  };
  document.body.appendChild(script);
}
function hello(error, src) {
  if (error) {
    console.log(error);
  }
  console.log("Hello Script " + src);
}
function bye(src) {
  console.log("Bye Bye Script" + src);
}
loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js",
  hello,
);
