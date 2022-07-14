/*
$('#btn').click(function () {
    RajatPromise(92)
      .then(function (data) {
        console.log(data);
      })
      .catch(function (err) {
        console.log(err);
      });
  
    // A promise syntax
  
  
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => console.log(data));
  
  
    $.ajax({
      url: 'https://fakestoreapi.com/products',
      type: 'GET',
      success: function (data) {
        console.log(data);
        document.getElementsByTagName('h1')[0].innerText = data.title;
      },
    });
    
  });
  
  /// Promises --
  // How to create a promise
  // How to use a promise
  // what is a promise ?
  
  function RajatPromise(marks) {
    const apiResponse = new Promise(function (fullfilled, rejected) {
        $.ajax({
            url: 'https://fakestoreapi.com/products',
            type: 'GET',
            success: function (marks) {
                if (marks > 90) {
                    fullfilled('You receive a bike');
                    document.getElementsByTagName('h1')[0].innerText = marks.title;
                  } 
              
            }
          });
      if (marks > 90) {
        fullfilled('You receive a bike');
      } else {
        rejected('Your pcoket money stopped');
      }
    });
  
    return apiResponse;
  }
  
  ///WRap the jquery ajax code into a promise --->
  //
  console.log(1)


//console.err
//Its asynchronous
/*
RajatPromise().then(data=>{
  console.log(data);
  
}).catch(err=>{
    console.log(err);
})

console.log(2);


function RajatPromise(marks) {
  const apiResponse = new Promise(function (fullfilled, rejected) {
    // this is synchronous;
    console.log("hey there")
    if (marks > 90) {
      fullfilled('You receive a bike');
    } else {
      rejected('Your pcoket money stopped');
    }
  });

  return apiResponse;
}


function MyPromise(){

const pr=new Promise((res,rej)=>{

  setTimeout(()=>{
    res("Promise resolved");
    
  },1000)
  
})

  return pr;
  
  
}

MyPromise().then(data=>{
  console.log(data);
}).catch(err=>{
  console.log(err);
})

//async await --->keywords -->

//async await --->keywords --> in js 

//const await =9;
//console.log(await);

function MyFoo(){
    //await is only valid inside async functions 
  
   await MyPromise()
    // await is used to get the resolved result of a promise
  
   // console.log()
  
    
  }
  
  MyFoo();
  console.log(1)


//console.err
//Its asynchronous
/*
RajatPromise().then(data=>{
  console.log(data);
  
}).catch(err=>{
    console.log(err);
})
console.log(2);


function RajatPromise(marks) {
  const apiResponse = new Promise(function (fullfilled, rejected) {
    // this is synchronous;
    console.log("hey there")
    if (marks > 90) {
      fullfilled('You receive a bike');
    } else {
      rejected('Your pcoket money stopped');
    }
  });

  return apiResponse;
}


function MyPromise(){

const pr=new Promise((res,rej)=>{

  setTimeout(()=>{
    rej("Promise rejected");
    
  },1000)
  
})

  return pr;
  
  
}
/*
MyPromise().then(data=>{
  console.log(data);
}).catch(err=>{
  console.log(err);
})


//async await --->keywords --> in js 

//const await =9;
//console.log(await);

  async function MyFoo(){
  //await is only valid inside async functions 

    try{ 
      
      const d=await MyPromise();
    console.log(d);
      
    }
    catch(err){
      console.log("in err",err);
    }


  // await is used to get the resolved result of a promise

 // console.log() 
}
MyFoo();
*/
function Naveen(marks){
  let promise1=new Promise((response,reject)=>{
    if(marks>=40){
      response('pass')
    }
    else{
      reject('fail')
    }
  })
  return promise1;
}
Naveen(50).then((marks)=>{
  console.log(marks);
}).catch((err)=>{
  console.log(err)
})