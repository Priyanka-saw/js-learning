const name = "Priyanka "
const repoCount = 20

//old way to write this type of string
// console.log(name + repoCount + " value")

//instead of that we can use string interpolations
// console.log(`my repo name is ${name} with the value of ${repoCount}`);

const gameName = new String('Priyannaka');

//acces through index
console.log(gameName[0]) 

//methods
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('y'))

const newString = gameName.substring(3, 5)
// console.log(newString);

const anotherString = gameName.slice(4, 8)
console.log(anotherString)

const url = "https//priyanak.com/priyanka%20singuij"
console.log(url.replace('%20', '-'))

//true if found the keyword false if notfound the keyword 
console.log(url.includes('priyanka'))  
