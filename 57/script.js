class Animal {
  constructor(name) {
    this.name = Animal.capitalize(name);
  }
  walk() {
    // console.log(`${Animal.capitalize(this.name)} is walking!`);
    console.log(`${this.name} is walking!`);
  }
  static capitalize(name) {
    return name.charAt(0).toUpperCase() + name.substr(1, name.length);
  }
}
// let cat = new Animal(Animal.capitalize("tom"));
let cat = new Animal("tom");
cat.walk();
