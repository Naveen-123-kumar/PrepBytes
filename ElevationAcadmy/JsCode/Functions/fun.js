// Create one function with zero parameter having a console statement;
let result= function(){
    console.log('Hello');
}
result();

// Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"
function sum(a,b){
    let result=a+b;
    console.log(result);
}
sum(3,4);

// Print output: undefined
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();
// "Print output: 
var x = 21;
girl ();
console.log(x)//21
function girl() {
    console.log(x);//undefined
    var x = 20;
};


// Print output
// a and b are not defined;
var x = 21;
a();
b();
console.log(a);
 a = function() {
    
   x = 20;
  console.log(x);
};
b = function() {
    
    x = 40;
   console.log(x);
};


// Create one arrow function
 let temporary=()=>{
    console.log('Arrow funtion');

 }
 temporary();