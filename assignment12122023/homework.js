"use strict";
/*Write a program to convert the temperature from
Celsius to Fahrenheit and vice verse.*/
Object.defineProperty(exports, "__esModule", { value: true });
function celsiusToFahrenheit(celsius) {
    return ((celsius * 9 / 5) + 32);
}
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
const celsiusTemperature = 40;
const fahrenheitTemperature = 90;
console.log(`${celsiusTemperature} Celsius is ${celsiusToFahrenheit(celsiusTemperature)} Fahrenheit`);
console.log(`${fahrenheitTemperature} Fahrenheit is ${fahrenheitToCelsius(fahrenheitTemperature)} Celsius`);
//Write a program that calculates the percentage.
function calpercentage(number1, number2) { console.log(Math.round((number1 / number2) * 100) * 100 / 100 + " %"); }
calpercentage(9.4, 100);
// - Write a program that converts given number 
// of days in to weeks and days such as 17 days = 2 weeks and 3 days.
let days = 2;
const week = Math.floor(days / 7);
const remaingdays = days % 7;
console.log(`${days} is equal to ${week} Week(s) & ${remaingdays} Days`);
// - Create a program that determines the category of a user-provided age. 
// If the age is between 0 and 12, print "Child." If it's between 13 and 19, print 
// "Teenager." Otherwise, print "Adult."
let age = 13;
let boolean = true;
if (age <= 12) {
    console.log("child");
}
if (age >= 13 && age <= 20) {
    console.log("Teenager");
}
else {
    console.log("adult");
}
// - Write a program that takes temperature and check it. 
// If it is cold then suggest the user to wear warm clothes 
// and so on according to the weather.
let temp = 0;
if (temp <= 0) {
    console.log(`Hello ! its, ${temp}c out side please wear warm clothes`);
}
else if (temp > 0 && temp <= 8) {
    console.log(`Hello ! its, ${temp}c out side please wear light warm clothes`);
}
else {
    console.log(`Hello ! its, ${temp}c out side please normal warm clothes`);
}
;
//  - Write a program that checks if the given number is  divisible by 3 
// or 5 or both or not divisible by anyone show output accordingly.
let checknum = 100;
if (checknum % 5 == 0 && checknum % 3 == 0) {
    console.log(`${checknum} is divisible by 3 & 5`);
}
else if ((checknum % 3) == 0) {
    console.log(`${checknum} is divisible by 3`);
}
else if (checknum % 5 == 0) {
    console.log(`${checknum} is divisible by 5`);
}
else {
    console.log(`number is not divisible by either 3 or 5`);
}
// - Write a program that checks if the given year is leap year or not.
let year = 2000;
if (year % 4 == 0 && year % 400 == 0 && year % 100 == 0) {
    console.log(`${year} is a leap year. `);
}
else {
    console.log(`This is not a leap year`);
}
//  - Develop a program that determines the day of the week. Ask the user for a 
// number (1-7) and use nested if statements to print the corresponding day's name.
let dayOfWeek = 7;
if (dayOfWeek >= 1 && dayOfWeek <= 7) {
    if (dayOfWeek == 1) {
        console.log("Today is Sunday");
    }
    else if (dayOfWeek == 2) {
        console.log("Today is Monday");
    }
    else if (dayOfWeek == 3) {
        console.log("Today is Tuesday");
    }
    else if (dayOfWeek == 4) {
        console.log("Today is Wednesday");
    }
    else if (dayOfWeek == 5) {
        console.log("Today is Thrusday");
    }
    else if (dayOfWeek == 6) {
        console.log("Today is Friday");
    }
    else {
        console.log("Today is Saturday");
    }
}
else {
    console.log("please enter between 1 - 7");
}
// - Write a program that takes the number of units consumed by a user if it 
// is greater than 100 then add 10% tax if greater than 200 then add 15% of tax 
// so on up to if greater than 500 then add 25% of tax
// Where the tax amount will be calculated by the amount of bill.
let units = 499;
if (units > 0) {
    if (units >= 0 && units <= 99) {
        console.log(`${units} No taxation`);
    }
    else if (units > 99 && units <= 200) {
        console.log(`${units} add 10% tax`);
    }
    else if (units > 200 && units <= 500) {
        console.log(`${units} add 15% tax`);
    }
    else {
        console.log(`${units} add 25% tax`);
    }
}
else {
    console.log(`${units} is invalid input`);
}
