//function declerations

function myFun(){
    console.log("hello");
    console.log("hello");
    console.log("hello");
    console.log("hello");
}

// myFun()

               //parameters
function sumFun(a, b){            
    // console.log(a + b)
}

//arguments
// sumFun(2, 3)


function sumMultiply(number1, number2){            
    // let ans = number1 * number2
    // return ans

    return number1 * number2
}

let result = sumMultiply(3, 12)
// console.log("Multiply of the number is : " , result)



function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter your username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("priyanka"))
// console.log(loginUserMessage())


// ...rest operator
function calculateCartPrice (arr1, arr2,...num1){
    return num1
}

// console.log(calculateCartPrice(20, 30, 40, 89, 67))



//function with objects

//object declarations
// const user = {
//     username : "priyanka",
//     price : 2000
// }

//function declearation
function handleObject(annyObjects){
    console.log(`username is ${annyObjects.username} and price is ${annyObjects.price}`)
}

// handleObject(user)

//direct object passed
handleObject({
    username: "priya",
    price: 5666
})


//through array

const myNewAarr = [200, 40, 333, 233]

function returnSecondValue(getArray){
    return getArray //get all array
    // return getArray[1] //through index

}
console.log(returnSecondValue(myNewAarr))





//Arrow Functions
// this keyword refer to the current context

const user = {
    username : "priyanka",
    price : 333,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`)
        // console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "priya"
// user.welcomeMessage()


// function priya() {
//   let username = "pihu"
//     console.log(this.username)  //this work on only object
// }

// priya()



//arrow function
// const priya = () => {
//     let username = "priyanka"
//     console.log(this.username)
// }

// priya()



// 1.methods
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// result = addTwo(12, 34);
// console.log(result)


// 2.methods
// const addTwo = (num1, num2) => (num1 + num2)


// // 3.methods
// const addTwo = (num1, num2) =>({username : "priyanka"})
// console.log(addTwo(12,  2))



//immediately invoked function
// (function chai(){
//     console.log("DB connected");
// })();

// ( (name ) => {
//     console.log(`db connected two ${name}`);
// }) ("priyanka")