// map create a new array
let arr = [21, 43, 65, 54];
let amap = arr.map((value) => {
  console.log(value);
});
let less10 = [12, 32, 12, 7, 64, 2, 4, 9];
let filtered = less10.filter((a) => {
  return a < 10;
});
// filter is use to filter an array with value that passes test
const add = (v1,v2)=>{
    return v1 + v2
}
console.log(filtered);
let reducer = [7, 8, 9, 5, 5, 33, 22];
let reduced = reducer.reduce((add));
console.log(reduced);
