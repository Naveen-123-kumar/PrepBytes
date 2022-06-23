// You are given a string S, Your task is to check wether the given string is a Palindrome or not String can contain both upppercase lowercase letters.
 
var Palin_Check = (str) =>
{
	 var i = 0, j = str.length - 1
 
        while (i < j) {
 
            
            if (str.charAt(i) != str.charAt(j))
                return "False"
 
            
            i++
            j--
        }
        return "True"
	 
}

