// Create a button , on click of which you should be able to hide a paragraph text, create another button onclick of which this paragraph should be visible.
$('#btnshow').on('click',()=>{
    $('#heading').css('display','block');
})
$('#btnhide').on('click',()=>{
    $('#heading').css('display','none');
})
// Create an ajax call, by using this api "https://jsonplaceholder.typicode.com/todos/12" and print the title as the heading of the page.
function callApi() {
    $.ajax({
      url: `https://jsonplaceholder.typicode.com/todos/12`,
      type: 'GET',
      success: function (data) {
        $('#heading2').html(data.title);
        // let headingText=document.getElementById('heading2')
        // headingText.innerText=data.title;
      },
      error: function (err) {
        console.log('Err', err);
      },
    });
  }
  $('#btnheading').on('click',()=>{
    callApi();
    console.log('hello')
  })