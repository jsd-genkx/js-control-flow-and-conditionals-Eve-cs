"use strict";

// TODO: Use if/else to check if it's a number
// (hint: typeof or isNaN)

const userInput = "42";
// Try changing to "hello", 10, null, NaN

if (typeof userInput === "number" && !isNaN(userInput)) {
  console.log("userInput is a Number");
} else {
  console.log("userInput is not a Number");
}

let alternateUserInput = "hello";
if (typeof alternateUserInput === "number" && !isNaN(userInput)) {
  console.log("alternateUserInput is a Number");
} else {
  console.log("alternateUserInput is not a Number");
}

let tenUserInput = 10;
if (typeof tenUserInput === "number" && !isNaN(tenUserInput)) {
  console.log("tenUserInput is a Number");
} else {
  console.log("tenUserInput is not a Number");
}
let nullUserInput = null;
if (typeof nullUserInput === "number" && !isNaN(nullUserInput)) {
  console.log("nullUserInput is a Number");
} else {
  console.log("nullUserInput is not a Number");
}

let naNUserInput = NaN;
if (typeof naNUserInput === "number" && !isNaN(naNUserInput)) {
  console.log("naNUserInput is a Number");
} else {
  console.log("anaNUserInput is not a Number");
}
