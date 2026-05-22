// let arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
// let a = arr[0]
// let b = arr[1]
// let [a, b, c, d, ...e] = arr;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// let [a, b, , ...e] = arr;
// console.log(a);
// console.log(e);
// console.log(b);
// let { a, b } = { a: 1, b: 5 };
// console.log(a);
// console.log(b);
// let arr = [1, 3, 5];
// let obj = { ...arr };
// console.log(arr);
// console.log(obj);
// function sum(v1, v2, v3) {
//   return v1 + v2 + v3;
// }
// console.log(sum(...arr));
let obj = {
  name: "Hassan",
  company: "Code with Ibne Zubair",
  address: "Lahore, Panjab, Pakistan",
};
console.log({ name: "Hassan Raza", ...obj });
console.log({ ...obj, name: "Hassan Raza" });
