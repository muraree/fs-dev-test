const pipe = require('../pipedFunctions');
const expect = require('chai').expect;

const pipeFunctionTest = () => {
  it('test for isEven function', (done) => {
    const isEven = pipe.isEven();
    const evenNumber = isEven(8);
    const oddNumber = isEven(7);
    expect(evenNumber.status).to.eql(true);
    expect(evenNumber.number).to.eql(8);
    expect(oddNumber.status).to.eql(false);
    expect(oddNumber.number).to.eql(7);
    return done();
  });
  it('test for accumulator function', (done) => {
    const accumulator = pipe.accumulator();
    const initialvalue = accumulator(5);
    const nextValue = accumulator(2);
    expect(initialvalue).to.eql(5);
    expect(nextValue).to.eql(7);
    return done();
  });
}

module.exports = pipeFunctionTest;