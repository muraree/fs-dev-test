const express = require('express');
const app = express();
const cors = require('cors');
const sequence = require('./sequence');

app.use(cors("*"));

let count = 0;

function generator(sequencer, ...rest){
  return {
    next : function next() {  
      const value = sequencer(count);
      count ++;
      return value;
    }
  }
}

app.get('/factorialSeq', function(req, res) {
  const factGen = generator(sequence.factorialSeq);
  const nextVal = factGen.next();
  res.send({ data: nextVal });
})

app.get('/fibonacciSeq', function(req, res) {
  const fibonacciGen = generator(sequence.fibonacciSeq);
  const nextVal = fibonacciGen.next();
  res.send({ data: nextVal });
})

app.get('/rangeSeq', function(req, res) {
  const rangeGen = generator(sequence.rangeSeq, 1, 2);
  const nextVal = rangeGen.next();
  res.send({ data: nextVal });
})

app.get('/primeSeq', function(req, res) {
  const primeGen = generator(sequence.primeSeq);
  const nextVal = primeGen.next();
  res.send({ data: nextVal });
})

app.get('/partialSumSeq', function(req, res) {

})

app.get('/isEven', function(req, res) {
  const ie = sequence.isEven(4);
  res.send({ data: ie });
})

module.exports = app;
