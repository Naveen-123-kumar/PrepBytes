// Prepbuddy is very tasteful of clothes. 
// He has 
// N
//  numbers of shirts hanging in the hanger in his wardrobe.
// Prepbuddy likes to wear different colored clothes. So, whenever he see there are two or more shirts with the same color, he removes all the shirt of that color from his wardrobe. Now, he wants to know how many 
// M
//  unique color shirts are left in the wardrobe. 
// Prepbuddy wants you to find 
// M
// .
function uniqueColor(arr,n){
    let tem="";
    let count=0;
    let i,j;
    for(i=0;i<n;i++){
        let current=0;
        for(j=0;j<n;j++){
            if(arr[i]==arr[j]){
                current++;
            }

        }
        if(current==1){
            tem=tem+arr[i];
            count++;
        }
}
return count;

}
let arr=new Array(3,2,4,5,6,8,2,3);
let n=arr.length;
console.log(uniqueColor(arr,n));
