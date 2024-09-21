// Prime : A prime number is a natural number greater than 1 that is not a product of two smaller natural number.

function prime(n) {
  if (n < 2) {
    return console.log("false");
    
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return console.log("false not prime");
      
    }
  }
  return console.log("true is prime")
}

prime(2);
