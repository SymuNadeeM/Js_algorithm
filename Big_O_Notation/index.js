// Big-O notation describes the complexity of an algorithm using algebraic terms
// It has two important characteristics
// 1. It is expressed in terms of the input
// 2. It focuses on the bigger picture without getting caught up in the minute details

// Ex- For 1.

function apple(x) {
  let sum = 0;
  for (let i = 0; i <= x; i++) {
    sum += x;
  }
  return sum
}

console.log(apple(5));
