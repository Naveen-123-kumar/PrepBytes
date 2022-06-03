// Get Value
// You are provided with a table containing some characters and their corresponding values. Your task will be to find the value from the table corresponding to an input character and return it.

// | P or p 	- PrepBytes      	|
// | Z or z 	- Zenith         	|
// | E or e 	- Expert Coder   	|
// | D or d 	- Data Structure 	|

const getValue = (char) => {
    if(char=='P' || char=='p'){
      return 'PrepBytes'
    }
    else if(char=='Z' || char=='z'){
      return 'Zenith'
    }
    else if(char=='E' || char=='e'){
      return 'Expert Coder'
    }
    else if(char=='D' || char=='d'){
      return 'Data Structure'
    }
    else{
      return -1
    }
  
};

console.log(getValue('p'));