/*
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
}*/

let notshow11 = document.getElementsByClassName("notshow1")[0];
let card2 = document.querySelector("#circle1");
card2.addEventListener("click", () => {
  let descriptitonCard=document.getElementsByClassName("pop-up")[0];
  descriptitonCard.style.display = "flex";
  notshow11.className = "not_show";
});
let addCard = document.querySelector("#demo1");
addCard.addEventListener("click", () => {
  let value = document.getElementById("input1").value;
  closepopup();
  createcardAndAppend(value);
  notshow11.className ="no_blur";
});
function createcardAndAppend(value){
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
function closepopup() {
  document.getElementsByClassName("pop-up")[0].style.display = "none";
}

