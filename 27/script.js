// console.dir shows the element as an object witj there properties
console.dir(document.getElementById("span"));
// nodename is use to get the name of node or element tag name
console.log(document.body.nodeName);
// to create a group in console (group of outputs)
// console.group("Group Start");
// console.groupCollapsed(console, document);
// console.groupEnd("Group End")
// innerHTML allow to access the html inside an element (element nodes only)
let data = document.getElementById("container");
let store = document.getElementById("store");
console.log(document.body.innerHTML);
data.innerHTML = '<b style="font-size: 30px;">Hello My name is Hassan Raza</b>';
store.innerHTML = "<progress></progress>";
// outerHTML allow to access the html inside an element + the element itself (element nodes only)
console.log(data.outerHTML);
// textContent provide access to text in an element
console.log(data.textContent);
