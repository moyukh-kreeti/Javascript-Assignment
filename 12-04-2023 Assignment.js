// 1. Write a program that declares a variable using var, let, and const and prints the value to the console.

var x = 5;
console.log(x);

let y = "Hello";
console.log(y);

const z = true;
console.log(z);

//2. Write a program that reassigns a value to a variable declared with let and prints the new value to the console.

let x = 5;
x = 10;
console.log(x);

//3. Write a program that tries to reassign a value to a variable declared with const and prints the message to the console

const x = 5;
x = 10;

//4. Write a program to declare a const, let, var variable within an if statement and try to access the variable outside the if block, what is the result?

if (1>0) {
  var x = 5;
  let y = "Hello";
  const z = true;
}
console.log(x); 
console.log(y); 
console.log(z); 

//5. Write a program that concatenates two or more strings and prints the result to the console.

const str1 = "Hello";
const str2 = "World!";
console.log(str1 + " " + str2);

//6. Write a program that takes a string as input and prints the length of the string to the console.

const str = prompt("Type here a string?");
console.log(str.length);

// Write a program that converts a string to uppercase and prints the result to the console.

const str3 = prompt("Type here a string?");
console.log(str3.toUpperCase);

