//  difference between null and undefined,not defined
// When we declare a variable and value is not assigned then it will give you output undefined in the console whereas null is a assiged value.It's type of is object where as type of undefined is primative data type i.e is undefined.
// let a;
// a=null;//assigment value is 10 or we can say the value has been assigned to a is 10.
// if(a==null){
//     console.log('yes')
// }
// else{
//     console.log('No')
// }
// a=null
// console.log(b)//gives the output not defined

// function sum(){
//     let a=10;
//     let b=12;
//     let result=a+b;
//     console.log(result)
// }
// sum();
// let a1=10;
// console.log(a1)
// you have been given the marks of students,you have to find whether he/she is passed or failed using ternary operator.Passing marks is greater than 40.

// 1.Arithmetic operators
// let marks = 40;
//   (marks >= 40)? console.log("passed"):console.log("Failed"));
//
// conditional operators if-else,ternary operators
/*
let marks=30;
let marks1=40;
let marks2=44;
if(marks>=40){
    console.log('Pass')
    // statement1
}
else{
    console.log('fail')
    // statement2
}
if(marks1>=40){
    console.log('Pass')
    // statement1
}
else{
    console.log('fail')
    // statement2
}if(marks2>=40){
    console.log('Pass')
    // statement1
}
else{
    console.log('fail')
    // statement2
}
*/
// const result=(marks)=>{
// (marks>=40)?console.log('Pass'):console.log('fail');
// if(marks>=40){
//     console.log('Pass')
// }
// else{
//     console.log('fail')
// }
// }
// let prasanana=30.1;
// let Nitin=32.1;
// let Naveen=40;
// let Deepak=43;
// let Priyanka=45;
// result(prasanana);
// result(Nitin);
// result(Naveen);
// result(Deepak);
// result(Priyanka)
/*
// this is 1-st way to define function
function result1(){//function without parameters
 console.log('Naveen1')
}
// this is 2-st way to define function
let result2=function(){
    console.log('Naveen2')
}
// this is 3-st way to define function
const result3=(marks)=>{//function with parameters
    console.log(marks)
}
result3(32);
*/
// Arithmetic operators + - / * % ^
// forin/forEach/some/every/map/reduce/filter/of/
// let a=2;
// console.log(a--) //2//you have to say that in post increment or decrement first value will be printed then increment or decrement will be there.







// for(initialization;condition;increment/decrement){

// }
// for(let j=0;j<10;j++){
//     console.log(j)
// }
// let j=0;
/*
var k = 9; // var key word variables get attached to window object
let j = 98;
const h=99;
var name="Johnny";
*/
//console.log(window.k);
//console.log(window.j,window.h);
// const obj={
// name:"rajat",
// getName:function(){
// return this.name;
// }
// }

// function foo(){
// console.log("Foo's this",this.name)
// }
// console.log(obj.getName())
// foo();// ?? this-->windows

// const bindedFunction=foo.bind(obj);
// bindedFunction();   // the value of this is -->obj

// foo.call(obj);
// foo.apply(obj);
//console.log(window.k);
//console.log(window.j,window.h);
// const obj={
// name:"rajat",
// getName:function(){
// return this.name;
// }
// }

// function foo(...args){
// console.log(args);
// console.log("Foo's this",this.name)
// }
// console.log(obj.getName())
// //foo();// ?? this-->windows

// const bindedFunction=foo.bind(obj);
// //bindedFunction();   // the value of this is -->obj
// const arr=[1,2,3];
// foo.call(obj,2,3,4,9,10,11);
// foo.apply(obj,arr);

// function Person(name,roll){
//     this.name=name;
//     this.roll=roll;
// }
// let p1=new Person('Naveen',1);
// let p2=new Person('Ritika',2);
// let p3=new Person('Naveen',3);
// console.log(p3)
// class Person{
//     constructor(name,roll,address){
//         this.name=name;
//         this.roll=roll;
//         this.address=address;
       
//     }
// }
// class child extends Person{
//     constructor(name,roll,address,state){
//         super(name,roll,address);
//         this.state=state;
//     }
// }
// let p3=new child('Naveen',3,'Delhi','Bihar');
// console.log(Object.values(p3))


function firstDigit(number,n){
    while(n>1){
        number=number/10;
        n--;
    }
    return parseInt(number);
}
console.log(len)
let result=firstDigit(9234545681550,13);
console.log(result)

