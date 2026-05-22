class Animal {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  run() {
    console.log(this.name + " is Running!");
  }
  shout() {
    console.log(this.name + " is Shouting!");
  }
}
class Monkey extends Animal {
  eatBanana() {
    console.log(this.name + " is Eating Banana!");
  }
  hide() {
    console.log(`${this.name} is hiding!`);
  }
}
let ani = new Animal("Bruno", "White");
let m = new Monkey("Chimpu", "Orange");
ani.shout();
m.eatBanana();
m.hide()
// ani.hide() 
