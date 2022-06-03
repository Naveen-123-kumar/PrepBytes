// Check whether a Number is a prime or not

const Prime_Check = (n) => {
  for (var i = 2; i < n; i++) {
    if (n % i !== 0) {
      return "YES";
    } else {
      return "NO";
    }
  }
};
console.log(Prime_Check(11));