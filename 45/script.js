let f = () => {
  try {
    let a = 0;
    // console.log(program);
    console.log("All Systems are Working");
    return;
  } catch (error) {
    console.log("This is an Error");
    console.log(p);
  } finally {
    console.log("The End ☠️");
  }
};
f();
// loadscript function using async await
const loadScript = async (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(src + " Created by using Promises async await");
    };
    document.head.append(script);
  });
};
const main = async () => {
  console.log(new Date().getMilliseconds());
  let a = await loadScript("http://127.0.0.1:3000/script1.js");
  console.log(a);
  console.log(new Date().getMilliseconds());
};
main();
