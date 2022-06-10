// function myName(nameOne,nameTwo){
//     console.log(nameOne,nameTwo)
// }
// myName('Naveen','Kumar')
// const myNumber=(a,b)=>{
//     let result=a+b;
//     console.log(result);
// }
// myNumber(4,5);

// let arr=[1,2,3];
// arr.forEach(function(item){
//     console.log(item);
// })
// for(let i in arr){
//     console.log(arr[i]);
// }
// const Avg=function(a,b){
//     let total=a+b;
//     let result=((a+b)/200)*100;
//     console.log(result);
// }
// Avg(80,90);
//Block Scoping and Shadowing
//let ,const are block scoped
//var is not block scoped 
//Values of var variables are not same as let and const the values of var variable will be the last assigned value for var variable; 
// const a=10;
// if(a==10)
// {
//     const a=20;
//     console.log(a);
// }
// {
//     const a=30;
//     console.log(a);
// }
// console.log(a);

// scope and lexical environment
////lexical environment is the behaviour of looking a variable to its parents scope , 
// if not found there then to its parent's parent also...Upto global scope.
// let a=10;
// function one(){
//     let b=20;
//     console.log(a+b);
//     two();
//     function two(){
//         let c=30;
//         console.log(a+b+c);
//         three();
//         // function three(){
//         //     let d=40;
//         //     console.log(a+b+c+d);
//         // }
//     }
// }
// function three(){
//             let d=40;
//             console.log(a+d);
//         }
// one();

