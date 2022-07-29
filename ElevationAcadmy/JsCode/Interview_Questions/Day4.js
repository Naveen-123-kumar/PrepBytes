// 1).What is a Temporal Dead Zone?
// Ans->When we try to access any variable before initialization,then we get an error called reference error and that error is called Temporal dead Zone.The variables declared with let and const gives such type  of error.
// Ex->
// console.log(a)
// let a=1;

// 2).What is the for-in loop in JavaScript? Give its syntax
// Ans->For-in loop is used to iterate through all the elements of an array or keys of Object.It gives us index of data.
// Its syntax is for(x in object) {
//     code block to be executed
//   }

// Ex-
// let arr=[2,1,8,4]
// for(let i in arr){
//     console.log(i)
// }
// output:-0 1 2 3


// 3)Explain Local Scope, Block Scope, Functional Scope and Scope Chain in javascript
// Ans->

// Local scope:It means when a varible declared inside a function has local scope.It can not be acess from outside that scope.
// Ex->
// function foo(){
//     var x=2; x can be access inside function only that is called local scope.
// }


// Block scope:-Variables declared inside a { } block cannot be accessed from outside the block.Variables declared with var keywords can not be block scope.
// Ex-
// {
//     var a=2;
// }
// console.log(a)


// Functional Scope->In Javascript each function creates a new scope.Variables declared inside functions are not accessible from outside it.let,var ,const keywords provide such facilites.
// ex-
// function{
//     let a=2;
//     var b=20;
//     console.log(b) //20 will be printed 
// }
// console.log(b)//Reference error will be come out as b has not been declared


// Scope chain:When we declare a function inside the function and declare some variable inside inner function and outer function as well.Then when we try to access the variable inside inner function and if we do not get it then it start searching in outer function that is called scope chain.
// Ex->
// function foo(){
//     let a=20;
//     function fooo(){
// console.log(a);
//     }
// }

// 4)What is difference between null and undefined and where to use what?
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

// 5)what is Symbol?
//symbol is used to give an unique value which is immutable(which cannot be changed)
// const value1=Symbol("Naveen")
// const value2=Symbol("Naveen")
// console.log(value1===value2)

//although the values and data type are same we will get an output of false because for each and every symbol, unique value is genereated. 


// 6)Write code to explain map and filter in arrays
// let arr=[1,2,3,45,46]
// let arr1=arr.map((item)=>{
//     return item;
// })
// console.log(arr1)

// let arr2=arr.filter((item)=>{
//     return item%2==0;
// })

//Map is used to return a new Array 
//map is used to iterrate through each and every element in an array

//Filter:Which is used to filter the items in an array.It will also return new array.

// 7)Explain passed by value and passed by reference
// Ans->Pass by value means direct value will be passed during calling the function.Pass by reference means address or reference of that value will be passed.Pass
// Ex-
// let a=2
// let b=a;
// function foooo(a){
//     return a;

// }
// console.log(foooo(2))//pass by value
// console.log(foooo(b))//pass by reference

// 8)Please explain Self Invoking Function and its code

// Ans->Self Invoking function means we don't need to call that function.It will be genereated just after defining that function.
//Ex-// (function () {
    //     console.log('Hello,My Name is Naveen')
    // }());
    


