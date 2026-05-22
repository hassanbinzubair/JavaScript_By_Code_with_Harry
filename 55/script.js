class Employee {
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
let e = new Programmer();
e.login();
e.requestLeaves(5);
e.requestCoffees(2);
e.logout();
