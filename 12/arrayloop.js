let arr = [1, 35, 47, 67, 32];
// for loop
for (let num = 0; num < arr.length; num++) {
  console.log(arr[num]);
}
// for each loop
arr.forEach((element) => {
  console.log(element);
  console.log(element * element);
});
let name = "Hassan";
let namearr = Array.from(name);
console.log(namearr);
for (const e of name) {
  console.log(e);
}
// print the keys (0 1 2 3 4 5) of arrays
for (let i in name) {
  console.log(i);
}
