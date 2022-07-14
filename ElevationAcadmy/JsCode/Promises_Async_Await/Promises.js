//1). Write one example explaining how you can write a callback function?
function add(a, b) {
  sum(a, b); //Callback function,when we call a function inside a function or passes function as an argument while calling a function is called as callback function.
}
const sum = (a, b) => {
  console.log(a + b);
};
add(3, 4);

// 2).Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

// Explain callback hell.
// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7
const numbers=()=>{
    setTimeout(() => {
        console.log('1')
    }, 1000);
    setTimeout(() => {
        console.log('2')
    }, 2000);
    setTimeout(() => {
        console.log('3')
    }, 3000);
    setTimeout(() => {
        console.log('4')
    }, 4000);
    setTimeout(() => {
        console.log('5')
    }, 5000);
    setTimeout(() => {
        console.log('6')
    }, 6000);
    setTimeout(() => {
        console.log('7')
    }, 7000);
}
numbers()

// Callback hell
// Callback Hell: Callback Hell is essentially nested callbacks stacked below one another forming a pyramid structure.

/*
3).
Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec ,2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 
Numbers
1
2
3
4
5
6
7
*/
var array = [];
for (let i = 1; i <=7; i++) {
  const result4 = new Promise(function (response, reject) {
    setTimeout(() => {
        response(i);
    }, 1000 * i);
  });
  array.push(result4);
}

for (let i = 0; i < array.length; i++) {
  array[i]
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

/* 4).
Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected 
*/
function promise2(a){
    return new Promise((response,reject)=>{
        if(a=='yes'){
            response('Promise Resolved')
        }
        else{
            reject('Promise Rejected')
        }
    })
}
promise2().then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})
// 5).
// Create examples to explain callback function
// Here when a() has been called then b has been called inside a so there will be callback and b will execute first then a will end;
// function a(){
//     b();
// }
// function b(){
//     console.log('Callback funtion');
// }
// a();
// Create examples to explain callback hell function
// Callback Hell is essentially nested callbacks stacked below one another forming a pyramid structure.
function callbackhell(a, b, c) {
  setTimeout((a) => {
    console.log("Naveen");
    setTimeout(
      (a) => {
        console.log(a + " Kumar");
        setTimeout(
          (c) => {
            console.log(c);
          },
          2000,
          c
        );
      },
      2000,
      b
    );
  }, 2000);
}
callbackhell(1, 2, 3);

// Create examples to explain promises function
function Result(marks) {
  return new Promise((response, reject) => {
    if (marks >= 40) {
      response("pass");
    } else {
      reject("fail");
    }
  });
}
Result(35).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err)
})
// here if conditon will be satisfied to the promise then response will be executed otherwise reject function will be executed.Respose will give result using function call(Result()).then((argument)) and reject will give result in .catch

// Create examples to explain async await function
async function Result2(){
    console.log('My name is Naveen');
    let res=await Result(40);
    return res;

}
console.log('Before calling Result2')
let a=Result2()
console.log('After calling Result2');
console.log(a);
a.then((data)=>{
    console.log(data);
})

// Create examples to explain promise.all function
let promise1 = new Promise((resolve, reject) => {
  resolve("first1");
  reject("Error 1");
});
let promise2 = new Promise((resolve, reject) => {
  resolve("first2");
  reject("Error 2");
});
let promise3 = new Promise((resolve, reject) => {
  resolve("first3");
  reject("Error 3");
});
Promise.all([promise1, promise2, promise3])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
