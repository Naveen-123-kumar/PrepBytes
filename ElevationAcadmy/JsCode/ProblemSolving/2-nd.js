// Check whether the year is Leap year or not.

var Check_Leap = (year) => {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    return "Leap Year";
  } else {
    return "Non Leap Year";
  }
};
