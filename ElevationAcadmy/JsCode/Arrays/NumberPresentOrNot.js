// Write a program which takes an array as input from the user and a number.
// Check whether the number is present or not.
const Find_Num = (array,N,M) => 
{
  for(let i=0;i<N;i++){
    if(array[i]===M){
      return 'YES'
    }
    
  }
  return "NO"
};
let arr=new Array(3,2,4,5,6,8,2,3);
let n=arr.length;
let k=5;
console.log(Find_Num(arr,n,k));