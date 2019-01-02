const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const services = require('./services');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/factorialSeq', services.getFactorialSeq );

router.get('/fibonacciSeq', services.getFibonacciSeq );

router.get('/primeSeq', services.getPrimeSeq );

router.get('/rangeSeq', services.getRangeSeq );

router.get('/partialSumSeq', services.getPartialSumSeq );

module.exports = router;