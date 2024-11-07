//  Task #3
/*
Create a function that will return a string that combines all of the letters of the three inputed 
strings in groups. Taking the first letter of all of the inputs and grouping them next to each 
other. Do this for every letter, see example below! 

E.g. Input: "aa", "bb", "cc" => Output: "abcabc"

Note: You can expect all of the inputs to be the same length. 
*/

const letterCombinations = (a, b, c) => {
  let result = "";
  for (let i = 0; i < a.length; i++) {
    result += a[i] + b[i] + c[i];
  }
  return result;
};

console.log(letterCombinations("abc", "def", "ghi"));
