let card1 = document.querySelector("#circle");
let notshow = document.getElementsByClassName("notshow")[0];
card1.addEventListener("click", () => {
  document.getElementsByClassName("pop-up")[0].style.display = "flex";
  notshow.className = "not_show";
});
let addCard = document.querySelector("#demo");
addCard.addEventListener("click", () => {
  let value = document.getElementById("input").value;
  closepopup();
  createcardAndAppend(value);
  notshow.className = "no_blur";
});
function closepopup() {
  document.getElementsByClassName("pop-up")[0].style.display = "none";
}
function createcardAndAppend(value) {
  let div = document.createElement("div");
  div.className = "card";
  div.addEventListener("click", () => {
    let c = (document.getElementsByClassName(
      "cardcontianer3"
    )[0].style.display = "flex");
    let headingTitle = document.getElementsByClassName("trip")[0];
    headingTitle.innerText = value;
    let heading_subTitle = document.getElementsByClassName("div4")[0];
    heading_subTitle.innerText = value;
    document.getElementsByClassName("card_container")[0].style.display = "none";
    document.getElementsByClassName("upper-container")[0].style.display =
      "none";
  });
  div.style.display = "flex";
  let innerdiv1 = document.createElement("div");
  innerdiv1.className = "text";
  innerdiv1.innerText = value;
  div.appendChild(innerdiv1);
  let innerdiv2 = document.createElement("div");
  innerdiv2.className = "material-icons";
  div.appendChild(innerdiv2);
  let dropZone = document.getElementsByClassName("card_container")[0];
  dropZone.appendChild(div);
}
//add description in card
// let card2 = document.querySelector("#circle1");
// let notshow1 = document.getElementsByClassName("notshow1")[0];
// card2.addEventListener("click", () => {
//   let descriptitonCard=document.getElementsByClassName("pop-up")[0];
//   descriptitonCard.style.display = "flex";
//   notshow1.className = "not_show";
// });
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
}
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
