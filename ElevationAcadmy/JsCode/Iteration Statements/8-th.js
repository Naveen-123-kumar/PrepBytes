// Print Numbers
// You are given an integer 
// N
// , and your task is to print all the integers starting from 
// 1
//  till 
// N
//  (
// N
//  inclusive).
const printNumbers = (n) => {
    var result=''
    let i=1;
    while(i<=n)
    {
      result=result+i+' '
      i++;
    }
    console.log(result)
};
printNumbers(5);