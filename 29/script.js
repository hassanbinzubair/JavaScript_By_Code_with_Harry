let dev = document.getElementById("dev");
let q = dev.getAttribute("class"); // to get attribute of an element by there name
console.log(q);

let w = dev.getAttribute("id");
console.log(w);

let e = dev.getAttribute("style");
console.log(e);

let r = dev.hasAttribute("class"); // to check the the target element has an attribute or not
console.log(r);

let t = dev.hasAttribute("id");
console.log(t);

let y = dev.hasAttribute("style");
console.log(y);
let u = dev.setAttribute("hidden", "false"); // to set an attribute
console.log(u);
let i = dev.setAttribute("class", "first blast bomb misile bullet");
let o = dev.setAttribute("src", "https://example.com");
let p = dev.removeAttribute("src"); // to remove an attribute
let a = dev.removeAttribute("hidden");
let s = dev.attributes; //to get the list of an element's attribute 
console.log(s);
let d = dev.dataset; // data- is use to add a custom attribute 
console.log(d);
console.log(d.software);
console.log(d.user);