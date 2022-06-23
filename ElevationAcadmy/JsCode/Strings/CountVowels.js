// You are given a string S containing both uppercase and lowercase letters. You need to find out the number of vowels in the given string

var Count_Vowels= (S) => 
{
      S=S.toUpperCase();
      let count=0
      let i
      for(i=0;i<S.length;i++){
        if(S[i]=='A' || S[i]=='E' || S[i]=='O' || S[i]=='I' || S[i]=='U'){
          count+=1
        }
      }
      return count
};
 
