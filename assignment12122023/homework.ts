/*Write a program to convert the temperature from 
Celsius to Fahrenheit and vice verse.*/

function celsiusToFahrenheit(celsius: number) {
    return ((celsius * 9/5) + 32);
  }
  
  function fahrenheitToCelsius(fahrenheit: number) {
    return(fahrenheit - 32) * 5/9;
  }
  
  const celsiusTemperature = 30;
  const fahrenheitTemperature = 86;
  
console.log("\n"+`${celsiusTemperature} Celsius is ${celsiusToFahrenheit(celsiusTemperature)} Fahrenheit`+"\n");
console.log(`${fahrenheitTemperature} Fahrenheit is ${fahrenheitToCelsius(fahrenheitTemperature)} Celsius`+"\n");

//Write a program that calculates the percentage.

function calpercentage(number1: number, number2: number) {console.log(Math.round((number1/number2)*100)*100/100 +" %"+"\n")}
calpercentage(10,100);

// - Write a program that converts given number 
// of days in to weeks and days such as 17 days = 2 weeks and 3 days.

let days: number=10

const week:number=Math.floor(days/7);
const remaingdays:number=days%7;
console.log(`${days} is equal to ${week} Week(s) & ${remaingdays} Days`+"\n")

// - Create a program that determines the category of a user-provided age. 
// If the age is between 0 and 12, print "Child." If it's between 13 and 19, print 
// "Teenager." Otherwise, print "Adult."

let age = 13

if (age<=12)
{
    console.log("child"+"\n")
}
 if (age >=13 && age<=20)
{
  console.log("Teenager"+"\n")
}
   else {console.log("adult")+"\n"}

// - Write a program that takes temperature and check it. 
// If it is cold then suggest the user to wear warm clothes 
// and so on according to the weather.

let temp: number = 15;
if(temp<=0){console.log(`Hello ! its, ${temp}c out side please wear warm clothes`+"\n")}
 else if(temp>0 && temp<=8){console.log(`Hello ! its, ${temp}c out side please wear light warm clothes`+"\n")}
else {console.log(`Hello ! its, ${temp}c out side please wear normal warm clothes`+"\n")};

//  - Write a program that checks if the given number is  divisible by 3 
// or 5 or both or not divisible by anyone show output accordingly.

let checknum: number= 15

if(checknum%5==0 && checknum%3==0){console.log(`${checknum} is divisible by 3 & 5`+"\n")
}
  else if ((checknum%3)==0){console.log(`${checknum} is divisible by 3`+"\n")}
  else if(checknum%5==0){console.log(`${checknum} is divisible by 5`+"\n")
} 
else {console.log(`number is not divisible by either 3 or 5`+"\n")}

// - Write a program that checks if the given year is leap year or not.

let year= 2024
if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){console.log(`${year} is a leap year. `+"\n")}
   else {console.log(`${year} is not a leap year`+"\n")}

//  - Develop a program that determines the day of the week. Ask the user for a 
// number (1-7) and use nested if statements to print the corresponding day's name.

let dayOfWeek= 7
if(dayOfWeek >=1 && dayOfWeek<=7)
{
 if(dayOfWeek==1){console.log("Today is Sunday"+"\n")}
    else if(dayOfWeek==2){console.log("Today is Monday"+"\n")}
    else if(dayOfWeek==3){console.log("Today is Tuesday"+"\n")}
    else if(dayOfWeek==4){console.log("Today is Wednesday"+"\n")}
    else if(dayOfWeek==5){console.log("Today is Thrusday"+"\n")}
    else if(dayOfWeek==6){console.log("Today is Friday"+"\n")}
  else {console.log("Today is Saturday"+"\n")}
}
else {console.log("please enter between 1 - 7"+"\n")}

// - Write a program that takes the number of units consumed by a user if it 
// is greater than 100 then add 10% tax if greater than 200 then add 15% of tax 
// so on up to if greater than 500 then add 25% of tax
// Where the tax amount will be calculated by the amount of bill.

let units: number =499
if(units>0)
{
 if(units>=0 && units<=99) {console.log(`${units} No taxation`)}
   else if(units>99 && units<=200){console.log(`${units} add 10% tax`+"\n")}
   else if (units>200 && units<=500){console.log(`${units} add 15% tax`+"\n")}
  else {console.log(`${units} add 25% tax`+"\n")}
}
else {console.log(`${units} is invalid input`+"\n")}

export{}
