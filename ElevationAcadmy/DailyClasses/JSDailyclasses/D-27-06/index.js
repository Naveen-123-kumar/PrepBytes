// var a=document.getElementById('name');
// console.log(a.value);
// let b=document.getElementById('email');
// console.log(b.value);
// let c=document.getElementById('phonenumber')
// console.log(c.value);
// let button1=document.getElementsByTagName('button')[0];
// button1.addEventListener('click',()=>{
// let b=document.getElementById('email');
// console.log(b.value);
// let c=document.getElementById('phonenumber')
// console.log(c.value);

// var a=document.getElementById('name');
// const b=document.getElementsByClassName('dis')[0];
// b.innerHTML=a.value.toUpperCase()
//     console.log(a.value.toUpperCase())
// })
var a=document.getElementById('text');
a.addEventListener('change',()=>{
    const b=document.getElementById('heading');
    b.innerText=a.value;
    b.style.color=a.value;
})
const element=document.getElementById("input");

element.addEventListener("mouseleave",function(){

  //const color=
  const heading=document.getElementById("heading");
  heading.style.color=element.value;
  
  

})
{/* <input type="text" id="input"/>

<button id="btn">
Add Todo

</button>




<h1 id="heading">
HEading
</h1> */}