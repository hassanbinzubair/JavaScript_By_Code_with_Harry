class RailwayForm {
  constructor(givenname, trainno, address) {
    console.log(
      `CONSTRUCTER CALLED... Your Name: ${givenname}, Your Address: ${address} & Your Train Number: ${trainno} `,
    );
    this.name = givenname;
    this.address = address;
    this.trainno = trainno;
  }
  preview() {
    alert(
      "Your Name: " +
        this.name +
        " Your Address: " +
        this.address +
        " Your Train No: " +
        this.trainno,
    );
  }
  submit() {
    alert(
      "Your Form is Submited with these Details: \n Your Name: " +
        this.name +
        " Your Address: " +
        this.address +
        " Your Train No: ",
      this.trainno,
    );
  }
  cancel() {
    this.trainno = " No Train";
    alert(this.name + " Your Form Was Canceled, Train Number: " + this.trainno);
  }
}
let HassanForm = new RailwayForm("Hassan", 112526, "Lahore Panjab Pakistan");
HassanForm.preview();
HassanForm.submit();
HassanForm.cancel();
HassanForm.preview();
