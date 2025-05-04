// Objects literals

const jsUser = {
  name: "Priyanka",
  age: 19,
  location: "mumbai",
  email: "priyanka@gmail.com",
};

// console.log(jsUser.email)  //this will used most
// console.log(jsUser["location"])

jsUser.greating = function () {
  console.log("hello js user");
};
jsUser.greating2 = function () {
  console.log(`hello js user, ${this.name}`);
};

console.log(jsUser.greating2());
console.log(jsUser.greating());

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

const obj3 = { obj1, obj2 };
console.log(obj3);

const course = {
  coursenmae: "js in hindi",
  price: "999",
  courseInstructor: "hitesh",
};

// course.courseInstructor

const { courseInstructor: instructor } = course;

// console.log(courseInstructor)
console.log(instructor);

//destructuring
//react
// const navbar = ({company}) => {

// }

// navbar(company = "priyanka")

//JSON (javaScript object Notations)

//it is the text based formatfor storing and exchanging data

//json is common format for api(application programing interface)

//we get json in the form of objects

//object hi json hai

// {
//     "name": "priyanka",
//     "coursenmae": "js in hindi",
//     "price": "free"
// }

//in arrays form api

[
    {}, 
    {}, 
    {}
];
