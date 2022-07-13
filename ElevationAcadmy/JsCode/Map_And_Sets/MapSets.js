// "Problem:
// You are given a string (STR) of length N, consisting of only the lower case English alphabet.
// Your task is to remove all the duplicate occurrences of characters in the string.

// Input:
// abcadeecfb

// Output:
// abcdef"
var s='abcadeecfb';
let n=s.length;
let set=new Set();
for(let i=0;i<n;i++){
    set.add(s[i]);
}
let tem=''
console.log(...set);

// "Problem:
// You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)

// Input:
// abcadeecfb

// Output:
// a=2
// b=2
// c=2
// d=1
// e=2
// f=1"
function printChar(s){
    var map=new Map();
    s.split('').forEach((element)=>{
        if(map.has(element)){
            map.set(element,map.get(element)+1)
        }
        else{
            map.set(element,1)
        }
    });
    s.split('').forEach((i)=>{
        if(map.has(i) && map.get(i)!=0){
            console.log(i + "="+map.get(i)+' ');
            map.set(i,0)
        }
    })

}
var s="geeksforgeeks";
printChar(s);


