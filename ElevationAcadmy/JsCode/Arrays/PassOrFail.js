// You are given an array 
// A
//  containing the maths marks of students in your class, and your task is to determine if all the students pass in your class or not. A student is declared pass if his maths marks are greater than or equal to 
// 32
// .

const isAllPass = (N, Arr) => 
{
  let count=0
  for(let i=0;i<N;i++){
    if(Arr[i]>=32){
      count+=1
    }
    else{
      break;
    }
  }
  if(count===N){
    return "YES"
  }
  return "NO"
    
};
 
let arr=new Array(3,2,4,5,6,8,2,3);
let n=arr.length;
console.log(isAllPass(n,arr));