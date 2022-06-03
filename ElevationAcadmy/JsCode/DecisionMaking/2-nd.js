// Write a program that takes a number and prints whether the number is divisible by 
// 6 and 9 or not.
const Check_divisibility = (N) => {
 
    let sum=0
    while(N!==0){
        sum=sum+N%10;
        N=parseInt(N/10)
    }
    if((N%2===0 && sum%3===0) && sum%9===0){
        return 'Divisible by both'
    }
   else{
      return "Not Divisible by both"
   } 
};
 console.log(Check_divisibility(58));