function clicked() {
  console.log("The Button Was Clicked");
}
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");
let box6 = document.getElementById("box6");
let box7 = document.getElementById("box7");
let box8 = document.getElementById("box8");
let box9 = document.getElementById("box9");
let box10 = document.getElementById("box10");
//   box2.addEventListener("contextmenu", () => {
//     alert("right clicked");
box2.addEventListener("mouseup", () => {
  console.log("Mouse up");
});
box2.addEventListener("mousedown", () => {
  console.log("Mouse down");
});
box3.addEventListener("mouseenter", () => {
  console.log("Mouse Enter");
});
box3.addEventListener("mouseleave", () => {
  console.log("Mouse Leave");
});
box4.addEventListener("mousemove", () => {
  console.log("Mouse Move");
});
box5.addEventListener("mouseout", () => {
  console.log("Mouse Out");
});
box6.addEventListener("mouseover", () => {
  console.log("Mouse Over");
});
box7.addEventListener("keyup", () => {
  console.log("Key Up");
});
box8.addEventListener("keydown", () => {
  console.log("Key Down");
});
box9.addEventListener("keypress", () => {
  console.log("Key Press");
});
let func = () => {
  console.log("You can Click");
};
box10.addEventListener("click", func);
let areyou = prompt("are you want to click box 10 ?");
if (areyou == "n") {
  box10.removeEventListener("click", func);
}
let form1 = document.forms.master;
console.log(form1);
form1.addEventListener("submit", ()=>{
    alert(" shukria aap ka data hack ho chuka hai= hACKed")
})