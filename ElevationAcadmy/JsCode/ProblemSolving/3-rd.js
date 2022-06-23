// Perfect Number Check.

var Perfect_Check = (N) => {
  let tem = 0;
  for (let i = 1; i <= N / 2; i++) {
    if (N % i === 0) {
      tem = tem + i;
    }
  }
  if (tem === N && tem !== 0) {
    return "YES";
  } else {
    return "NO";
  }
};
