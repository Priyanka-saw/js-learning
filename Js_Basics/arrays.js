let myArr = [0, 1, 2, 3, 4, 5]

let myArr2 = ["priyanka", "hello", " nameste", "India"]

// let myArr3 = new Array(1, 2, 4, 5, 5)
// console.log(myArr3)

// console.log(myArr[1]);


// Arrays methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()


//remove ele from first
// myArr.shift()  

//add ele from first
// myArr.unshift(11)


// console.log(myArr.includes(8))
// console.log(myArr.indexOf(3))


// const newArr = myArr.join()

// console.log(newArr)
// console.log(myArr)



//Slice, splice
// console.log("A ", myArr)

const myn1 = myArr.slice(1, 3)

// console.log(myn1)
// console.log("B ", myArr)

const myn2 = myArr.splice(1, 3)
// console.log("C ", myArr)
// console.log(myn2)



let marvel_heroes = ["thor", "Ironman", "spiderman"]

let dc_heroes = ["shaktiman", "flash", "batsman"]

// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);


// const a = marvel_heroes.concat(dc_heroes);
// console.log(a);


// spread operator
// instead of using concate we can use it spread operator
const all_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heroes)


let new_arr = [1, 3, 4, 5, 5, [6, 7, 8], 2, 3, [1, 2, 3, [3, 4, 5]]];


const another_arr = new_arr.flat(Infinity)
console.log(another_arr);


const ans = Array.isArray("Priyanka")
console.log(ans);

const ans_2 = Array.from("Priyanka")
console.log(ans_2);


const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1, score2, score3))