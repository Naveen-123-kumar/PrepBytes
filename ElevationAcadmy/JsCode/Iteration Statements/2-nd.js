// Find the Fives.

const Find_Five = (N) => 
{
  var count=0
  var digit
  while(N!=0){
    digit=N%10;
    N=parseInt(N/10)
    if(digit==5){
      count=count+1;
    }
    
  }
  return count
	 
};

console.log(Find_Five(1555456));