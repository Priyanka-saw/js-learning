const score = 400

// console.log(score)

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);

//it will fix the value after decimal : if 2 it will give two zeros(.00)
// console.log(balance.toFixed(2));


//point ke phle priority 
const otherNumber = 12.34;
// console.log(otherNumber.toPrecision(3));


//gives commas according to the indian values
const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'))


//MATHS

//absolute values it will only change -ve values to +ve 
// console.log(Math.abs(-4))

//it will give approx values
// console.log(Math.round(2.3))

//it will give minimum and maximum number
// console.log(Math.min(2, 3, 4, 6))
// console.log(Math.max(2, 3, 4, 6))

// console.log((Math.random() * 10) + 1)


//it will return from given range 
//floor : less then or equal values
//ceil : greater values
//  + 1 : to avoid 0 values 
const min = 20;

const max = 30;

console.log(Math.floor(Math.random() * (max - min + 1)) + min)