// 1)Create a button , on click of which new Heading tag h1 should be added with text as "MERN stack" on the screen above button
document.getElementById('btn1').addEventListener('click',()=>{
    let h1=document.createElement('h1');
    h1.innerText="MERN stack"
    let container=document.getElementsByClassName('container')[0]
    container.appendChild(h1);
})

// 2)Write code to get 1st H1 element from a webpage using DOM
let first_h1=document.getElementsByTagName('h1')[0];


// 3)Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second
// setInterval(()=>{
//     let time=new Date();
//     let a=time.getHours();
//     let b=time.getMinutes();
//     let c=time.getSeconds();
//     let hours=document.getElementById('hours');
//     let minutes=document.getElementById('minutes')
//     let seconds=document.getElementById('seconds');
//     hours.innerText=a
//     minutes.innerText=b
//     seconds.innerText=c
// },1000)


// 4)Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"


document.getElementById('btn2').addEventListener('click',()=>{
    let text=document.getElementById('text');
    text.innerText="Welcome to Elevation academy"
})


// 5)Create an HTML page having content as Hello world and a button named "Hide Text." When user will click on this button hide the "Hello World" text
document.getElementById('btn3').addEventListener('click',()=>{
    let text1=document.getElementById('text1')
    text1.style.display='none';
})

// 6)Given an array of 0's and 1's find out number of 0's
let arr=[1,1,1,1,0,0,0,0,1,0,1,0,0];
let length=arr.length;
var count=0;

for(let i=0;i<length;i++){
    if(arr[i]==0){
        count=count+1;
    }
}
console.log(count)

// 7)Given an array find out total no. of odd and even nos.
let arr1=[2,4,3,7,5,6,55];
let n=arr1.length;
var even=0;
var odd=0;
for(let i=0;i<n;i++){
    if(arr1[i]%2==0){
        even=even+1;
    }
    else{
        odd=odd+1;
    }
}
console.log(odd,even)


// 8)Given a string find out number of vowels 
function findVowels(str){
    var total=0;
    let length1=str.length;
    for(let i=0;i<length1;i++){
        if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u' ){
          total=total+1;
        }
    }
    console.log(total)
}
findVowels('NAVEEN'.toLowerCase())


// 9) Write a code to create two objects with 2 properties each, one will be string and other will be an array. Create a function to check if all the elements of the arrays in both the objects are same.

let obj1 = {
  name: "naveen",
  arr1: [1, 2, 3, 4, 5],
};
let obj2 = {
  name: "naveen",
  arr2: [1, 12, 3, 4, 5],
};

function check(obj1, obj2) {
  let n = obj1.arr1.length;
  let length = 0;
  for (let i in obj1.arr1) {
    if (obj1.arr1[i] === obj2.arr2[i]) {
      length++;
    }
  }
  if (length === n) {
    console.log("Equal");
  } else {
    console.log("Not Equal");
  }
}
check(obj1, obj2);









