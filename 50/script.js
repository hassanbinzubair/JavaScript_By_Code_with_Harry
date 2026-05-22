sessionStorage.setItem("Name", "Hassan");
sessionStorage.setItem("ID", "003121");
sessionStorage.setItem("Hobby", "Coding");
console.log(sessionStorage.getItem("name"));
console.log(sessionStorage.removeItem("name"));
setTimeout(() => {
  sessionStorage.clear();
}, 3000);
// Storage Event
localStorage.setItem("ID", "00012");
window.onstorage = (e) => {
  console.log(`Somthing is Changed , ${e}`);
  alert("Somthing is Changed");
  console.log(e);
};
// I changed value in browser
// i use this code
// localStorage.setItem("ID", "00k0023")
