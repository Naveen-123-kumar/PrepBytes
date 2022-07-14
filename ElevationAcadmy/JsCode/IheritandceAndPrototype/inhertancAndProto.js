// Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype
let parent={
    name:'naveen',
    age: 24,

};
let child={
    address:'Mahua',
    Dist:'Vaishali'
}
child._proto_=parent;
console.log(child._proto_.name)
// Write code to explain prototype chaining

// Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays
// Write a JavaScript function to retrieve all the names of object's own and inherited properties.