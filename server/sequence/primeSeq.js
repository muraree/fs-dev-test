// Prime number sequence logic goes here.

const getNextPrime = (value) => {
  if (value > 2) {
    let i;
    let j;
    do {
      i = 3;
      value += 2;
      j = Math.floor(Math.sqrt(value));
      while (i <= j && value % i) {
        i += 2;
      }
    } while (i <= j);
    return value;
  }
  return value === 2 ? 3 : 2;
};

const primeSeq = () => {
  let currentValue = 0;
  return () => {
    currentValue = getNextPrime(currentValue);
    return currentValue;
  };
}

module.exports = primeSeq