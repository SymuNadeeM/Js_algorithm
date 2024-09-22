// Recursive Fibonacci sequence:
//=============================

//Problem: Given a number 'n', find the nth element of the fibonacci sequence.

// console.log(fibonacciSequence(6)); -->8   [[0,1,1,2,3,5,8]]

function fibonacciSequence(n) {
  if (n < 2) {
    return n;
  }
  return fibonacciSequence(n - 1) + fibonacciSequence(n - 2);
}

console.log(fibonacciSequence(6));
