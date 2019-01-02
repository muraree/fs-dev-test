// Factorial sequence logic goes here.

const factorialSeq = () => {
  let [
    sum,
    value,
  ] = [0, 0];
  return () => {
    if (value === 0) {
      sum = 1;
    } else {
      sum *= value;
    }
    value += 1;
    return sum;
  };
};

module.exports = factorialSeq