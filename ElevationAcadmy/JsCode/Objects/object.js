// 1.Create a Function
function Check(obj1){
    obj1.setter=function(){
      console.log(this.name);
    }
      
}
// 2.Delete a Parameter
function Check(obj1) {
    delete obj1.rollno;
    return obj1;
    
}
// 3.Check whether the Package is Dream Package or not
function Check(obj1) {
    if(obj1.salary>500000){
      return "Dream"
    }
    else{
      return "NotDream";
    }
}
// 4.Check whether the Object has a parameter or not

function Check(obj1) {
    let arrayOfStr = Object.keys(obj1);
        if (arrayOfStr.length === 0){
          return 'false';
        }
        else {
          return 'true';
        }
    
    }
    
// 5.Merge the Objects

function Check(obj1,obj2) {
   
    let result=Object.assign(obj1,obj2);
    return result;
}

// 6.Object Multiplyer
// Complete the function in the editor. In which you are given an object and a digit N as a parameter.In the object there are two variable id and houseno are defined as a data member. You have to multiply both the data members with a given digit N.

function Check(a,obj1) {
    obj1.id=obj1.id * a;
    obj1.houseno=obj1.houseno*a;
    return obj1;
  
  }
// 7.Find the  sum of Object Members

function Check(obj1) {
    var tem=obj1.p1+obj1.p2+obj1.p3
    return tem;
 }
 
 
// 8.Check whether the Objects are same or not.

function check(obj1,a,b) {
    return ((obj1.id===b) && (obj1.name===a))?'true':'false';
}

