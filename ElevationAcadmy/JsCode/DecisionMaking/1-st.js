// Write a program to make a simple calculator using switch statement that takes operator and two numbers from user and print the result after operation.
const Calculator = (operator,A,B) => 
{
    switch(operator){
      case '+':
        return (A+B)
        break;
      case '-':
        return (A-B)
        break;
      case '*':
        return (A*B)
        break;
      case '/':
        return (A/B)
        break;
      default:
        return ('Invalid operator')
        break;
      
    }
 
    
};
console.log(Calculator('+',2,3));