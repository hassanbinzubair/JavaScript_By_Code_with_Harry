// try {
//   // throw new Error("Hassan Not allow you to do this");
//   // throw new ReferenceError("Hassan Not allow you to do this");
//   // throw new SyntaxError("Hassan Not allow you to do this");
//   throw new TypeError("Hassan Not allow you to do this");
// } catch (error) {
//   console.log(error);
//   console.log(error.name);
//   console.log(error.message);
//   console.log(error.stack);
// }
try {
  let age = prompt("Enter Your Age.");
  age = Number.parseInt(age);
  if (age > 150) {
    throw new Error("This is Probably not True");
  }
} catch (error) {
  console.log(error);
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
}
console.log("The Script is Running");
