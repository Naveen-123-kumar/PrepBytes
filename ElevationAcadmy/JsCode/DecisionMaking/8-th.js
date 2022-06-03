// You are given 
// 3
//  distinct integers 
// X
// ,
// Y
// ,
//  and 
// Z
// ,
//  and your task is to find and return the second smallest integer among the three provided integers.

const findSndSmallest = (A,B,C) => {
    if( A==B==C || A < 0 || B < 0 || C < 0 ){
      return -1
    }
    else{
    if(A > B && A > C && B>C){
      return B
    }
    else if(A > B && A > C && B<C){
      return C
    }
    else if(B > A && B > C && A>C){
      return A
    }
    else if(B > A && B > C && A<C){
     return C
    }
    else if(C > A && C > B && A>B){
        return A
    }
    else if(C > A && C > B && A<B){
       return B
    }
    
    }
    };
    
console.log(findSndSmallest(2,5,4));  