let a = {
  name: "Hassan",
  language: "Javascript",
  run: () => {
    alert("Self Run");
  },
};
console.log(a);
console.log(a.name);
console.log(a.language);
let p = {
  run: () => {
    alert("Run");
  },
};
a.__proto__ = p;
a.run();
p.__proto__ = {
  name2: "Ibne Zubair",
};
console.log(a.name2);
