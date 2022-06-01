// Question8:->
// Marks Calculator
// Shyam has got his marks in three subjects as 
// A
// , 
// B
//  and 
// C
//  (out of 100).Write a program to calculate his total marks and his total percentage.

const Sum = (A, B, C) => 
{
 return A+B+C;
};

const Average = (A, B, C) => 
{
  let total=Sum(A,B,C);
   return (total*100)/300;
};
console.log(Sum(50,60,70));
console.log(Average(50,60,70));
