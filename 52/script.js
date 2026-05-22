class RailwayForm {
  submit() {
    alert(this.name + ": your Form Submited, Train Number: " + this.trainno);
  }
  cancel() {
    alert(this.name + " Your Form Was Canceled, Train Number: " + this.trainno);
  }
  fill(givenname, trainno) {
    this.name = givenname;
    this.trainno = trainno;
  }
}
let HassanForm = new RailwayForm();
let HussainForm = new RailwayForm();
HassanForm.fill("Hassan", 122625);
HassanForm.submit();
HussainForm.fill("Hussain", 111327);
HussainForm.submit();
HussainForm.cancel();
