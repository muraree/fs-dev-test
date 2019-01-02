// Range sequence logic goes here.

const rangeSeq = (start, step) => {
  let currentValue = start;
  return () => {
    const value = currentValue;
    currentValue += step;
    return value;
  };
};

module.exports = rangeSeq