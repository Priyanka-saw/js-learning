function multipleby5(num){
    return num*5;
}
multipleby5.power = 2;

console.log(multipleby5(5));
console.log(multipleby5.power);
console.log(multipleby5.prototype);

// function, Array, String  ---> reference object(ko hi karta hai) --->null


function createUser(username, score){
   this.username = username
   this.score = score;
}

createUser.prototype.myfunction = function(){
    this.score++;
}

createUser.prototype.myfunction2 = function(){
    console.log(`score is ${this.score}`);
    
}

const chai = new createUser("priyanka", 100)
console.log(chai);

const tea = new createUser("niharika", 10)
console.log(tea);


chai.myfunction2()

// console.log(createUser.username);



/*
    behind the scene of objects

    1. A new object is created
    2. A prototype is linked (newly created object get linked to the prototype property of 
    the constructed function),
    
    3. The constructor is called
    4. the new object is called

 */