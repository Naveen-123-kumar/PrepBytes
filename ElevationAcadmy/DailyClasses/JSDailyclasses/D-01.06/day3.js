// Increment and decrement operator
// prefix(++a) and postfix(a++)
let a=2;
a++;
console.log(a++);
console.log(++a);
a=a++;//increase by 1 and also update the value a;
console.log(a);
let b=3;
let c=2
console.log(b++ + ++c);
console.log(b,c);
//Logical operators
let f=0;
let g=3;
console.log(f&& g);//if the first variable is non zero ,the the second variable is the o/p if the first varible is zero /false then second variable will neber be checked and the o/p will be 0/false respectively.
console.log(f || g)//if the first variable is non zero ,the the first variable is the o/p if the first varible is zero /false then second variable will be checked and the o/p will be second respectively.
//Negation
console.log(!(f>0));//false always gives boolean values.A number that is non-zero is considered as true by default and a negation on true is suppose to give u false.negation is always going to give u values in true/false only.



//ternary operator
let h=1;
(h==1)?console.log('true'):console.log('false');
//comma operator
let x=1;
x=(x++,console.log(x));
// console.log(x);