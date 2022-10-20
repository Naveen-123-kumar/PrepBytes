// 1).Difference between “ == “ and “ === “ operators.
// Ans->“ == “ and “ === “ are equality operators in javascript.== compare value only whereas === compare values and typeof data as well.
// example:- 
// if(2==2) then it will return true but 2==='2'  it will return false because 2 is number but '2' is string.


// 2).What is the spread operator?
// Ans->Spread operator in Javascript is used to copy all the elements from objects or arrays into another arrays or objects very easily.It is denoted by '...'
// for example->
// let a=[1,2,3];
// console.log(...a);by using spread operator will be get output in console one by one.


// 3).What are the differences between var, let and const?
// Ans->In javacript any variables can be decleared by using three keywords var, let and const.(i)var keyword is global scope and funtion scope whereas let and const are block scope.(ii)variable that has been decleared with var keyword can be redecleared whereas decleared with let and const keywords can not be redecleared.(iii) values can be reassigned in var and let case but in const we can not reassign value.(iv)in var and let we can assign value after declaration of variable whereas in case of const declaration and initialization should be done simultaneously.


// 4).What is execution context
// Ans->The browser's JavaScript engine then creates a special environment to handle the transformation and execution of this JavaScript code.This environment is known as the Execution Context.During execution the code parsed by the parser and assigned memory.
// There are two types of Execution Context in JavaScript:
//             1.Global Execution Context (GEC)
//             2.Function Execution Context (FEC)



// 5).What is meant by first class functions
// Ans->In javascript,function are first class object.First class functions are treated like javascript variable.we can pass it as an arguments,can be return inside a function and can be assigned as a value of any other variable.
// example->let foo = (a) => {
//     return a;
// }
// let result=foo(5)
// console.log(result)
