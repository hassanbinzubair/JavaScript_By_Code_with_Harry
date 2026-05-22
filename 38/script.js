let prslv = new Promise((resolve, reject) => {
  setTimeout(() => {
    // console.log("promise completed");
    resolve("Resolved");
  }, 3000);
});
console.log(prslv);
let prjct = new Promise((resolve, reject) => {
  setTimeout(() => {
    // console.log("promise Rejected");
    reject(new Error("your Promise is Rejected")); // this syntax is use to create a new error in js
  }, 3000);
});
console.log(prjct);
prslv.then((value) => {
  console.log(value);
});
(prjct.then((value) => {
  console.log(value);
}),
  (error) => {
    console.log(error);
  });
// prjct.catch((error)=>{
//   console.log("Some Error Occurred in prjct");
// })
