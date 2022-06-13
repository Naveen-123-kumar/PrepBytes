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
let card2 = document.querySelector("#circle1");
let notshow1 = document.getElementsByClassName("notshow1")[0];
card2.addEventListener("click", () => {
  document.getElementsByClassName("pop-up")[0].style.display = "flex";
  notshow1.className = "not_show";
});
// let addCard = document.querySelector("#demo");
// addCard.addEventListener("click", () => {
//   let value = document.getElementById("input").value;
//   closepopup();
//   createcardAndAppend(value);
//   notshow.className = "no_blur";
// });
// function closepopup() {
//   document.getElementsByClassName("pop-up")[0].style.display = "none";
// }
