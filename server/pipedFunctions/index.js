const isEven = () => {
  return num => ({
    status: ((num % 2) === 0),
    number: num,
  });
};

const accumulator = () => {
  let sum = 0;
  return function (value) {
    sum += value;
    return sum;
  };
}

module.exports = {
  isEven,
  accumulator
}