let obj = {
  hassan: 100,
  hussain: 70,
  haider: 70,
  kaka: 10,
};
// for in loop
for (const marks in obj) {
  if (!Object.hasOwn(obj, marks)) continue;
  const numbers = obj[marks];
  console.log(obj);
  console.log(marks);
  console.log(numbers);
}
// we discuss arrays in later
let myname = "Hassan Raza";
for (const letters of myname) {
    console.log(letters);
}