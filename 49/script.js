let key = prompt("Enter a Key");
let value = prompt("Enter a Value");
localStorage.setItem(key, value);
console.log(`The Key is ${key} & Value is ${localStorage.getItem(key)}`);
if (key == "red" || key == "blue") {
  localStorage.removeIten(key);
}
if (key == 0) {
  localStorage.clear();
}
console.log(localStorage.length);
console.log(localStorage.key(0));
console.log(localStorage.key(1));
console.log(localStorage.key(2));
console.log(localStorage.key(3));
