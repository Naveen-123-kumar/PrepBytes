// Print the Table

const Print_Table = (N) => 
{
  let result=''
  let i
  for(i=1;i<=10;i++){
    result=N+' '+'*'+' '+i+' '+ '=' +' '+ N*i
    
    console.log(result )
  }
	
};

Print_Table(5);