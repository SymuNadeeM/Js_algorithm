// factorial(4) --> 4*3*2*1 = 24

function factorial(n) {
  let sum = 1;
  for (let i = 2; i <= n; i++) {
     sum = sum * i;
  }
  return sum;
}

console.log(factorial(5));
