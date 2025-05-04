const Myname = "priyanka    ";
console.log(Myname.length);

// console.log(Myname.trim().length)

// a prototype is an object from which other objects inherit properties and methods


const myObj = {
    city : "Jamshedpur",

    great2 : function(){
        console.log(`welcome to the ${this.city}`);
        
    },

    great(){
        console.log(`Greating from ${this.city}`);  
    },
};

// myObj.great();
// myObj.great2();

// myObj.toString();


let heroes = ["thor", "spiderman"]

let heroesPower = {
    thor : "hammer",
    spiderman: "sling",

    getSpiderPower : function(){
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.priyanka = function (){
    console.log(`priyanka is present in all objects`);
    
}

heroesPower.priyanka()
heroesPower.getSpiderPower()




