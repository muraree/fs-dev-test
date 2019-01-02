// Partial sum sequence logic goes here.

const partialSumSeq = (...args) => {
  let sum = 0;
  let i = 0;
  return () => {
    if (args.length === i) {
      throw new Error('Sequence ended!');
    }
    sum += args[i];
    i += 1;
    return sum;
  };
};

module.exports = partialSumSeq