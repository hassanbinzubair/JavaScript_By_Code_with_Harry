console.log(document.cookie);
document.cookie = "Name=Hassan";
document.cookie = "Id=001";
document.cookie = "Age=17";
document.cookie = "Class=11th";
document.cookie = "Hobby=Coding";
let key = prompt("Enter a Key");
let value = prompt("Enter a Value");
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
console.log(document.cookie);
console.log(decodeURIComponent(key) + "=" + decodeURIComponent(value));
document.cookie =
  "username=Hassan;path=/a;expires=Tue, 29 March 2026, 03:18:22 GMT";
console.log(document.cookie);