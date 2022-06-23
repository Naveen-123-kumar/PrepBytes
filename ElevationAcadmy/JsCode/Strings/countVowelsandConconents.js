// You are given a string S containing both uppercase and lowercase letters.You need to find out the number of vowels and the number of consonants in the given string.

var Count_Vowels= (S) => 
{
     S=S.toUpperCase();
      let countV=0
      let i
      for(i=0;i<S.length;i++){
        if(S[i]=='A' || S[i]=='E' || S[i]=='O' || S[i]=='I' || S[i]=='U'){
          countV+=1
        }
      }
      return countV
};
var Count_Consonants= (S) => 
{
       S=S.toUpperCase();
      let countV=0
      let countC=0
      let i
      for(i=0;i<S.length;i++){
        if(S[i]=='A' || S[i]=='E' || S[i]=='O' || S[i]=='I' || S[i]=='U'){
          countV+=1
        }
        else{
          countC+=1
        }
      }
      return countC
};
 
