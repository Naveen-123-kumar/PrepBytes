// You are provided an array of integers and you have to increment all array elements by 1 and then print whole array.


const Inc_Arr = (array,N) => 
{
  let tem=[]
  let result=""
  let j=0
  for(let i=0;i<N;i++){
    tem[j]=array[i]+1
    result=result+" "+tem[j]
    j++
  }
 console.log(result)
};
let arr=[1,2,4,5,6,8,2,3];
let n=arr.length;
Inc_Arr(arr,n);