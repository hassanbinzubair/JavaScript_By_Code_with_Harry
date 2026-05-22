class Animal {
  constructor(name) {
    this._name = name;
  }
  fly() {
    console.log("I am Flying");
  }
  get name() {
    return this._name;
  }
  set name(NewName) {
    this._name = NewName;
  }
}
class Sparrow extends Animal{
    DrinkWater(){
        console.log("Sparrow is Drinking Water");
    }
}
let a = new Animal("Crow");
let b = new Sparrow("Flyero")
a.fly();
a._name = "Bird"
console.log(a.name);
let c = 55
console.log(a instanceof Animal);
console.log(c instanceof Animal);
console.log(b instanceof Sparrow);
console.log(b instanceof Animal);
