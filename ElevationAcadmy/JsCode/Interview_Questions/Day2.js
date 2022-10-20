// 1) What are closures? Give an example of closure.
// Ans->Closures are an ability of a function to remember the variables and functions that are declared in its outer scope.
// For Example:->
// function randomFunc(){
//     var obj = {name:"Naveen", age:24};
//     return function(){
//       console.log(obj.name ); // Has access to obj even when the randomFunc function is executed
  
//     }
//   }
//    randomFunc(); 
// 2).Explain call(), apply() and, bind() methods. Give an example of call(), apply(), bind()
// Ans:-call() ->It is predefined method in javascript.It allows the object to use the function of another object.It also takes arguments in comma separated way.

// apply()->It is similar to call() only difference is that it takes the argument in array form.

// bind()->This method returns the new function that can we called any where.

// Example->// call,apply and bind
let obj1={
    name:'Naveen',
    roll:24, 
}
let obj2={
    name:'Naveen Kumar',
    roll:25,
    printDetails:function h(){
        console.log(this.name,this.roll)
    }
}
obj2.printDetails()
// obj2.printDetails.call(obj1)
function printDetails(...obj2){
    console.log(this.name+' '+this.roll);
}
printDetails()
// printDetails.call(obj1,'Developer','20000')
// let a=[3,2]
// printDetails.apply(obj1,a)

// let result=printDetails.bind(obj2)
// result()


// 3).What is creation phase and execution phase?
// Ans->In creation phase all the variables are allocated memories (space to store value) and assign with default value undefined.In Execution phase all variables are assigned their values and function are being executed.
// Ex-var x=16; In creation phase x is allocated memory in RAM and with value undefined but in execution phase the value of x will be change from undefined to 16;

// 4).What are objects in javascript?
// Ans->In JavaScript, an object is an unordered collection of key-value pairs. Each key-value pair is called a property. The key of a property can be a string.
// Ex-> let Person={
//     name:'Naveen',
//     roll:15,
// }
// In the above example keys are name and roll and values are Naveen and 15;


// 5).What are function constructors?
// Ans->Function constructors are used to create new function object directly and dinamically.It is always call with keyword new.
// Example:->let date=new Date();


// 6)Explain prototypes
// Ans->Prototypes are the mechanism by which JavaScript objects inherit features from one another. 


// 7).What is prototype chain?
// Ans)->It is used to build new types of objects based on existing ones.Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. 


// 8).Give an example of inheritance using function constructor
// function Person(name,age)
// {
//     this.name=name;
//     this.age=age
// }
// let p1=new Person('Naveen',24)
// let p2=new Person('Nikhil',24)
// Person.prototype.address='address';
// p1.address='Mahua';
// console.log(p1)

// 9).What are callbacks?
// Ans->A callback is a function passed as an argument to another function.This technique allows a function to call another function.A callback function can run after another function has finished
// Example-function foo(){
//     hello(); callback
// }
// function hello(){
//     console.log('callback function');
// }
// foo()


// 10)What is the use of setTimeout?
// Ans->The setTimeout() method sets a timer which executes a function or specified piece of code once the timer ends.
// for exm:-
// setTimeout(()=>{
//     console.log("hello")
// },5000);
// It will executes after 5secs.

// 11).What is an event loop and call stack?
// The function of event loop is that it checks the callStack if it is empty then it transfer the webApi's present in callback queue to callStack for execution.
// The call stack is used by JavaScript to keep track of multiple function calls.It works on principle of LIFO
// example:-
// function(){
//     console.log('Hello')
// }
// setTimeout(() => {
//     console.log('Callback queue')
// }, 5000);
