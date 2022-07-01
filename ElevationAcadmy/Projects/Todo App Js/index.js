//Code below for fetching pop-up just above the contianer and make the behind screen blur
let card1 = document.querySelector("#circle");
var notshow = document.getElementsByClassName("notshow")[0];
card1.addEventListener("click", () => {
  document.getElementsByClassName("pop-up")[0].style.display = "flex";
  notshow.className = "not_show";
});
//Code below for cancel the pop-up 
var addCard1 = document.querySelector("#demo1");
addCard1.addEventListener('click',()=>{
  document.getElementsByClassName("pop-up")[0].style.display = "none";
  notshow.className="no_blur";
})
//Code below for adding dynamic cards in the contianer
let addCard = document.querySelector("#demo");
addCard.addEventListener("click", () => {
  document.getElementById('noItem').style.display='none'
  let value = document.getElementById("input").value;
  closepopup();
  createcardAndAppend(value);//Function call with arguments value;
  notshow.className = "no_blur";
  let d=document.getElementsByClassName('page1')[0].style.display='flex';
  let c = (document.getElementsByClassName(
    "page2"
  )[0].style.display = "none");
  let left_text1=document.getElementsByClassName('upper-container11')[0];
  left_text1.style.display='none';
  let left_text2=document.getElementsByClassName('upper-container1')[0];
  left_text2.style.display='inline-block';

});
//Code below for removing pop-up just after adding dynamic cards in the contianer
function closepopup() {
  document.getElementsByClassName("pop-up")[0].style.display = "none";
}
//function has been defined to create dynamic card and append it into the container.
function createcardAndAppend(value) {
  var div = document.createElement("div");
  div.className = "card";
  div.style.display = "flex";
  //Below code adds heading inside card 
  var innerdiv1 = document.createElement("div");
  innerdiv1.style.cursor='pointer';
  innerdiv1.className = "text";
  innerdiv1.innerText = value;
  div.appendChild(innerdiv1);
  var textItem=document.createElement('div');
  textItem.style.backgroundColor='red';
  textItem.id='Naveen'
div.appendChild(textItem);
  let iconsDiv=document.createElement('div');
  iconsDiv.id='icons_div';
  div.appendChild(iconsDiv)
  var innerdiv2 = document.createElement("span");
  // innerdiv2.className = "material";
  innerdiv2.innerText = "add"
//  innerdiv2.style.color='red';
 innerdiv2.style.border='2px solid red';
 innerdiv2.style.borderRadius='50%';
 innerdiv2.style.backgroundColor='red';
 innerdiv2.style.color='white';
 innerdiv2.className = "material-icons";
 innerdiv2.style.cursor='pointer';
 iconsDiv.appendChild(innerdiv2);
//Code for adding delete icon in card
 var innerdiv3 = document.createElement("span");
  innerdiv3.innerText = "delete"
  innerdiv3.className = "material-icons";
  innerdiv3.style.fontSize='26px'
  innerdiv3.style.cursor='pointer';
  iconsDiv.appendChild(innerdiv3);
  let dropZone = document.getElementsByClassName("card_container")[0];
  dropZone.appendChild(div);
  
//Below code is for removing card from container one by one
  innerdiv3.addEventListener('click',()=>{
    div.style.display='none';
  });
  innerdiv2.addEventListener("click", () => {
    let todo=document.getElementsByClassName('pop-up')[1];
    todo.style.display='flex';
    notshow.className = "not_show";
  });
  innerdiv1.addEventListener('click',(e)=>{
    div.style.display='flex';
    let left_text1=document.getElementsByClassName('upper-container11')[0];
    left_text1.style.display='inline-block';
    let left_text2=document.getElementsByClassName('upper-container1')[0];
    left_text2.style.display='none';
    let c = (document.getElementsByClassName(
        "page2"
      )[0].style.display = "flex");
      let d=document.getElementsByClassName('page1')[0].style.display='none';
      let headingTitle = document.getElementsByClassName("trip")[0];
      headingTitle.innerText = value;
      let heading_subTitle = document.getElementsByClassName("div4")[0];
      heading_subTitle.innerText = value;
})
  let Additembutton=document.getElementById('demo11');
  Additembutton.addEventListener('click',(e)=>{
    let todo=document.getElementsByClassName('pop-up')[1];
    let li=document.createElement('ol');
    let value=document.getElementById('input2').value;
    li.innerText=value;
    textItem.appendChild(li)
    todo.style.display='none';
  notshow.className = "no_blur";
  })
  let Additembutton1=document.getElementById('demo12');
  Additembutton1.addEventListener('click',(e)=>{
    let todo=document.getElementsByClassName('pop-up')[1];
    todo.style.display='none';
  notshow.className = "no_blur";
  })
let back_arrow=document.getElementById('arrow');
back_arrow.addEventListener('click',()=>{
  let left_text1=document.getElementsByClassName('upper-container11')[0];
  left_text1.style.display='none';
  let left_text2=document.getElementsByClassName('upper-container1')[0];
  left_text2.style.display='inline-block';
  let c = (document.getElementsByClassName(
      "page2"
    )[0].style.display = "none");
    let d=document.getElementsByClassName('page1')[0].style.display='flex';
})

}


