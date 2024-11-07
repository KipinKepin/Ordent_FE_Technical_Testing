//  Task #2
/* 
    Write a function that accepts two integers and returns the remainder of dividing the larger 
    value by the smaller value. 
    Division by zero should return “NaN”.
*/

const remainder = (n, m) => {
  const larger = Math.max(n, m);
  const smaller = Math.min(n, m);

  return smaller === 0 ? "NaN" : larger % smaller;
};

console.log(remainder(0, 1));
