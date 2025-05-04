// Loops is known as the iterations
// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    // console.log(element)
}


for(let i = 1 ; i <= 10; i++){
    for(let j = 1; j <= 10; j++){
        // console.log(i + " " + " * " + j + " = " + i*j)
    }
}


let myarray = ["flesh", "batman", "superman"]

for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    // console.log(element);

}
// console.log(myarray.length);



// break and continue
// for (let i = 0; i <=20; i++) {
//     if (i == 5) {
//         console.log("get 5");
//         break;
//     }
//     console.log(i);
// }



// for (let i = 0; i <=20; i++) {
//     if (i == 5) {
//         console.log("get 5");
//         continue;
//     }
//     console.log(i);
// }



//while loop

let i = 0;
while (i <= 10) {
    // console.log(i);
    
    i = i + 2
}

let myarray1 = ["flesh", "batman", "superman"]
let arr = 0;
while(arr < myarray1.length){
    // console.log(`value is ${myarray1[arr]}`);
    arr++ // arr = arr + 1
}




//do while loop (when we want to run atleast 1 time loop)

// let score = 11;
let score = 1

do{
    // console.log(`score is ${score}`);
    score++
}while (score <= 10)


//high order array loop
// for of loop

const arr2 = [1, 2, 3, 4, 5]

for (const ele of arr2) {
    // console.log(ele);   
}


const greating = "hello world"
for (const val of greating) {
    // console.log(`Each chaar is ${val}`);
}


//map
const map = new Map()
map.set('IND', "india")
map.set('USA', "united state of Ameraica")
map.set('FR', "Frence")

// console.log(map);

// for (const ele of map) {
//     console.log(ele);
    
// }


//object 
const myObj1 = {
    js: 'Javascript',
    cpp: 'c++',
    rb: "Ruby",
    swift:'Swift by apple'
}

for (const key in myObj1) {
    // console.log(myObj1[key]);
}

//array destructure
for (const [ele, value] of map) {

    // console.log(ele);
    // console.log(ele, ":-" , value);
}


//for each loop
const array = ["priyanka", "sonal", "ruhi", "mannat"]

const valuesOfForEach = array.forEach(element => {
    // console.log(element)
});

//for each value does not return any values
// console.log(valuesOfForEach);


// filter 

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const newNums = myNums.filter( (nums) => {
    return nums > 5 && nums == 7
})
// console.log(newNums)



const myNums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums1 = myNums1.map( (nums) =>{
    //     return nums + 10
    // })
    
    
    //chaning
    //filter with map 
    //filter are in true and false statement
    
const newNums1 = myNums1
                .map( (nums) => nums * 10)
                .map( (nums) => nums + 1)
                .filter((nums) => nums >= 40)
console.log(newNums1);


// reduce (later)