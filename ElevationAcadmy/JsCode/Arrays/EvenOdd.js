// You are given an array 
// A
//  containing 
// N
//  integer elements, and your task is to return an array 
// B
 
// (
// having a size equal to 
// 2
// )
// , where 
// B
// [
// 0
// ]
//  contains the sum of all even elements of array A and 
// B
// [
// 1
// ]
//  has the sum of all odd elements of the array 
// A
// .
const findEvenOdd = (N, Arr) => 
{
    let B=[2]
    let evensum=0
    let oddsum=0
    for(let i=0;i<N;i++){
      if(Arr[i]%2===0){
        evensum+=Arr[i]
      }
      else{
        oddsum+=Arr[i]
      }
      
    }
    B[0]=evensum
    B[1]=oddsum
    return B
    
};
let arr=new Array(3,2,4,5,6,8,2,3);
let n=arr.length;
console.log(findEvenOdd(n,arr));