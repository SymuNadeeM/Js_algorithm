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

// factorial::

function fact(n) {
  let apple = 1;
  for (let i = 2; i <= n; i++) {
    apple = apple * i;
  }
  return apple;
}

console.log(fact(5));

// Recursive Factorial of a Number ::

// Problem: Given an integer 'n', find the factorial of that integer.
// The factorial of a non-negative 'n', denoted n!, is the product of all positive integers less than or equal to 'n'

// Factorial of zero is 1.
// factorial(4) = 4*3*2*1 =24
// factorial(5) = 5*4*3*2*1 =120

// 5! = 5*4*3*2*1 =   5*4!
// 4! = 4*3*2*1 =   4*3!
// 3! = 3*2*1 =   3*2!
// 2! = 2*1 =   2*1!
// 1! = 1*1 =   1*0!
// 0! = 1

// n!=n*(n-1)!

function recursiveFactorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial(4));
