"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//write a progarm taht calculates area of rectengular
let length = 12;
let width = 10;
console.log(`Area of rectangle is ${length * width}`);
// write a program that takes input and calculates the volume of cube
let l = 10;
let w = 10;
let h = 10;
console.log(`Volume of rectangle is ${l * w * h}`);
// write a program which checks if number is positive negative or zero
let n1 = 0;
if (n1 > 0) {
    console.log(`Number is positive`);
}
else if (n1 < 0) {
    console.log(`Number is negative`);
}
else {
    console.log(`number is zero`);
}
//wite a progarm which checks number is even or odd
let n = 12;
if (n % 2 == 0) {
    console.log(`Number is even`);
}
else {
    console.log(`Numner is odd`);
}
/* write a program that determises if a person is eligibale for to vote
 based on their age.*/
let age = 20;
if (age >= 18) {
    console.log(`You are elibilbe for vote`);
}
else {
    console.log(`Sorry! you are not elogible for vote`);
}
/*write a program that calculates the result of a mathematical expression.
 /((10+5)*3-2)/(4%3) -7)*/
function equation(n1, n2, n3, n4, n5, n6, n7) {
    let n8 = ((n1 + n2) * n3 - n4) / ((n5 % n6) - n7);
    console.log(n8);
}
equation(10, 5, 3, 2, 4, 3, 7);
let a1 = 10;
let a2 = 5;
let a3 = 3;
let a4 = 2;
let a5 = 4;
let a6 = 3;
let a7 = 7;
let a8 = ((a1 + a2) * a3 - a4) / ((a5 % a6) - a7);
console.log(a8);
console.log(((a1 + a2) * a3 - a4) / ((a5 % a6) - a7));
console.log(((10 + 5) * 3 - 2) / ((4 % 3) - 7));
