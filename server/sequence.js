// Fibonacci sequence.

exports.fibonacciSeq = function fibonacci(n) {
  return n < 1 ? 0
       : n <= 2 ? 1
       : fibonacci(n - 1) + fibonacci(n - 2);
}

// Factorial sequence.
exports.factorialSeq = function fact(x) {
  if(x==0) {
    return 1;
  }
  return x * fact(x-1);
}

// Prime number sequence.

exports.primeSeq = function prime() {
  for (let limit = 1; limit <= 20; limit++) {
    let a = false;
    for (let i = 2; i <= limit; i++) {
      if (limit % i === 0 && i !== limit) {
          a = true;
      }
    }
    if (a === false) {
      console.log(limit);
    }
  }
}

// Range sequence.

exports.rangeSeq = function range(start, end) {
  let result = [];
  for (let i = start; i <= end; i++) {
      result.push(i);
  }
  return result;
}