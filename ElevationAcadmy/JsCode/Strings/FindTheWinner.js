// You are given a string S consisting of two letters A and D ,where each character represent the winner of N games played between Aditya and Danish, where letter A represents the win of Aditya and letter D represents the win of Danish. 
// You need to find out the that which player wins the maximum number of games or there is a draw between them.
 
var Game_Winner = (S) => 
{
  let CountA=0,CountD=0
  for(let i=0;i<S.length;i++){
    if(S.charAt(i)=='A'){
      CountA+=1
    }
    if(S.charAt(i)=='D'){
      CountD+=1
    }
  }
  if(CountA > CountD){
    return 'Aditya'
  }
  else if(CountA<CountD){
    return 'Danish'
  }
  else{
    return 'Draw'
  }
}
 
