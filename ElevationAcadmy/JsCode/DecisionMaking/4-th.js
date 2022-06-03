// Find Relation
const findRelation = (x,y) => {
 
   
    if(x<y){
      return x +' is smaller than '+ y
    }
    else if(x>y){
      return x+ ' is greater than ' +y
    }
    else{
      return x +' is equal to '+ y
    }
};
console.log(findRelation(5,6));