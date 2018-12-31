const express = require('express');
const app = express();
const cors = require('cors');
const sequence = require('./sequence');

app.use(cors("*"));

function generator(sequencer){
  let sum = 0;
  return {
    next : function next() {  
      const value = sequencer(sum);
      sum ++;
      return value
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

})

app.get('/primeSeq', function(req, res) {

})

app.get('/partialSumSeq', function(req, res) {
  
})

module.exports = app;
