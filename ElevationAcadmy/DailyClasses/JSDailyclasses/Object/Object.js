// Objects Keyword --->
// Objects are real world entities ,which have some attributes 
// Objects in Javascript
//Object(); //Object constructor
// prototype based structure //
//prototype based language
// Js -->I have a created a predefined Object ,which 
// is this Object 
// whatver object you will be creating will be directly or indirectly inherting 
//console.log(Object);
//Different ways to create an object
//Using Object constructor
const obj=new Object();

// console.log(obj);

//Ways to add fields/attributes to an object 
//Dot notation 
obj.name="John"
console.log(obj);

//Using square barackets notation

obj["age"]=20;

//console.log(obj);

// square notation is very useful while adding the dynamic keys

const key="Address";

obj["key"]="Delhi";
console.log(obj);

//2- Way is using {} 


const obj2={
  name:"Joe",
  City:"Pune",
  name:"Shhh"
}

obj2.Country="India";

//console.log(obj2);
console.log(obj2["Country"]);



//console.log(obj2.City);//Accessing one property


/// 3-Constructor functions 

// You can relate them as a class 
// they are acting like a class
function ToyFactory(type,color){
this.type=type;
this.color=color;
  
}

const carToy= new ToyFactory("car","green");
console.log(carToy);

// 4- Using classes




class Vehicle {
  constructor(type,color){
    this.type=type;
    this.color=color;
  }
}

const car=new Vehicle("Car","green");
console.log(car);

// Object.create();

// const obj=[
  // {
  //   "_id": "62c30ff559022d119561bc88",
  //   "age": 25,
  //   "name": "Dixon Sweeney",
  //   "address": "690 Conselyea Street, Springdale, Georgia, 7860"
  // },
  // {
  //   "_id": "62c30ff53f4768aeefcdaa8a",
  //   "age": 40,
  //   "name": "Weeks Drake",
  //   "address": "431 Whitty Lane, Hollins, New Mexico, 5181"
  // },
  // {
  //   "_id": "62c30ff5d2e5823f263b47fe",
  //   "age": 33,
  //   "name": "Ofelia Hughes",
  //   "address": "502 Hope Street, Corinne, Colorado, 6263"
  // },
  // {
  //   "_id": "62c30ff5e9eabd26a7439b1d",
  //   "age": 93,
  //   "name": "Elva Gardner",
  //   "address": "730 Evans Street, Wakulla, Tennessee, 5515"
  // },
