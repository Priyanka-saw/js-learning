"use strict"; // treat all js code as newer version

// alert(3 + 4)  //
 
let name = "priyanka"
let age = 20
// let isLoggedIn = false


//number =>
//bigint
// String => ""
//boolean => true/false
//null => standalone value  
// undefined => value is not assign
//symbole => unique


//object

// console.log(typeof "priyanka");
// console.log(typeof null);
// console.log(typeof undefined);


//Conversion datatype

// let score = "33ac"
// console.log(typeof score);
// console.log(typeof (score));

// let valueInNumber = Number(score);

// console.log(typeof valueInNumber);
// console.log(valueInNumber);



//"33" => 33
//"33abd" => NaN
//true => 1 : false => 0  for the boolean value

// let isLoggedIn = "Priyanka"
// let booleanisLoggedIn = Boolean(isLoggedIn)
// console.log(booleanisLoggedIn);


// 1 => true; 0 => false; 
// "" => false ; "priyanka" => true


// let SomeNumber = 22;
// let StringNumber =  String(SomeNumber);

// console.log(StringNumber);

// console.log(typeof StringNumber);

// console.log(1 + "2" + 3); 




// operations
let a = 2;
// let b = 3;
// console.log(a + b)
// console.log(a - b)
// console.log(a / b)
// console.log(a % b)
// console.log(a ** b)
// console.log(a * b)


// let str1 = "hello "
// let str2 = "Priyanka"

// let str3 = str1 + str2
// console.log(str3)

// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1" + 2 + 2)
// console.log(1 + 2 + "2")


// comparison
// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 < 1)
// console.log(2 <= 1)
// console.log(2 == 1)
// console.log(2 != 1)

 
 //Don't compare different data types
// console.log("2" > 1)
// console.log("02" > 1)

//  console.log(null > 0)
//  console.log(null == 0)
//  console.log(null >= 0)
 
 
//  console.log(undefined > 1);
//  console.log(undefined < 0);
//  console.log(undefined == 0);
 
 
 // Strictly check not only values but also datatypes check
 // ===

//  console.log("2" === 2);
//  console.log("2" == 2);
 
 
 

 //Summary of Datatypes

 //comparing same datatypes are easy to predicts

 //primitive and nonPrimitive(call by value and call by reference)

//  js is the dynamically typed language

//   Primitive datatype
// 7 types : String, Number, Boolean, Null, Undefined, Symbol(unique element), BigInt

let  nam = " Priyanka"

let Score = 100
let ScoreValue = 100.4

const isLoggedIn = true
const temp = null
let userEmail;

const id = Symbol('123')
const anotherid = Symbol('123')
// console.log(id === anotherid)

const bigNumber = 2432123141132235234242342n
// console.log(typeof bigNumber);


//Reference (Non Primitive)

// Array, Objects, Functions


const heroes = ["Shaktiman", "Doga", "Naagraj"]


let myObj = {
    name : "Priyanka",
    roll : 23,
}

const myFunction = function(){
    console.log("Hello World")
}

let ab = 23
let na = " priyanka"
let sum = 23 + 24
let city = " Bengolre"
// console.table([ab, na, sum, city])

// console.log("hello ")

console.log(typeof myFunction)
console.log(typeof ScoreValue)
console.log(typeof anotherid)
console.log(typeof bigNumber)
console.log(typeof myObj)



