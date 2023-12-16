/*let agge: number = 20
if (agge>= 18) { console.log("Hello You are eloginle for vote");}
else {console.log(`Fuck off Kid`)}

let aagge: number = 13
let name: string = "Adnan"
let contry: string = "Pakistan"
if (contry == "Pakistan") {
    if (agge < 13) { console.log(`hello ${name} you are child`); }
    else if (aagge >= 13 && aagge < 18) { console.log(`hello ${name} you are teenage`); }
    else if (aagge >= 18 && aagge <= 50) { console.log(`hello ${name} you are adult`); }
}
else { console.log(`hello ${name} yeh to waarh gaya`); } 

let x : number = 10
let y : number = 1
if (x==1){console.log('x is positive');}
if(y==1){console.log('y is positive')}
else {console.log(`this is negative`)}

let agee : number = 50
let z : boolean = true
if (z){
if (agee < 17) {console.log(`teanager`)}
else if (agee>17 && agee<22) {console.log(`adult`)}
else {console.log(`old age`)}}
else {console.log(`you are in wrong palce`)}
// December 3

function marks (sc: number, math: number, eng:number){let b = (sc + math + eng)
return (b)
}



//let cvbf =marks (1,1,2);
//console.log(cvbf);
//Arrays

let fruits = ["apple", "banana", "gava", "pineapple"];
console.log(fruits);
fruits.splice(1,0,"lemon","kiwi" )
console.log(fruits);
fruits.push ("watermelon");
console.log(fruits[4]);
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.pop();
console.log(fruits);
console.log(fruits[1])
fruits.pop();
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.pop();
fruits.unshift("alberta");
console.log(fruits);

fruits.pop()

// Loops
// while
//let acc =1

//while (acc <= 5){console.log(`helloworld`)
//acc++
//}

// for loop
//for(let x =1 ;x<= 5; x++) {console.log(`hello  1 world`)}

//for (let x =4 ;((x)* x* (x-1));x) {console.log(x)

function isPrime(num: number): boolean {
if (num <= 1) {
        return false;
    }

    // Check for divisibility from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // If divisible, the number is not prime
        }
    }

    return true; // If not divisible by any number, it is prime
}


console.log(isPrime (3))
 

















export { };


var aaa=1;
if(aaa<=0){console.log(`Hello world`);
}
else console.log('wrong world');

console.log(aaa);


  
if (true) {
  var blockVar = 10; // blockVar has block scope
  console.log(blockVar); // 10
}
console.log(blockVar); //


let firstName: string = `Jamal`;
let lastName: string = `Ahmed`;
console.log(`Hello !`,`${firstName}`,`${lastName}`);

let n: number =2;
console.log(n!=1);


let country : string = "lhr";
let age: number  = 10;
if (country === "lhr"){
    if(age >= 18){console.log("Congrats ! you are elogible for tickets");
}
else{console.log(`Please leave this place`);
}
}
else{console.log (`wrong country`);
}



//for (let i=1 ;i<3; i++){console.log(`hello world`)}

let cleanestcities = ["karach","lahore","islamabad","peshawar"];
for (let i = 0; i<=0; i++){
    if("islamabad"===cleanestcities[i])
{console.log(`It is cleanest city`);
 ;}
 else {console.log(`dirty city`)}
}
for (let i=1; i<=10;i++)
console.log(i);

//Write a loop that prints numbers from 10 to 1 in descending order.

for(let i=10;i>=1;i--){
    console.log(i);


}

 Calculate and print the sum of numbers from 1 to 5 using a loop.
for(let i=1;i<=10;i++){
  console.log(i);
}


for(let x=7; x<=10;x++){
  
    let wi: number = 1
    

    if (x%wi==1){
    
        console.log(`${x}  the number is prime`) 
    }
        else {console.log(`${x} not prime`)}
    
    


}

function isPrime(num: number): boolean {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function printPrimesUpTo(limit: number): void {
    for (let i = 2; i <= limit; i++) {
      if (isPrime(i)) {
        console.log(i);
      }
    }
  }

  printPrimesUpTo(100)*/


//let xx=1
 //while (xx<=10);{console.log(`yahoo welcome`);
 //(xx=xx+1)  

//}
//
//for (let nz=1; nz<=10;nz++);{console.log(`Ali`)}



/*function multiplication(n1: number , n2 : number){
  console.log(n1*n2)

}*/

let fruit = ['apple',
 'banana',
 `caps`,
 `scliec`
]

for (x=1; x< fruit.length;x++);
{
  console.log(x)
}



export{}


