// Find the sum of the digits of a given number.

const Number_Sum = (N) => 
{
  let sum=0
  while(N!=0){
    let digit=N%10
    N=parseInt(N/10)
    sum=sum+digit
  }
  return sum
	
};

console.log(Number_Sum(12354));