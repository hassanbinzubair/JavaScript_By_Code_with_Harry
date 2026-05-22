let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Resolve After 2 seconds");
    resolve(100);
  }, 2000);
});
p1.then((value) => {
  console.log(value);
  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 2");
      console.log("resolved");
    }, 2000);
  });
  return p2;
})
  .then((value) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Promise 3");
        console.log("resolved");
      }, 2000);
    });
  })
  .then((value) => {
    console.log("Already Done");
  });
// Example LoadScript
// https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js
const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = src;
    document.body.appendChild(script);
    script.onload = () => {
      resolve("Script Loaded");
    };
    script.onerror = () => {
      reject("Script not Loaded");
    };
  });
};
let p = loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js",
);
p.then((value) => {
  console.log(value);
}).catch((error)=>{
    console.log("We are sorry but we are having problems in loading this script.");
    
})
