//control flow is also known as the logic flow
// if statemnet

//syntax
// if (condition) {

// }


//logical operators
// <, >, <=, >=, ==, !=, ===(it will check type also), !==(it will check -ve sign)  

// const temperature = 41

// if (temperature === 41) {

//   console.log("less then 50");

// } 
// else{
//   console.log("temperature is greater then 50!");
// }



// const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`User power : ${power}`)
// }



// const balance = 10000
// if(balance > 500) console.log("test");



// const balance = 1000;

// if(balance < 500){
//     console.log("less then")
// } 
// else if(balance < 750){
//     console.log("less then 750");
// } 
// else if(balance < 900){
//     console.log("less then 900")
// } 
// else {
    // console.log("less then 1200");
// }


// const userLoggedIn = true
// const debitCard = true
// const LoggedInFromGoogle = false
// const LoggedInFromEmail = true

// if(userLoggedIn && debitCard){
//     console.log("Allow to buy course")
// }

// if (LoggedInFromGoogle || LoggedInFromEmail) {
//     console.log("user logged In")
// }



//Switch case 
//syntax
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


const month = 3;

switch (month) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("February")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("April")
        break;
    case 5:
        console.log("may")
        break;

    default:
        console.log("default value")
        break;
}



const month2 = "feb"
switch (month2) {
    case "jan":
        console.log("january")
        break;

    case "feb":
        console.log("February")
        break;

    case "Mar":
        console.log("March")
        break;

    case "apr":
        console.log("April")
        break;

    default:
        console.log("Default Value")
        break;
}


//Falsy value
// false, 0, -0, BigInt 0n, null, undefined

//except this value all values are truthy/true values
// some example: "0", 'false', " ", [], {}, function(){}
//whatever writen in string consider it a truthy value

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("object is empty");
    
}


//Nullish Coalescing Operator (??) : null undefined
//normally working in database 

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 15 ?? 20

console.log(val1);


//ternary operator

//condition ? true : false
//example
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less then 80") : console.log("more then 80")
