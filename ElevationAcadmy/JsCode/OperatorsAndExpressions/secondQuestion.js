// Second Question
// Find if the conditions are obeyed or not?
// You are given two number first as 
// A
//  and second as 
// B
//  and check if both conditions (
// A
// <
// 10
//  and 
// A
// >
// B
// ) are satisfied or not with the help of operators.
const Is_Valid=(A,B)=>{
    return (A<10 && A>B)?'true':'false';
}
console.log(Is_Valid(8,5));