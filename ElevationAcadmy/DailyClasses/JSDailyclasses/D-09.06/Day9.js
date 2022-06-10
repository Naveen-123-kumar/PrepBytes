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
let str=" naveen kumar";
let str1='singh'
console.log(str.slice(1,4));
console.log(str.concat(' ',str1))

// let tem=str.replace('naveen','n')
// let tem=str.split('-');
let tem=str.charCodeAt(2);
console.log(tem);
var Count_Occ = (s) => 
{
    let tem=''
    for(let i=0;i<s.length;i++){
      let count=0
      let char=s.charAt(i)
      for(let j=0;j<s.length;j++){
        if(s.charAt(i)===s.charAt(j)){
          count+=1
        }
      }
      if(count!=1){
        tem=tem+char+count
      }
    }
    return tem
    
};
console.log(Count_Occ('prepbytes'))