
function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

// var counter = counter();
// alert(counter());
// alert(counter());
// alert(counter());
// alert(counter());
// output will be
// 1
// 2
// 3
// 4



/* 2)
let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged?  The value will be 1 here in console.
  }
  console.log(count); // What is logged?  The value will be 0 here in console.
})();
*/

// 3)
// for (var i = 0; i < 3; i++) {
//     setTimeout(()=> {
//       console.log(i); // What is logged? 3,3,3,
//     }, 1000);
//   }

// 4) Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.
// function calculateArea(){
//     let length=10;
//     function innerFunc(){
//         let breadth=20;
//         let area=length*breadth;
//         console.log(area)

//     }
//     innerFunc()
// }
// calculateArea()

// 5)Take a variable in outer function and create an inner function to increase the counter every time it is called
function counter(){
  var counter = 0;

  function IncreaseCounter() {
      return counter += 1;
  };

  return IncreaseCounter;
}

var counter = counter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
// output will be
// 1
// 2
// 3
// 4
/*
6)Print Output 12
*/
// var a = 12;
// (function () {
//   alert(a);
// })();


/* 7)
var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);
  };
})();
x();
 */ 
// output will be 12

// 8)
var globalVar = "xyz";
(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    
    })(456);
})(123);
/*
output of 
outerArg=123
innerArg=456
outerVar=a
innerVar=b
globalVar=abc
*/
