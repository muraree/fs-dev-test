const isArgumentFunction = (pipe) => {
  if (!pipe || typeof pipe !== 'function' || pipe.constructor !== Function) {
    return false;
  }
  return true;
};

const pipeSeq = (sequencer, ...params) => {

  const initialValue = sequencer(...params);
  const fns = [];

  return {
    pipeline(pipe, ...args) {
      if (!isArgumentFunction(pipe)) {
        throw new Error('No function passed as param');
      }
      fns.push(pipe(...args));
      return this;
    },
    invoke() {
      return () => () => fns.reduce((res, fn) => fn(res), initialValue());
    },
  };
}

module.exports = pipeSeq