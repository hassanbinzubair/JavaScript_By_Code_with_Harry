let a = [90, 99, 93, 95];
console.log(a);
console.log(a[1]);
let b = [12, "Hassan", `${a}`, a, null, undefined, true];
b[7] = 91;
console.log(b);
console.log(b[0]);
console.log(b[1]);
console.log(b[2]);
console.log(b[3]);
console.log(b[4]);
console.log(b[5]);
console.log(b[6]);
console.log(b[7]);
console.log(b.length);
b[0] = "First";
console.log(b.length);
console.log(b);
console.log(typeof a);
// Type of array is object
let arr = [1, 2, 3, 4, 5];
// Convert an array to String
let str = arr.toString();
let join = arr.join("❤️");
let pop = arr.pop(); // return poped value
let push = arr.push("1.0B");
let shift = arr.shift();
let unshift = arr.unshift(11); // return new lenght of an array
console.log(arr, unshift);
let del = delete a[0];
let join1 = [1,2,3,4,5]
let join2 = [123,23423,43543,6575]
let joiner = join1.concat(join2)
let sort = joiner.sort()
let arr123 = [1,2,3,4,5,6,7,8,9]
let splicer =  arr123.splice(2, 4, 311,211)
let slicer = arr123.slice(0,4) // return new array
