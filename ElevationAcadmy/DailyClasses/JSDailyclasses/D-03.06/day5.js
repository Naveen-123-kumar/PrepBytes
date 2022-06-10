// let number=2;
// switch(number){
//     case 1:
//         console.log("I am number 1");
//         break;
//     case 2:
//         console.log("I am number 2");
//         break;
//     case 3:
//         console.log("I am number 3");
//         break;
//     case 4:
//         console.log("I am number 4");
//         break;
//     case 5:
//         console.log("I am number 5");
//         break;
//     default:
//         console.log("I am number greater than 5");
//         break;
// }
//for loop is used to iterate any statement for fixed number of times
// var n=5;
// for(let i=1;i<=10;i++){
//     console.log('3 *', i ,'=', 3*i);
// }
// let i=0;
// while(i<10){
//     console.log('print the value of i ',i);
//     i++;
// }
// let j=0;
// do{
//     console.log(j);
//     j++;
// }while(j<5);
// console.log(name) ; //checkpoint-1
// var name = 20;
// func();
// console.log(func) ; //checkpoint-2
// function func() {
//   let a = 20 ;
// }
// console.log(callMe);  //checkpoint-3
// var callMe = () =>{
//     console.log("You called me") ;
// }
function test1() {
    let a = 20 ;
    console.log(test12); //checkpoint-1
    function test12() {
        call1();  //checkpoint-2
        let x = -20 , y = -54 ;
    }
}
function call1(){
    function call12(){
        let a = 301 ;
        let b = 403 ;
        function call123(){
            console.log(a);  //checkpoint-3
            console.log(x+y) ; //checkpoint-4
            test12() ; //checkpoint-5
            console.log(a-b) ;  //checkpoint-6
        }
    }
}
call1();
test1();
