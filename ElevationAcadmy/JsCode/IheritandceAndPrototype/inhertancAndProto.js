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
let parent1={
    name:'naveen',
    age: 24,
    getDetails:function(){
        console.log(`My name is ${this.name} and age is ${this.age}`)
    }

};
let child1={
    address:'Mahua',
    Dist:'Vaishali',
}
child1._proto_=parent1;
console.log(child1._proto_.name)
parent1.getDetails();
// Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays
let arr=[1,2,3,4,5,6,7];
let result={
    getSum:function(){
        let sum=arr.reduce((acc,i)=>acc=acc+i,0);
        console.log(sum);
    }
}
result.getSum();
// Write a JavaScript function to retrieve all the names of object's own and inherited properties.
let obj={
    name:'Naveen Kumar',
    college:'Indian Institute of Information Technology,Kalyani,West Bengal',
    branch:'Computer Science and Engineering'
}
// let result2=Object.getOwnPropertyNames(obj);
let result2=Object.keys(obj)
console.log(result2)