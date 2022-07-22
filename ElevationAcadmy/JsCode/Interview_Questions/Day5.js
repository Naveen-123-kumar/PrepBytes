// Write a code to create two objects with 2 properties each, one will be string and other will be an array. Create a function to check if all the elements of the arrays in both the objects are same.

let obj1={
    name:'naveen',
    arr1:[1,2,3,4,5]
}
let obj2={
    name:'naveen',
    arr2:[1,12,3,4,5]
}


function check(obj1,obj2){
let n=obj1.arr1.length
let length=0;
for(let i in obj1.arr1){
    if(obj1.arr1[i]===obj2.arr2[i]){
        length++;
    }
}
if(length===n){
    console.log('Equal')
}
else{
    console.log('Not Equal');
}
    
}
check(obj1,obj2)