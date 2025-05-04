const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB Calls, network connect 

    setTimeout(function(){
    
        console.log('Async task is complete');
        resolve() // after usin this, it connected to the .then function
    }, 1000);
})

promiseOne.then(function(){
    console.log("promise consumed");
})


//without holding in another variable
new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Async task2");
        resolve()
    }, 1000);
}).then(function(){
    console.log("Async task 2 resolved");
})

const PromiseThree = new Promise(function (resolve, reject) {
    setTimeout(function(){
        resolve({username: "chai", email: "chai@example.com"})

    }, 1000);
});

PromiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function() {
        let error = false
        if(!error){
            resolve({username: "priyanka", password : "123@we"})
        } else{
            reject('ERROR, Something went wrong')
        }
    }, 1000);
}) 

promiseFour.then((user) =>{
    console.log(user);
    return user.username
    
}).then((username) => {
    console.log(username);
    
}).catch(function(error){
    console.log(error);
}).finally(() => {
    console.log("Promise is either resolved or rejected");
})



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(() =>{
        let error = false;
        if(!error){
        resolve({username : "javascript", password : "pri@123"})            
        } else {
            reject('ERROR : JS went wrong')
        }
    }, 1000)
})

async function consumePromiseFive(){
    // const response = await promiseFive
    // console.log(response);
    
    //gracefuly error handled
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}
consumePromiseFive()



// async function getAllUser(){
// try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data =  await response.json()
//     console.log(data);
//     // console.log(response);
    
// } catch (error) {
//     console.log("E: ", error);
// }
    
// }
// getAllUser()




fetch('https://jsonplaceholder.typicode.com/users').then((response) => {       

    return response.json()
    
}).then((data)=>{
    console.log(data)

}).catch((error) => {
    console.log(error)
});