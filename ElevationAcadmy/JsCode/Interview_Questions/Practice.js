// Diff ways to create an Object?
// var obj=new Object()
// obj.name='Naveen'
// obj.age=20
// console.log(obj)

// function Person(name,age){
//     this.name=name,
//     this.age=age
// }

// let p1=new Person('Naveen',20)
// console.log(p1)

// class Person{
//     constructor(name,age){
//         this.name=name,
//         this.age=age
//     }
// }

// let Details=function(){
//     name:'Naveen'
// }

// Details.prototype.age='20'
// console.log(Details())

// let obj=new (function(name){
//     this.name=name
// })('naveen kujar')
// console.log(obj)

let getData = () => {
  return new Promise((response, reject) => {
    try {
      response(
        fetch("htps://api.github.com/users").then((data) =>
          data.json()).then((data) => data)
        
      );
    } catch (err) {
      reject(err)
    }
  });
};
getData().then((data) => {
  console.log(data);
}).catch((err)=>console.log(err));
