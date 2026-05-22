class RailwayForm {
  constructor(givenname, trainno) {
    console.log("CONSTRUCTER CALLED..." + givenname + " " + trainno);
    this.name = givenname;
    this.trainno = trainno;
  }
  submit() {
    alert(this.name + ": your Form Submited, Train Number: " + this.trainno);
  }
  cancel() {
    alert(this.name + " Your Form Was Canceled, Train Number: " + this.trainno);
  }
}
let HassanForm = new RailwayForm("Hassan", 122625);
let HussainForm = new RailwayForm("Hussain", 111327);
HassanForm.submit();
HussainForm.submit();
HussainForm.cancel();
