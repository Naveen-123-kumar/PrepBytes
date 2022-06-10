// Congratulations on making up to this question. Let us give you a fairly simple array problem to solve. If you know how to iterate through the array, you will easily be able to solve this.
// The problem statement is simple- given 
// N
//  elements, find the minimum and maximum numbers among those elements.

function arrayMin(arr,N) {
    let n=N;
    let result=arr[0];
    for(let i=1;i<n;i++){
      if(result>arr[i]){
        result=arr[i]
      }
    }
    return result;
    }
    function arrayMax(arr,N) {
    let n=N;
    let result1=arr[0];
    for(let i=1;i<n;i++){
      if(result1<arr[i]){
        result1=arr[i];
      }
    }
    return result1;
    }
   var arr=new Array(3,1,4,6,2,7);
   var n=arr.length; 

   var arr1=new Array(0,0,0,0,0,0)
   var n1=arr.length;
console.log(arrayMin(arr,n),arrayMax(arr,n));
console.log(arrayMin(arr1,n1),arrayMax(arr1,n1));  
  