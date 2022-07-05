// var Mobile={
//     name:'Realme 5',
//     madein:'China',
//     cost:'10000',
//     address:'kalyani',
//     arr:[1,2,3,5],
//     owner:{
//         Name:'Naveen',
//         age:'24',
//         mobile:'759932156',
//         email:'@gmail.com',
//         address:{
//             village:'Fatahpur Pakri',
//             post:'piroi',
//             PS:'Mahua',
//             Dist:'Vaishali',
//             State:'Bihar',
//         }
//     },
//     fullName: function(){
//       return this.name+' '+this.cost;
//     }
// }
// console.log(Mobile.fullName())
var twoSum = function(nums, target) {
    let mm=new Map();
    for(let i=0;i<nums.length;i++){
        mm.set(nums[i],i);
    }
    let diff=0;
    let j;
    for(let i=0;i<nums.length;i++){
        diff=target-nums[i];
        if(mm.has(diff) && i!=mm.get(diff)){
           j=mm.get(diff);
            if(j>i){
                return [i,j];
            }else{
               return [j,i];
            }
        }
    }
};
let arr=[2,3,9,10];
let target=11;
console.log(twoSum(arr,target));

function foo(){
    // so every function has a property called (this)
    // the value of this is bound to change ,and it depends on the execution context
    var a=9;
    console.log(this.a);
    //console.log(window);
    }
    var a=88;
    foo();
    
    
    
    const obj={
    name:"shubham",
    fn:function(){
    console.log(this);
    }
    }
    
    obj.fn();