// 1)What are promises and why do we need them?
// Ans->Promises are better and cleaner way to handle asynchronous function.They make very easy to dealing and manage multiple asynchronous function where callbacks can create callback hell leading to unmanageable code and also not looking clean.
// Ex->
//promise vs callback
// function checkPrime(number){
// let result=new Promise((resolve,reject)=>{
//     if(number%2==0){
//         resolve('Resolved the problem');
//     }
//     else{
//         reject('Rejected');
//     }

// })
// return result;
// }

// checkPrime(23).then(data=>{
//     console.log(data);
// }).catch((data1)=>{
//     console.log(data1);
// })

// const promise=new Promise((res,rej)=>{
//     res("777");
//   })
  
  // promise chanining ---->
  
  // You can attach multiple then handlers to your promise 
  // those handlers get executed sequentially 
//   promise.then(data=>{
//     console.log(data);
//   }).then(data=>{
  
//     console.log("7777");
//   }).then(data=>{
//     //throw  new Error("error occcureed");
//     console.log(88);
//   }).then(data=>{
//     console.log(80008);
//   }).catch(err=>{
//     console.error(err);
//   }).finally(fin=>{
//     console.log("It would be executed in end")
//   })

// 2).What is the purpose of async/await keywords?
// Ans->when we use async keyword before any function it returns a Promise.Await keyword is always used inside async keyword.During execution of Javasript code when await keyword comes, it suspends the calling method and yields control back to its caller until the awaited task is complete.

// 3)What is hoisting?
// Ans->hoisting is the default behaviour of javascript where all the variables and function move to the top of the scope.It means irrespective of the position where they have been declared it moves to the top of scope in global and function scope.

// 4).What is the DOM?
// Ans->It stands for Document Object Model.It is programming interface for HTML files.When browser tries to render it,it creates a object based on HTML documents and through which we can change or manupulate html documents. 


// 5)Difference between undefined vs not defined vs NaN
// Ans->Below are the main differences between null and undefined, 

// Null--
// It is an assignment value which indicates that variable points to no object.
// Type of null is object.
// The null value is a primitive value that represents the null, empty, or non-existent reference.
// Indicates the absence of a value for a variable.
// Converted to zero (0) while performing primitive operations.


// Undefined--
// It is not an assignment value where a variable has been declared but has not yet been assigned a value.
// Type of undefined is undefined.
// The undefined value is a primitive value used when a variable has not been assigned a value.
// Indicates absence of variable itself.
// Converted to NaN while performing primitive operations.

// NaN--
// It stands for Not a Number.It will check whether the value is that has been passed inside is valid Number or not.If it returns true it means the value is not legal number else it is legal .

// Ex-> isNaN('Naveen')//True
// isNaN(200)//false


// 6)How many operators do we have in JS ?
// There are 7 types of operator
// Arithmetic Operators
// Comparison Operators
// Bitwise Operators
// Increment,Decrement Operators
// Logical Operators
// Ternary Operators
// Comma Operator

// 7)What are pure functions?
// Ans->A Pure function is a function where the return value is only determined by its arguments without any side effects. i.e, If you call a function with the same arguments 'n' number of times and 'n' number of places in the application then it will always return the same value.

// Ex->function calculate(sum){         
//     return (sum);           
//  }
//  calculate(2);    //2      
//  calculate(5);    //5

// 8)What is callback hell?
// Ans->It is nothing but a nested callbacks stacked below one another forming pynamid like strucure. 


// 9)What is promise chaining
// Ans->Promise chaining occurs when the callback function returns a promise. It allows you to chain on another then call which will run when the second promise is fulfilled. 


// 10)What are arrow functions?
// Ans->Arrow function is new and cleaner way to define a function.It has been introduced in ES6 version of javascript.

// Ex->let fun=()=>{
//     console.log('Hello')
// }

// 11)Give an example of async/await
// Ans->async function foo() {
//       fetch('https://fakestoreapi.com/products/1')
//       .then((res) => res.json())
//       .then((json) => console.log(json))
//       .catch((err) => {
//         console.log('original fetch');
//         console.log(err);
//       });
//     try{
//       const data = await fetch('https://fakestoreapi.com/products/1');
//       console.log(data);
//       const json = await data.json();  ///data.json also returns a promise
//       console.log(json);
  
//     }
//     catch(err){
//         console.log(err)
//     }










