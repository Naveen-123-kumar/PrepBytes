// const arr=[1,2,3,4];
// function PushArr(arr){
// const arr1=[];
//     for(let i=0;i<arr.length;i++){
//         let tem=2*arr[i];
//         arr1.push(tem);
//     }
//     console.log(arr1);
// }
// PushArr(arr);
//Add all elements of an array
// const arr=['a','b','Hello','there'];
// function Addstr(arr){
//     let tem='';
//     for(let i=0;i<arr.length;i++){
//         tem=tem+arr[i];
//     }
//   return tem;
// }
// console.log(Addstr(arr));
// arr.forEach((i)=>{
//     console.log(i);
// })
// let str=" naveen kumar";
// let str1='singh'
// console.log(str.slice(1,4));
// console.log(str.concat(' ',str1))

// let tem=str.replace('naveen','n')
// let tem=str.split('-');

// const arr=[1,2,3,4,5,6];
// function findSum(arr){
//   let sum=0;
// arr.forEach((ele)=>{
//   sum +=ele;
// });
// return sum;
// }
// console.log(findSum(arr));

// function ConvertToUpperCase(arr){
//   var tem1='';
//   arr.forEach((i)=>{
//     tem1 +=i.toUpperCase();
//   });
//   console.log(tem1)
// }
// const arr1=['a','b','c'];
// ConvertToUpperCase(arr1);
/*
const arr=["a","b","c"];
//map--->

// 1-if you want to do some operation on individual elements
// 2- you want array as an output
// 3- you want same number of elements as present in your original array
// then use map
// const arr=["a","b","c"];
// ["A","B","C"];
/*
const arrMap=arr.map(function cb(ele){

 // const temp=

  return ele.toUpperCase();
  
})


console.log(arrMap);
*/

// I have an array = [1,2,3,4,5];
// i want array =[1.5,2.5,3.5,4.5,5.5];
// string
//const str="2021-09-09";
//let arraySplit=str.split("-");
//console.log(arraySplit[0]);

// another task -->
// I have an array ["2021-01-02","2021-04-09","2022-09-09"];
// using map
// ["2021","2021","2022"];   ----->output like this --->


/*///--->ForEach -->
// this is a function definition 
function foo(i){  // i and j are known as parameters
  
}
//foo(1,2);
//foo([2,3,4],2);
// this is a function call
foo(function bar(){
  /// bar is a callback function 
  
})
//A callback function is a function passed as an argument to another function 
//foreach is only applicable to arrays 
const arr=[1,2,3,4,5];
arr.forEach(function cb(ele){
  console.log(ele);
  
});
for(let i=0;i<arr.length;i++){
  console.log(arr[i]);
  
}
//calculate the sum of elements of an array using forEach loop 
// [1,2,3,4,5] -->15 You have to 
const nums = [1,2,3,4,5]
function sum(array) {
  let sum = 0; 
  array.forEach(item => sum += item);
  return sum;
}
console.log(sum(nums))
//You have to convert all the elements of string array into uppercase using forEach loop 
//const str="hello";
//console.log(str.toUpperCase());
// const arr=["a","b","c"];
// const arr2=["A","B","C"];
// Only forEach loop
function converStr(arr){
// foREach loop

}*/
/*
function convertString(arr){
  const arr2=[];
  //let str=""
  arr.forEach(function cb(ele){
    arr2.push(ele.toUpperCase());
    //str+=ele.toUpperCase() 
  })
// return  str;
  return arr2;
}
console.log(convertString(["a","b"]))
function findSum(arr){
  let sum=0;

   arr.forEach(function cb(ele){
    // console.log(i);
    sum=sum+ele;
    //str+=ele.toUpperCase()
  })
  return sum;
}
*/
//console.log(findSum([1,2,3,4]))
//map--->
// 1-if you want to do some operation on individual elements
// 2- you want array as an output
// 3- you want same number of elements as present in your original array
// then use map
// const arr=["a","b","c"];
// ["A","B","C"];
// const arrMap=arr.map(function cb(ele){
 // const temp=
  // return ele.toUpperCase();
// })
// console.log(arrMap);
// I have an array = [1,2,3,4,5];
// i want array =[1.5,2.5,3.5,4.5,5.5];
// string
//const str="2021-09-09";
//let arraySplit=str.split("-");
//console.log(arraySplit[0]);
// another task -->
// I have an array ["2021-01-02","2021-04-09","2022-09-09"];
// using map
// ["2021","2021","2022"];   ----->output like this --->
///---->
/*
function deletePart(arr){
  const arr1=arr.map((ele)=>{
    let arraySplit=ele.split("-");
   return arraySplit[0]
  })
  return arr1;
}
const arr2=["2021-01-02","2021-04-09","2022-09-09"]
 console.log(deletePart(arr2));
function deletePart(arr){
  const arr1=arr.map((ele)=>{
    let arraySplit=ele.split("-");
    return arraySplit[0];
  })
  return arr1;
}
const arr=["2021-01-02","2021-04-09","2022-09-09"]
 console.log(deletePart(arr));
*/
function sumOfNumber(arr){
  const sum =arr.map((item)=>{
    return item.toUpperCase();
  })
  return sum;
}
let array = ['a','v','c'];
console.log(sumOfNumber(array));
function FindSum(arr){
  let sum=0;
  arr.forEach((element) => {
    sum+=element;
  });
  return sum;
}
const num=[1,2,3,4,5];
console.log(FindSum(num));
function removePart(arr){
  let tem=arr.map((i)=>{
    return i.split('-')[2];
  })
  return tem;
}
const arr2=["2021-01-02","2021-04-09","2022-09-09"]
console.log(removePart(arr2));

