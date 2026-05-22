// Strings are use to Store & Manipulate Text
// Strings can Created by Using "" or ''
let name = "Hassan";
let study = "11th";
let hobby = "Coding";
let phone = 923214442455;
console.log(name.length);
let data1 = 'My Name is "Hassan Raza". I am from Lahore.';
let data2 = "My name is Hassan Raza . My PC-Name is Hassan's-PC ";
console.log(data1);
console.log(data2);
console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);
console.log(name[4]);
console.log(name[5]);
// Strings can also Created by Using ``
// This method (using ${}) is called String Interpolation
let modernJS = `My Name is ${name}. I read in Class ${study}. My Hobby is ${hobby}. You can Contact me at ${phone}`;
console.log(modernJS);
// Escape Sequence Characters
let a1 = "Bana'na";
console.log(a1);

// New Line
let a2 = "Hassan \n Raza \n Attari";
console.log(a2);

// Tab
let a3 = "Hassan \t Raza \t Attari";
console.log(a3);

// Carriage Return
let a4 = "Hassan \r Raza \r Attari";
console.log(a4);

// String Properties
let Name = "Hassan";
console.log(Name.length);
console.log(Name.toUpperCase());
console.log(Name.toLowerCase());
console.log(Name.slice(2, 5));
console.log(Name.slice(2));
// console.log(Name.);
let name1 = "Hassan Bhai";
console.log(name1.repeat("Bhai", "Raza"));
let namea = "Hassan ";
let nameb = "Zubair";
console.log(namea.concat(nameb));
let spaces = "         Hassan          ";
console.log(spaces)
console.log(spaces.trim())
