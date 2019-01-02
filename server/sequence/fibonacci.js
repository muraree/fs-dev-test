// Fibonacci sequence logic goes here.

const fibonacciSeq = () => {
  let [
    previousValue,
    currentValue,
  ] = [0, 1];
  return () => {
    const value = currentValue;
    [
      previousValue,
      currentValue,
    ] = [currentValue, previousValue + currentValue];
    return value;
  };
};

module.exports = fibonacciSeq