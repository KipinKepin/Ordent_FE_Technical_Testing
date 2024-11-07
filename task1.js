//  Task #1
/*
    You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten 
    minutes too early to an appointment, so you decided to take the opportunity to go for a short 
    walk. The city provides its citizens with a Walk Generating App on their phones: 
    every time you press the button it sends you an array of one-letter strings representing 
    directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter 
    (direction) and you know it takes you one minute to traverse one city block. 
    So, please create a function that will return true if the walk the app gives you will take you 
    exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your 
    starting point. Return false otherwise. 
*/
const walkCounter = (direction) => {
  if (direction.length !== 10) return false;

  let northSouth = 0;
  let westEast = 0;

  for (let i = 0; i < direction.length; i++) {
    if (direction[i] == "n") {
      northSouth += 1;
    } else if (direction[i] == "s") {
      northSouth -= 1;
    } else if (direction[i] == "e") {
      westEast += 1;
    } else if (direction[i] == "w") {
      westEast -= 1;
    } else {
      return `invalid move, '${direction[i]}'\nyou only can use 'n', 's', 'e', 'w'`;
    }
  }
  return northSouth === 0 && westEast === 0;
};

console.log(walkCounter(["n", "n", "n", "s", "w", "s", "e", "w", "e", "w"]));
