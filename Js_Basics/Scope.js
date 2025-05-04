// Global scope : variable declared outside of any function or block have global scope 


// Block scope : variable declared within a block (using a curly braces{}) have block scopes

//scope
{
  // block scope
}

// global scope
{
}

// var c = 300;
//we will not use var because of global scope
let a = 23; //global scope

if (true) {
  let a = 10;

  const b = 20;
//   console.log("under blockScope : ", a);
}

// console.log(a);

// console.log(b);
// console.log(c);




//nested function 
//closer 
function one() {
    const username = "priyanka"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website); //error (due to the out of the scope)

    two()
}

one()




if(true){
    const username = "priyanka"
    if(username ==="priyanka"){
        const website = " youtube"
        console.log(username + website)
    }
    // console.log(website);
    
}

// console.log(username);
