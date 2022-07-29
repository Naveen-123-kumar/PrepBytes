// const btn = document.getElementById('notes');
// const list = document.getElementById('list');

// const arrayNotes = [];

// function makeid(length) {
//   var result = '';
//   var characters =
//     'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   var charactersLength = characters.length;
//   for (var i = 0; i < length; i++) {
//     result += characters.charAt(Math.floor(Math.random() * charactersLength));
//   }
//   return result;
// }

// function deleteSegment(id) {
//   console.log(id);
//   const splitId =
// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <title>Home</title>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width" />
//     <!--
//       Need a visual blank slate?
//       Remove all code in `styles.css`!
//     -->
//     <link rel="stylesheet" href="styles.css" />
//     <script type="module" src="script.js"></script>
//   </head>
//   <body>
//     <nav>
//       <a href="/" aria-current="page">Home</a>
//     </nav>
//     <main>
//       <h1>Home page</h1>

//       <button id="notes">Add Notes


/*
const arr=[];
var addbutton=document.getElementById('add');
var list=document.getElementById('container');
function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
 }
 return result;
}
function deleteSegment(id) {
  console.log(id);
  const splitId = id.split('-')[1];

  const ele = document.getElementById(splitId);
  //console.log(ele);
  list.removeChild(ele);
}
function addSubsection(id) {
  console.log(id);
  const splitId = id.split('-')[1];
console.log(splitId)
  const ele = document.getElementById(splitId);

  const newelement = document.createElement('li');
  newelement.innerText = 'something';
  ele.appendChild(newelement);
}
addbutton.addEventListener('click',()=>{
  let name=document.getElementById('input').value;
  const id = Date.now();
  const obj = {
    id: id,
    name: name,
    subnotes: [],
  };

  arr.push(obj);

  const li = document.createElement('div');
  li.id = obj.id;
  // document.innerText = obj.name;

  li.innerHTML = `<div ><h1>${obj.name}</h1> <button 
  onclick="addSubsection(this.id)"
  id=sub-${id}>Add Subsection </button> <button id=btndelete-${id} onclick="deleteSegment(this.id)">Delete Item </button></div>`;

  list.appendChild(li);
})

list.addEventListener('click',function(event){
  const targetedElement=event.target;
  const newElement=document.createElement('div');
  newElement.innerText="Naveen";
  targetedElement.appendChild(newElement)
})
*/


function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
  console.log('hell')
    if (this.readyState == 4 && this.status == 200) {
    console.log(this.responseText);
     document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "http://127.0.0.1:5500/Projects/Todo_App_Js/index.html", true);
  xhttp.send();
}

let btn=document.getElementById('btn')
btn.addEventListener('click',()=>{
  loadDoc()
})

function callApi(cb) {
  //document.getElementById('list').innerHTML = 'Loading Data............';
  $.ajax({
    url: 'https://www.googleais.com/books/v1/volumes?q=premchand',
    type: 'GET',
    success: function (data) {
      // data ??
      cb(null, data);
    },

    error: function (err) {
      console.log('Err', err);
      cb(err, null);
    },
  });
}

$('#btn').on('click', function () {
  // error first callback
  callApi(function (err, data) {
    console.log('HEy I am cb data', data); //
    console.log(err);
    //i want to print error here as well
    // then i want to 
  });
});