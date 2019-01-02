// Prime number sequence logic goes here.

const getNextPrimeNumber = (value) => {
  if (value > 2) {
    let i;
    let q;
    do {
      i = 3;
      value += 2;
      q = Math.floor(Math.sqrt(value));
      while (i <= q && value % i) {
        i += 2;
      }
    } while (i <= q);
    return value;
  }
  return value === 2 ? 3 : 2;
};

const primeSeq = () => {
  let currentValue = 0;
  return () => {
    currentValue = getNextPrimeNumber(currentValue);
    return currentValue;
  };
}

module.exports = primeSeq