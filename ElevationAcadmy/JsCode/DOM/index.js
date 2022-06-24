// Write the code to access element which is having id as "text"
const heading=document.getElementById('text');
heading.style.fontSize='62px'
heading.style.backgroundColor='lightblue';

// Write the code to access element which is having tag as "h1"
const heading1=document.getElementsByTagName('h1')[0];
// Write the code to access element which is having class as "box"
const classElement=document.getElementsByClassName('box')[0];
classElement.style.fontSize='42px';
// What’s the difference between window vs document?
// 1. It represents any HTML document or web page that is loaded in the browser vs It represents a browser window or frame that displays the contents of the webpage.  
// 2.It is loaded inside the window. vs It is the very first object that is loaded in the browser. 
// Change the heading from ""Hello"" to ""Hello World"" using DOM functions
heading.innerText='Hello World';

// Create three cards on HTML page and arrange them using flex property in row or horizontal direction and also create button at the bottom named "Change Flex direction". When user clicks on this button, the cards arrangement should be changed to vertical direction.
let button1=document.getElementsByTagName('button')[0];
button1.addEventListener('click',()=>{
    let box=document.getElementsByClassName('container')[0];
    box.style.flexDirection='column';
})

// Add one style attribute and give text color as red and id attribute and give the id value as ""heading"" in the above given h1 tag using DOM functions"
heading1.style.color='red';
heading.id='heading';

// Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"
let button2=document.getElementsByTagName('button')[1];
button2.addEventListener('click',()=>{
    let textTobechange=document.getElementsByClassName('text')[0];
    textTobechange.style.marginTop='100px';
    textTobechange.innerText='Welcome to Elevation academy';
})