//add description in card
// let card2 = document.querySelector("#circle1");
// let notshow1 = document.getElementsByClassName("notshow1")[0];
// card2.addEventListener("click", () => {
//   let descriptitonCard=document.getElementsByClassName("pop-up")[0];
//   descriptitonCard.style.display = "flex";
//   notshow1.className = "not_show";
// });
/*
var notshow11 = document.getElementsByClassName("notshow1")[0];
let card2 = document.querySelector("#circle1");
card2.addEventListener("click", () => {
  let descriptitonCard=document.getElementsByClassName("pop-up")[0];
  descriptitonCard.style.display = "flex";
  notshow11.className ='not_show';
});
let addCard1 = document.querySelector("#demo1");
addCard1.addEventListener("click", () => {
  let value = document.getElementById("input1").value;
  closepopup1();
  createcardAndAppend1(value);
  notshow11.className ="no_blur";
});
function createcardAndAppend1(value){
    let checkbox=document.createElement("div");
    let box=document.createElement('input');
    box.type='checkbox';
    box.id='checked';
    checkbox.className="div6";
    checkbox.innerText=value;
    let updateText=document.getElementsByClassName('div5')[0];
    updateText.appendChild(box);
    updateText.appendChild(checkbox);  
}
function closepopup1() {
  document.getElementsByClassName("pop-up")[0].style.display = "none";
}*/



// let page1 = document.getElementsByClassName("page1")[0]
// let page2 = document.getElementsByClassName("page2")[0] 
// function func() {
//     let div = document.createElement("div") 
//     let d = document.getElementsByClassName("dropzone")[0]


//     let b = document.createElement("span")
//     b.innerText = "add"
//     b.className = "material-icons"
//     let del = () => {
//         page1.style.display = "none"
//         page2.style.display ="block"
//     }
    
// <section class="page1">
//         <span class="material-icons">add</span>
//         <button id="plus" onclick="func()">Add +</button>
//         <div class="dropzone">

//         </div>
//    </section>

//    <section class="page2">
//         <button id="back" onclick="Back()">Back</button>
//    </section>
// From Aravind to Everyone 04:09 PM
// .dropzone {
//     display: flex;
//     flex-flow: row wrap;
//     justify-content: space-between;
// }
// .dropzone > div {
//     width: 100px;
//     height: 200px;
//     border: 1px solid red ;
//     position: relative;
// }
// .dropzone > div > span {
//     position: absolute;
//     bottom: 5px;
//     right: 5px;
//     border-radius: 50% ;
//     padding: 5px;
//     border: 1px solid green ;
//     cursor: pointer;
// }

// .page2 {
//     display: none ;
// }