// Fibonacci sequence: Fibonacci sequence is a sequence in which each number is the sum of the previous two number.[]

// fibonacci(2) = [0,1]
// fibonacci(3) = [0,1,0]
// fibonacci(7) = [0,1,1,2,3,5,8]

function apple(n) {
  const fab = [0, 1];
  for (let i = 2; i < n; i++) {
    fab[i] = fab[i - 1] + fab[i - 2];
  }
  return fab;
}

console.log(apple(7));

// for 3 are sum of 4th

function three(n) {
  const th = [0, 1, 1];
  for (let i = 3; i < n; i++) {
    th[i] = th[i - 1] + th[i - 2] + th[i - 3];
  }
  return th
}

console.log(three(3));
console.log(three(4));
console.log(three(5));
