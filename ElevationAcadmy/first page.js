//code for popupcontainer using popup box

const sticker = document.getElementById("sticker");
var page_container =document.getElementsByClassName("page_container")[0];
sticker.addEventListener("click", function () {
   const a = document.getElementsByClassName("pop_up_container")[0];
   a.style.display = 'block';
   page_container.className = 'show_blur';
   
   
})

//code for cancle btn

const pop_up_btn2 = document.getElementsByClassName("pop_up_btn2")[0];
pop_up_btn2.addEventListener("click", function () {
   const b = document.getElementsByClassName("pop_up_container")[0];
   b.style.display = 'none';
  page_container.className = "no_blur";
  
})

//code for deletebtn
const btn_container2 = document.getElementById("btn_container2");
btn_container2.addEventListener("click", function () {
   const c = document.getElementsByClassName("back_card")[0];
   c.style.display = 'none';
})

//code for addbtn 


//Code below for adding dynamic cards in the contianer
var arr_card_set = new Set();
var taskList = [];
var title_flag = false;
var value_id;
var subtask = new Map();

const btn_container1 = document.getElementsByClassName("pop_up_btn1")[0];

btn_container1.addEventListener("click", function () {
  let cardheading=document.getElementById("input").value;
  createObj(cardheading);
   const d = document.getElementsByClassName("pop_up_container")[0];
   d.style.display = 'none';
   page_container.className = "noblur";
  //  const e = document.getElementsByClassName("back_card")[0];
  //  e.style.display = 'none';
   
})  
function createObj(cardheading) {
   document.getElementById("text").style.display = "none";
   var obj = {
     title: cardheading,
     id: Date.now(),
     subtask,
   };
   arr_card_set.add(obj);
   createcardAndAppend(obj.id);
 }
//Code below for removing pop-up just after adding dynamic cards in the contianer
function closepopup() {
   document.getElementsByClassName("pop_up_container")[0].style.display = "none";
 }

 //function has been defined to create dynamic card and append it into the container.
function createcardAndAppend() {
   var Copy_Of_Card = document.getElementsByClassName("card")[0].cloneNode(true);
   display(Copy_Of_Card);
 }
//code for adding dynamic cards

// const pop_up_btn1=document.getElementsByClassName("pop_up_btn1")[0];
// pop_up_btn1.addEventListener("click",function(){
//    const input =document.getElementsById("input")[0].value;
//    createObj(input);
//    closepopup();
//    page_container.className = "no_blur";

// })


function display(card) {

   document.getElementById("text").style.display = "none";
   arr_card_set.forEach((Element) => {
     card.id = Element.id;
     card.getElementsByClassName("card-heading")[0].innerHTML = Element.title;
     card
       .getElementsByClassName("card-heading")[0]
       .setAttribute("value", Element.id);
     card.setAttribute("value", Element.id);
     card.style.display = "block";
     card.getElementsByClassName('delete_btn')[0].setAttribute('value',Element.id)
    //  card
    //    .getElementById("delete_btn")
    //    .setAttribute("value", Element.id);
    //  card
    //    .getElementsById("add_btn")[0]
    //    .setAttribute("value", Element.id);
      card
       .querySelector(".delete_btn")
       .setAttribute("onClick", "deleteCard(this.value)");
    //  card
    //    .querySelector(".add_btn")
    //    .setAttribute("onClick", "addSubtask(this.value)");
   });
   if (title_flag) card.style.display = "none";
   else card.style.display = "block";
   document.getElementById("outer-container").appendChild(card);
 }
//delete Card from container one by one
function deleteCard(value) {
   var delete_div = document.getElementById(value);
   console.log(delete_div)
   for (item of arr_card_set) {
     for (prop in obj) {
       if (item.id == value) arr_card_set.delete(item);
       break;
     }
   }
   delete_div.parentNode.removeChild(delete_div);
   if (arr_card_set.size == 0) {
     document.getElementById("text").style.display = "block";
   }
 }

 //code for input text inside card as items.
let addTodo = document.getElementsByClassName("pop_up_btn1")[0];
addTodo.addEventListener("click", () => {
  var copyOfCard = document
    .getElementsByClassName("innerButton")[0]
    .cloneNode(true);
  var card_item = document.getElementById("input").value;
  copyOfCard.innerText = card_item;
  copyOfCard.style.display = "block";
  copyOfCard.setAttribute("id", Date.now());
  copyOfCard.setAttribute("value", Date.now());
  copyOfCard.setAttribute("style", "margin-left: 10px;");
  var inner_button = document.createElement("button");
  inner_button.setAttribute("id", `abc-${Date.now()}`);
  // inner_button.setAttribute("class", "mark-as-done-class");
  inner_button.setAttribute("value", Date.now());
  inner_button.setAttribute("onclick", "completedTask(this.value)");
  inner_button.innerText = "done";
  inner_button.setAttribute("class", "completeButton");
  copyOfCard.appendChild(inner_button);
  copyOfCard.setAttribute("onClick", "completedTask(this.value)");
  for (obj of arr_card_set) {
    for (prop in obj) {
      if (obj.id == value_id) {
        obj.subtask.set(card_item, Date.now());
        break;
      }
    }
  }
  document
    .getElementById(value_id)
    .getElementsByClassName("list-item")[0]
    .appendChild(copyOfCard)
    .appendChild(inner_button);
  document.getElementsByClassName("pop_up_container")[1].style.display = "none";
});
function addSubtask(value) {
  document.getElementsByClassName("pop_up_container")[1].style.display = "block";
  value_id = value;
}
// let closeList = document.getElementByClassName("pop_up_btn2");
// closeList.addEventListener("click", function(){
//   document.getElementsByClassName("pop_up_container")[1].style.display = "none";
// });

function completedTask(value) {
  document.getElementById(value).style.textDecoration = "line-through";
  document.getElementById(value).style.color = "pink";
  document.getElementById(`abc-${value}`).remove();
}

//Code for onclick on header of  card the card will open in new page with its header text on the top
function headerFunction(val) {
   var card_header;
   for (let ele of arr_card_set) {
     for (let id in ele) {
       if (ele[id] == val) {
         card_header = ele.title;
         break;
       }
     }
   }
   document.querySelector(".front_page").style.display = "none";
   document.querySelector(".back_page").style.display = "block";
   for (let ele of arr_card_set) {
     if (ele.id == val) {
       document.getElementById(`${ele.id}`).style.display = "block";
     } else {
       document.getElementById(`${ele.id}`).style.display = "none";
     }
   }
   document.getElementById("Card_heading_separately").innerText = card_header;
   document.getElementById("Card_heading_separately").style.display = "block";
   title_flag = true;
 }
 //Code for displaying all card after clicking on back arrow
 document
   .getElementsByClassName("Displayall")[0]
   .addEventListener("click",function(){
     title_flag = false;
     document.querySelector(".front_page").style.display = "block";
     document.querySelector(".back_page").style.display = "none";
     for (let ele of arr_card_set) {
       document.getElementById(ele.id).style.display = "block";
     }
     document.getElementById("Card_heading_separately").style.display = "none";
   });