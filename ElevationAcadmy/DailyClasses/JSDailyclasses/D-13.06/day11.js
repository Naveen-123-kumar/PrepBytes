// const data=[
//     {
//       "_id": "62a372cbe5bb83afa31760a8",
//       "name": "Nikki Mosley",
//       "address": "782 Prince Street, Gallina, Utah, 4156"
//     },
//     {
//       "_id": "62a372cb48e56aa3d6016871",
//       "name": "Sampson Mercado",
//       "address": "148 Crystal Street, Macdona, South Dakota, 8488"
//     },
//     {
//       "_id": "62a372cb4aad1e8bc0525d17",
//       "name": "Johnston Myers",
//       "address": "846 Eldert Lane, Cashtown, North Dakota, 5586"
//     } 
//   ]
//   let tem=data.map((item)=>{
//     return item.name;
//   })
//   console.log(tem);
// let arr=['AB','BC','AD','AK'];
// const tem=arr.filter((i)=>{
//     return i.startsWith('A');
// })
// console.log(tem);
function maximumMethod(arr){

    let maximum=0;
  
    for(let i=0;i<arr.length;i++){
  
      if(parseInt(arr[i])>maximum){
        maximum=arr[i];
      }
      
    }
  
    return maximum;
    
  }
  
  function minimumMethod(arr){
  
    let minimum=Number.MAX_VALUE;
  
    for(let i=0;i<arr.length;i++){
  
      if(parseInt(arr[i])<minimum){
        minimum=arr[i];
      }
      
    }
  
    return minimum;
    
  }
  //const arr=[1,2,3,4,519]
  //console.log(minimumMethod([1,2,3,4,5,88]))
  //console.log(Math.min(...arr))
  //const arr=[1,2,3,4,519]
  //console.log(maximum([1,2,3,4,519]))
  //console.log(Math.max(...arr));
  