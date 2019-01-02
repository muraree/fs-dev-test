const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const sequence = require('./sequence');
const pipe = require('./pipedFunctions');
const generator = require('./generator');
const pipeSeq = require('./pipeline');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


router.get('/factorialSeq', function(req, res) {
  const factGen = generator(sequence.factorialSeq);
  res.send({ data: factGen.next() });
})

router.get('/fibonacciSeq', function(req, res) {
  const fibonacciGen = generator(sequence.fibonacciSeq);
  const nextVal = fibonacciGen.next();
  res.send({ data: nextVal });
})

router.get('/primeSeq', function(req, res) {
  const primeGen = generator(sequence.primeSeq);
  const nextVal = primeGen.next();
  res.send({ data: nextVal });
})

router.get('/rangeSeq', function(req, res) {
  const pipedSeq = pipeSeq(sequence.rangeSeq, 2, 3)
  .pipeline(pipe.accumulator)
  .pipeline(pipe.isEven)
  .invoke();
  const seq = generator (pipedSeq);
  res.send({ data: seq.next() });
})

router.get('/partialSumSeq', function(req, res) {
  const seq = generator(sequence.partialSumSeq, 1, 3, 7, 2, 0);
  res.send({ data: seq.next() });
})

module.exports = router;