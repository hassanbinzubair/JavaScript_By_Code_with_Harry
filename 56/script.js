class Employee {
  constructor(id) {
    console.log(
      `Constructor of Employee CLass is Working...Request Id : ${id}`,
    );
    this.id = id;
  }
  login() {
    console.log(`Employee has Logged in`);
  }
  logout() {
    console.log(`Employee has Logged out`);
  }
  requestLeaves(leaves) {
    console.log(`Employee has requested ${leaves} Leaves - Auto Aproved`);
  }
}
class Programmer extends Employee {
  //   constructor() {
  //     super();
  //   }
  constructor(id) {
    super(id)
    console.log(
      `Constructor of Employee CLass is Working...Request Id : ${id} Programming with AI `,
    );
    this.id = id;
  }
  requestCoffees(x) {
    console.log(`Employee has Requested ${x} Coffees`);
  }
  requestLeaves(leaves) {
    // console.log(
    //   `Employee has requested ${leaves + 1} Leaves (one extra for being a programmer)`,
    // );
    super.requestLeaves(leaves + 1);
    console.log("one extra is granted");
  }
}
let RandomId = Math.ceil(Math.random() * 1000);
let e = new Programmer(RandomId);
e.login();
e.requestLeaves(5);
e.requestCoffees(2);
e.logout();