//   {
//     "_id": "62c30ff50cc306d79c3d5579",
//     "age": 17,
//     "name": "Jami Harrell",
//     "address": "625 Cleveland Street, Martinsville, Federated States Of Micronesia, 3322"
//   },
//   {
//     "_id": "62c30ff53a66bd714f9f8b83",
//     "age": 44,
//     "name": "Ann Booth",
//     "address": "792 Hewes Street, Islandia, Oklahoma, 1351"
//   },
//   {
//     "_id": "62c30ff56cf4fd629987ba0d",
//     "age": 78,
//     "name": "Joan Nicholson",
//     "address": "380 Troy Avenue, Staples, Michigan, 1313"
//   },
//   {
//     "_id": "62c30ff5e47b6a4f88bac7ef",
//     "age": 99,
//     "name": "Beryl Alston",
//     "address": "395 Rose Street, Summerset, New Jersey, 5836"
//   },
//   {
//     "_id": "62c30ff5b14623ddd40fc482",
//     "age": 86,
//     "name": "Adrian Hayden",
//     "address": "582 Gunnison Court, Suitland, Connecticut, 2429"
//   },
//   {
//     "_id": "62c30ff503a29b79e3cbd941",
//     "age": 91,
//     "name": "Della Manning",
//     "address": "356 Troutman Street, Stouchsburg, South Dakota, 8346"
//   },
//   {
//     "_id": "62c30ff571085b75ab2e6e57",
//     "age": 92,
//     "name": "Cotton Snow",
//     "address": "324 Ovington Avenue, Fairmount, New York, 9640"
//   },
//   {
//     "_id": "62c30ff5676aaa189c7e977f",
//     "age": 45,
//     "name": "Noreen Garza",
//     "address": "333 Wolcott Street, Nanafalia, Louisiana, 7272"
//   },
//   {
//     "_id": "62c30ff5f60449879e9ef5fd",
//     "age": 95,
//     "name": "Mccarthy Battle",
//     "address": "504 Charles Place, Woodlake, Delaware, 8574"
//   },
//   {
//     "_id": "62c30ff5ed2eec94c3a2d871",
//     "age": 96,
//     "name": "Kay Green",
//     "address": "635 Buffalo Avenue, Celeryville, Virgin Islands, 1599"
//   },
//   {
//     "_id": "62c30ff589594832bf3fe160",
//     "age": 28,
//     "name": "Fern Maxwell",
//     "address": "131 Nassau Street, Grahamtown, Hawaii, 8831"
//   },
//   {
//     "_id": "62c30ff55bef3ceb703e5532",
//     "age": 57,
//     "name": "Hendrix Gallegos",
//     "address": "926 Greenpoint Avenue, Beaverdale, Ohio, 4690"
//   },
//   [
//   {
//     "_id": "62c30ff559022d119561bc88",
//     "age": 25,
//     "name": "Dixon Sweeney",
//     "address": "690 Conselyea Street, Springdale, Georgia, 7860"
//   },
//   {
//     "_id": "62c30ff53f4768aeefcdaa8a",
//     "age": 40,
//     "name": "Weeks Drake",
//     "address": "431 Whitty Lane, Hollins, New Mexico, 5181"
//   },
//   {
//     "_id": "62c30ff5d2e5823f263b47fe",
//     "age": 33,
//     "name": "Ofelia Hughes",
//     "address": "502 Hope Street, Corinne, Colorado, 6263"
//   },
//   {
//     "_id": "62c30ff5e9eabd26a7439b1d",
//     "age": 93,
//     "name": "Elva Gardner",
//     "address": "730 Evans Street, Wakulla, Tennessee, 5515"
//   },
//   {
//     "_id": "62c30ff50cc306d79c3d5579",
//     "age": 17,
//     "name": "Jami Harrell",
//     "address": "625 Cleveland Street, Martinsville, Federated States Of Micronesia, 3322"
//   },
//   {
//     "_id": "62c30ff53a66bd714f9f8b83",
//     "age": 44,
//     "name": "Ann Booth",
//     "address": "792 Hewes Street, Islandia, Oklahoma, 1351"
//   },
//   {
//     "_id": "62c30ff56cf4fd629987ba0d",
//     "age": 78,
//     "name": "Joan Nicholson",
//     "address": "380 Troy Avenue, Staples, Michigan, 1313"
//   },
//   {
//     "_id": "62c30ff5e47b6a4f88bac7ef",
//     "age": 99,
//     "name": "Beryl Alston",
//     "address": "395 Rose Street, Summerset, New Jersey, 5836"
//   },
//   {
//     "_id": "62c30ff5b14623ddd40fc482",
//     "age": 86,
//     "name": "Adrian Hayden",
//     "address": "582 Gunnison Court, Suitland, Connecticut, 2429"
//   },
//   {
//     "_id": "62c30ff503a29b79e3cbd941",
//     "age": 91,
//     "name": "Della Manning",
//     "address": "356 Troutman Street, Stouchsburg, South Dakota, 8346"
//   },
//   {
//     "_id": "62c30ff571085b75ab2e6e57",
//     "age": 92,
//     "name": "Cotton Snow",
//     "address": "324 Ovington Avenue, Fairmount, New York, 9640"
//   },
//   {
//     "_id": "62c30ff5676aaa189c7e977f",
//     "age": 45,
//     "name": "Noreen Garza",
//     "address": "333 Wolcott Street, Nanafalia, Louisiana, 7272"
//   },
//   {
//     "_id": "62c30ff5f60449879e9ef5fd",
//     "age": 95,
//     "name": "Mccarthy Battle",
//     "address": "504 Charles Place, Woodlake, Delaware, 8574"
//   },
//   {
//     "_id": "62c30ff5ed2eec94c3a2d871",
//     "age": 96,
//     "name": "Kay Green",
//     "address": "635 Buffalo Avenue, Celeryville, Virgin Islands, 1599"
//   },
//   {
//     "_id": "62c30ff589594832bf3fe160",
//     "age": 28,
//     "name": "Fern Maxwell",
//     "address": "131 Nassau Street, Grahamtown, Hawaii, 8831"
//   },
//   {
//     "_id": "62c30ff55bef3ceb703e5532",
//     "age": 57,
//     "name": "Hendrix Gallegos",
//     "address": "926 Greenpoint Avenue, Beaverdale, Ohio, 4690"
//   },
//   {
//     "_id": "62c30ff596b3343a90e25a0e",
//     "age": 38,
//     "name": "Pacheco Bartlett",
//     "address": "823 Varanda Place, Bascom, Northern Mariana Islands, 4858"
//   },
//      {
//     "_id": "62c30ff596b3343a90e25a0e",
//     "age": 38,
//     "name": "Pacheco Bartlett",
//     "address": "823 Varanda Place, Bascom, Northern Mariana Islands, 4858"
//   },
//      {
//     "_id": "62c30ff596b3343a90e25a0e",
//     "age": 38,
//     "name": "Pacheco Bartlett",
//     "address": "823 Varanda Place, Bascom, Northern Mariana Islands, 4858"
//   }
// ]
// ]

//  --->remove ducplicates from this array