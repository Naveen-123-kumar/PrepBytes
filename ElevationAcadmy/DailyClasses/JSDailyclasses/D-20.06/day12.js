// const arr = ['AM','DA','AL','FG'];
// const arr1 = arr.filter(function start(ele){
//     return ele.startsWith('A');
// })
// console.log(arr1);
// function nums(a, b) {
//     if (a > b) console.log('a is bigger');
//     else console.log('b is bigger');
//     return 
//     a + b;
//     }
//     console.log(nums(4, 2));
//     console.log(nums(1, 2));
// let arr=[1,2,3,5,6,7];
// const result=arr.reduce((sum,i)=>{
//     sum =sum+i;
//     return sum;
// },0);
// console.log(result);
// let input=
// [
//     {
//        barcode: "",
//        description: "META AM 29 XX Edition Large",
//        description2: "",
//        group: "COM20"
//     },
//     {
//        barcode: "",
//        description: "META AM 29 TEAM Large",
//        description2: "",
//        group: "COM20"
//     }
//  ]
//  const result=input.reduce((rep,i)=>{
//     rep=rep+i;
//  },'')
//  console.log(result);


// //Q.2.remove all duplicate countries names....
// // Input 
var table = [
      {
        country:"india",
        b:2
      },
      {
         country:"usa",
        b:33
      },
       {
         country:"australia",
        b:3
      },
       {
         country:"india",
        b:32
      },
       {
         country:"southafrica",
        b:31
      },
       {
         country:"australia",
        b:30
      },
      {
        country:"india",
        b:40
      }
    ];
    const uniqueData = [...table.reduce((map, obj) => map.set(obj.country, obj), new Map()).values()];

    console.log(uniqueData)

   //  let set=new Set();
   //  table.forEach((i)=>{
   //    if(!set.has(i.country)){
   //       set.add(i);

   //    }
   //  })
   //  console.log(set);
//     const result = table.filter((i)=>{
//       if(!set.has(i.country)){
//        set.add(i);
//       }
 
//       return set;
//     })

// console.log(result)
