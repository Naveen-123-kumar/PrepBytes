// Find Grades
const findGrades = (a) => {
    switch(true){
      case a<=10:
        return 'E'
         break;
      case a>=11 && a<=20:
        return 'D'
          break;
      case a>=21 && a<=30:
        return 'C'
          break;
      case a>=31 && a<=40:
        return 'B'
          break;
      case a>=41 && a<=50:
        return 'A'
          break;
      default:
        return -1
        
    }
};

console.log(findGrades(50));