/*function loadDoc() {
  console.log('Called');
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    console.log(this.status);
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      // document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open('GET', 'https://dry-gorge-90450.herokuapp.com/user/data', true);
  xhttp.send();
}
*/
/*
document.getElementById('btn').addEventListener('click', function () {
  loadDoc();
});
*/

$('#btn').click(function () {
    // jqueryAjax();
 
    console.log(jquerAjaxPromise())
   });
   
   function jqueryAjax() {
     $.ajax({
       url: 'https://deelay.me/50000/https://dry-gorge-90450.herokuapp.com/user/data',
       type: 'GET',
     
       success: function (data) {
         // if all good and success ,then this will give you data
   
         console.log(data);
       },
       error: function (err) {
         //if url  doesnt gives you data then
         // thi will be called
       },
     });
 
     console.log("click happend");
   }
   
 
   $('#btn2').click(function () {
     console.log('btn2');
   });
 
 
   //Promise -->Syntax
 
   function jquerAjaxPromise(){
 
   
 
   const promise=new Promise(function(resolve,reject){
 
     // You do some asynchronous operation here 
     // you may be calling an api
     // you may be doing anything asynchronous 
 
     // The api result is either success or error 
 
 
     $.ajax({
         url: 'https://deelay.me/50000/https://dry-gorge-90450.herokuapp.com/user/data',
         type: 'GET',
       
         success: function (data) {
           // if all good and success ,then this will give you data
           resolve(data);
     
           //console.log(data);
         },
         error: function (err) {
             reject(err);
           //if url  doesnt gives you data then
           // thi will be called
         },
       });
 
   })
 
 
   return promise;
 }