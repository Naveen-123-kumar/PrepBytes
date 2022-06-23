// Reverse a Number.
// Write a program which takes a numebr N as input from the user and You need to reverse the number.

var Reverse_Number = (N) => {
  let tem = 0;
  while (N) {
    let digit = N % 10;
    tem = tem * 10 + digit;
    N = Math.floor(N / 10);
  }
  return tem;
};
