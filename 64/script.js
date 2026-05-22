const sayhello = (name) => console.log("Hello " + name);
sayhello("Hassan");
let x = {
  name: "Hassan",
  role: "Js Developer",
  exp: 15,
  show: function () {
    // let that = this
    // console.log(that)
    // setTimeout(function () => {
    //     console.log(`The name is ${that.name}`);
    // }, 2000);
    setTimeout(() => {
      console.log(`The name is ${this.name}`);
    }, 2000);
  },
};
console.log(x.name, x.exp);
x.show();
