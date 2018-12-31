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

function isPrime(num) {
  for ( var i = 2; i < num; i++ ) {
    if ( num % i === 0 ) {
      return false;
    }
  }
  return true;
}

exports.primeSeq = function prime(x) {

  for ( var i = x; i < 99999999; i+=2 ) {
    if ( isPrime(i) ) {
      return i;
    }
  }
}

// Even number check.

exports.isEven = function even(x) {
  
  if (x % 2 === 0) {
    return { status: true, number: x }
  } else {
    return { status: false, number: x }
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