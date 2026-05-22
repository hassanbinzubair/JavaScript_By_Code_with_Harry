var p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Hey I am resolved");
    resolve(1);
  }, 2000);
});
p1.then(() => {
  console.log("I am Seccessfully Resolved Completely");
});
p1.then(() => {
  console.log("Done");
});
p1.then(() => {
  console.log("Completed");
});
