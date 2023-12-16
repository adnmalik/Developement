"use strict";
/*/18 November 2023
let first11Name = "Adnan";
console.log(typeof first11Name);
//Operators
// Arithmatic Logical
//Arithmatic Operators (+ - * /)
let n1 = 10;
let n2 = 20;
console.log("Addition ", n1 + n2);
console.log("Subtract " ,n2 - n1);
console.log("Multiplication ", n1 * n2);
console.log("Division " ,n1 / n2);

// nubers declerared as strings
let n3 = "12";
let n4 = "13";
let result = n3 + n4;
console.log("Result ", result);
//Assignment Operators "=" (only one operator)
let n6 = 23;
n6 = 23 + 6; //29
n6 = 23 - 6; //17
n6 = n6 + 6; // 29
n6 = n6 - 6; //23
//shortway
n6 += 6;
n6 -= 6;
//Comparision Operators always return results in Bolliyan (either TRUE or FALSE)
let n7 = 5;
console.log(n7==5);  //ture  //value
console.log( n7===5 ); // true // valur & data Type
console.log(n7 != 5); // false
console.log(n7 > 8); // false
console.log(n7 < 8); // true
console.log(n7 >=  8);  //
//console.log(n7 =< 8);  //

// 25 Nov 2023
let marks1: number = 20;
console.log("Welcome");



let num = 30;
if(num%2 == 0) {console.log("EVENDD")}
else {console.log ("ODD")}

let a: String = "b";
if(a==("a"|| "e"|| "i" || "o" || "u"))
{console.log("Voveles");
}
else {console.log("no False")}
// if else

let age: number = 8;
let name: string = "Adnan Ahmed Malik" ;
export
let country: string = "Pakistan"
if (age>=19) {console.log(`Hello "Adult"`);
 if (country = "Pakistan"){console.log(`Hello my first name is ${name} and my country is ${country}`)}
else {console.log (`hello ${name}`)};}
else if

// functions
// name functions
// arrow functions (latest syntex) (ES6 Features)
// pass value to fuctiom  are perameters

/*function greet(){console.log("Hello there");
console.log("I am a function")
}
greet()
let firstName : String = "Adnan"
let lastName: String = "Malik"
console.log (`My first Name is ${firstName} and last name is ${lastName}`)
let p1:number = 3;
let p2: number = 1;
console.log(p1+p2);
console.log("p1"+"p2"); // treat as srting

let p3 : number = 100;
let p4 : number = 200;
console.log(p3%p4);
let p5: number = 12;
console.log(p5);
p5 +=7;
console.log(p5);
let n09 = 10
console.log(n09 === 10);
let p02: number = 5
console.log(!(p02==5));
let userName






export{}*/
Object.defineProperty(exports, "__esModule", { value: true });
function hello() {
    console.log(`Good morning`);
}
hello();
function greet() {
    console.log(`hello world`);
    console.log(`how are you`);
}
greet();
function greet2(fname, lastName) {
    console.log(`Hello` + " " + fname + " " + lastName);
}
greet2("a", "b");
console.log();
greet2("c", "d");
function addition(a, b) {
    console.log(a + b);
}
//addition(12,18)
// calculator
let n1 = 4;
let n2 = 5;
function sum(n1, n2) {
    console.log(n1 + n2);
}
function subtarct(n1, n2) {
    console.log(n1 - n2);
}
function divion(n1, n2) {
    console.log(n1 / n2);
}
function multiplication(n1, n2) {
    console.log(n1 * n2);
}
divion(12, 13);
multiplication(12, 12);
subtarct(12, 10);
sum(12, 12);
// December 3 2023
// prime number - test case not working /
function prime(n1) {
    if (n1 % 2 == 0) {
        console.log(`this is prime number`);
    }
    else {
        console.log(`This is not prime number`);
    }
}
prime(5);
const fri = ["Ali", "Ahmed", "Nidoo", 'Jhon', "Bosco"];
// guest list
const guestlist = [];
guestlist.push(`adnan`);
guestlist.push(`ali`);
guestlist.push(`ahmed`);
console.log(guestlist);
guestlist.pop();
console.log(guestlist);
guestlist.push(`Saad`);
console.log(guestlist);
