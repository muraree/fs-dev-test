const sequence = require('../sequence');
const pipe = require('../pipedFunctions');
const generator = require('../generator');
const pipeSeq = require('../pipeline');
const iterator = require('../iterator');

function pipedSequenceWithAccumulator(seq, ...rest) {
  const pipedSeq = pipeSeq(seq, ...rest)
  .pipeline(pipe.accumulator)
  .invoke();
  return pipedSeq;
}

function pipedSequenceWithisEven(seq, ...rest) {
  const pipedSeq = pipeSeq(seq, ...rest)
  .pipeline(pipe.isEven)
  .invoke();
  return pipedSeq;
}

function pipedSequenceWithBoth(seq, ...rest) {
  const pipedSeq = pipeSeq(seq, ...rest)
  .pipeline(pipe.accumulator)
  .pipeline(pipe.isEven)
  .invoke();
  return pipedSeq;
}

exports.getFactorialSeq = (req, res) => {
  let piped;
  let seq;
  if (req.query.accumulator === 'true') {
    piped = pipedSequenceWithAccumulator(sequence.factorialSeq);
    seq = generator(piped);
  } else if(req.query.isEven === 'true') {
    
    piped = pipedSequenceWithisEven(sequence.factorialSeq);
    seq = generator(piped);
  } else {
    seq = generator(sequence.factorialSeq);
  }
  res.send({ data: iterator(seq) });
}

exports.getFibonacciSeq = (req, res) => {
  let piped;
  let seq;
  if (req.query.accumulator === 'true') {
    piped = pipedSequenceWithAccumulator(sequence.fibonacciSeq);
    seq = generator(piped);
  } else if(req.query.isEven === 'true') {
    piped = pipedSequenceWithisEven(sequence.fibonacciSeq);
    seq = generator(piped);
  } else {
    seq = generator(sequence.fibonacciSeq);
  }
  res.send({ data: iterator(seq) });
}

exports.getPrimeSeq = (req, res) => {
  let piped;
  let seq;
  if (req.query.accumulator === 'true') {
    piped = pipedSequenceWithAccumulator(sequence.primeSeq);
    seq = generator(piped);
  } else if(req.query.isEven === 'true') {
    piped = pipedSequenceWithisEven(sequence.primeSeq);
    seq = generator(piped);
  } else {
    seq = generator(sequence.primeSeq);
  }
  res.send({ data: iterator(seq) });
}

exports.getRangeSeq = (req, res) => {
  let piped;
  let seq;
  if (req.query.accumulator === 'true') {
    piped = pipedSequenceWithAccumulator(sequence.rangeSeq, 2, 3);
    seq = generator(piped);
  } else if(req.query.isEven === 'true') {
    piped = pipedSequenceWithisEven(sequence.rangeSeq, 2, 3);
    seq = generator(piped);
  } else {
    seq = generator(sequence.rangeSeq, 2, 3);
  }
  res.send({ data: iterator(seq) });
}

exports.getPartialSumSeq = (req, res) => {
  let piped;
  let seq;
  if (req.query.accumulator === 'true') {
    piped = pipedSequenceWithAccumulator(sequence.partialSumSeq, 1, 3, 7, 2, 0, 1, 7, 8, 5, 10);
    seq = generator(piped);
  } else if(req.query.isEven === 'true') {
    piped = pipedSequenceWithisEven(sequence.partialSumSeq, 1, 3, 7, 2, 0, 1, 7, 8, 5, 10);
    seq = generator(piped);
  } else {
    seq = generator(sequence.partialSumSeq, 1, 3, 7, 2, 0, 1, 7, 8, 5, 10);
  }
  res.send({ data: iterator(seq) });
}