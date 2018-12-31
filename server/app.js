const express = require('express');
const app = express();
const cors = require('cors');
const sequence = require('./sequence');

app.use(cors("*"));

let count = 0;

function generator(sequencer){
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

})

app.get('/primeSeq', function(req, res) {

})

app.get('/partialSumSeq', function(req, res) {
  
})

module.exports = app;
