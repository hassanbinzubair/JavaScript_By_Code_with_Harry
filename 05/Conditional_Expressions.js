// if else is use to execute a block of code based off some condition
const age = 19;
if (age > 18) {
  console.log("your age is", age, "You can Drive");
} else if (age == 18) {
  console.log("your age is", age, "You are a new Driver");
} else if (age < 10 && age > 5) {
  console.log("your age is", age, "Are you Kidding ?");
} else if (age < 5) {
  console.log("your age is", age, "You are Non-sense Baby !");
} else {
  console.log("you can not Drive");
}
const animal = "lion";
// switch case  is also use to execute a block of code based off some condition
switch (animal) {
  case "lion":
    console.log("Roar");
    break;
  case "cat":
    console.log("Meow");
    break;
  case "dog":
    console.log("Bow Bow");
    break;
  case "duck":
    console.log("Kuack kuack");
    break;
  case "chicken":
    console.log("pakaik");
    break;

  default:
    console.log("Please enter a valid system Entery");

    break;
}
