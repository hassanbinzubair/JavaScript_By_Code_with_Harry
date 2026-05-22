let id1 = document.getElementById("id1");
let sp1 = document.getElementById("sp1");
console.log(id1);
// Matches is use to check if element matching the given css selecter
console.log(id1.matches(".elem"));
console.log(id1.matches(".box"));
// Closest is use to look for the nearest ancestor that matches the given css selecter. the element itself also checked
console.log(sp1.closest(".elem"));
// Contains returns true if elementB is in ElementA (a descendent of elementA) or when ElementA === ElementB
console.log(id1.contains(sp1));
console.log(sp1.contains(id1));
