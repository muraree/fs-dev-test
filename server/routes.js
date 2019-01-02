const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const sequence = require('./sequence');
const pipe = require('./pipedFunctions');
const generator = require('./generator');
const pipeSeq = require('./pipeline');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

function iterator(it) {
  let arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push(it.next());
  }
  return arr;
}

router.get('/factorialSeq', function(req, res) {
  const factGen = generator(sequence.factorialSeq);
  res.send({ data: iterator(factGen) });
})

router.get('/fibonacciSeq', function(req, res) {
  const fibonacciGen = generator(sequence.fibonacciSeq);
  res.send({ data: iterator(fibonacciGen) });
})

router.get('/primeSeq', function(req, res) {
  const primeGen = generator(sequence.primeSeq);
  res.send({ data: iterator(primeGen) });
})

router.get('/rangeSeq', function(req, res) {
  const pipedSeq = pipeSeq(sequence.rangeSeq, 2, 3)
  .pipeline(pipe.accumulator)
  .invoke();
  const seq = generator (pipedSeq);
  res.send({ data: iterator(seq) });
})

router.get('/partialSumSeq', function(req, res) {
  const seq = generator(sequence.partialSumSeq, 1, 3, 7, 2, 0, 1, 7, 8, 5, 10);
  res.send({ data: iterator(seq) });
})

module.exports = router;