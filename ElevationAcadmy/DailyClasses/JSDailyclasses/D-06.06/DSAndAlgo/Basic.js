// DataStructure and Algorithm
// var age=24;
// var Name="Naveen";
// Boolean true;
// let arr='';
// let arr1=[]
// let obj={
//     name:'naveen'
// }
//There are two data types in js.
//primitive
//non-primitive

//In primitive there are 7 types 
// 1.Number
// 2.String
// 3.Boolean //true|| false
// 4.NUll
// 5.Undefined
// 6.BigInt
// 7.Symbol
// let number=BigInt("12121515446454511544");
// console.log(number);
// 2.Non-Primive
// Object,Arrays are non-primitive data types in js
// let n1="prasana"
// let n2='Nitin'
// let n3="Naveen"
// let n4="Ritika"
// let n5="Abhishek";
// if(n1=='Prasana'){
//     return 'true';
// }
// let arr=["prasana",'Nitin',"Naveen","Ritika","Abhishek"]
// let obj={
//     name:'Naveen',
//     Age:24,
//     CollegeName:'IIIT kalyani',
//     Roll: 000176,
//     Batch:'A-2'
// }
// A data structure is a particular way of organizing data in a computer so that it can be used effectively. 
// console.log(obj.Batch)
// conditional statements if-else or Ternary operator
// if(condition){
//     statements1
// }
// else{
//     statement2
// }
// Q1.Check whether the person is eligible to cast their vote or not.

function ValidVoter(i){
   
     (i>=18)?console.log('Eligible for vote'):console.log('Not Eligible'); 
}
let age=50
ValidVoter(age);
// document.write(ValidVoter(age));
// let result=ValidVoter(age);



 /*
    if(i>=18){
        //Statement1
        return 'Eligible for voting.'
        // console.log("Eligible")
    }
    else{
        // statement2
        return "Not Eligible."
        // console.log("Not Eligible")
    }
    */
   // function sum(a,b){

//   return a+b;
  
// }

function sum2(cb,a,b){
  cb(a+b);
}
sum2(function(data){
  console.log(data);  
},4,5)
function Myfilter(fn,arr,num){
	for(let i=0;i<arr.length;i++){
		if(num==arr[i]){
			fn(i)
		}
	}
}
Myfilter(function(data){
	console.log(data)
},[1,2,3,4],3)
//map 
// every
//some 


const num="string";
console.log(isNaN(parseInt(num)));



