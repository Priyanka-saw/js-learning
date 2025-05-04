const user = {
    username : "Priyanka",
    loginCount : 3,
    Signedin : true,

    //in object creating a functions 
    getallUser : function(){
        // console.log("Got all user details from the objects");
        // console.log(`Username: ${this.username}`);
        console.log(this);
        
        
    }
}

// console.log(user);
// console.log(user.getallUser());

// console.log(this);


//constructor functions

function User(username, loginCount, isloggedin){
    this.username = username;
    this.loginCount = loginCount;
   this.isloggedin = isloggedin;


//    methods
   this.greeting = function(){
    console.log(`welcome ${this.username}`);
    
   }

   //depend us we can write or not, both can work
//    return this;

}

//using new keyword it gives new instance for each constructor
//  and remove all unwanted date which shown in terminal 
const userOne = new User("priyanka", 12, true);
const userOne2 = new User("javascrip", 10, false);


// .constructor is reference of self
// console.log(userOne.constructor);

// console.log(userOne.greeting());

// console.log(userOne)
// console.log(userOne2)

