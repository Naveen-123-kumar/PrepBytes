// Write a program that takes an array as input from the user and find out the product of the elements.
const Find_Prod = (array, N) => 
{
  let product=1
  for(let i=0;i<N;i++){
    product*=array[i]
  }
return product
};
let arr=new Array(3,2,4,5,6,8,2,3);
let n=arr.length;
console.log(Find_Prod(arr,n));