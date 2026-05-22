async function hassan() {
  let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data 100");
    }, 1000);
  });
  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data 894");
    }, 5000);
  });
  //   p1.then(alert);
  //   p2.then(alert);
  console.log("fetching Data p1 please wait");
  let p1v = await p1;
  console.log("p1 Data Found");
  console.log("fetching Data p2 please wait");
  let p2v = await p2;
  console.log("p2 Data Found");
  return [p1v, p2v];
}
const runner = async () => {
  console.log("Hello i am Runner & i Can't run slowly");
};
const ddr = async () => {
  let a = await hassan();
  let b = await runner();
};
ddr();
