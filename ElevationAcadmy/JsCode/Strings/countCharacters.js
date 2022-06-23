// Count Characters
// You are given a string
// S
// , and your task is to return an array
// B

// (
// having a size of
// 2
// )
// , where
// B
// [
// 0
// ]
//  contains the count of character A (uppercase) in string S and
// B
// [
// 1
// ]
//  contains the count of character D (uppercase) in string S.

const countCharacters = (S) => {
  var B = [2];
  let countA = 0;
  let countD = 0;
  let i;
  for (i = 0; i < S.length; i++) {
    if (S[i] === "A") {
      countA += 1;
    } else if (S[i] === "D") {
      countD += 1;
    }
  }
  B[0] = countA;
  B[1] = countD;
  return B;
};

