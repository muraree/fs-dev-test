// Factorial sequence logic goes here.

const factorialSeq = () => {
  let [
    sum,
    currentValue,
  ] = [0, 0];
  return () => {
    if (currentValue === 0) {
      sum = 1;
    } else {
      sum *= currentValue;
    }
    currentValue += 1;
    return sum;
  };
};

module.exports = factorialSeq