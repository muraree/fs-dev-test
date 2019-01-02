const sequence = require('../sequence');
const generator = require('../generator');
const pipeSeq = require('../pipeline');
const pipe = require('../pipedFunctions');
const expect = require('chai').expect;


describe('Sudo Generator function test', () => {
  it('test for fibonacci sequencer', (done) => {
    const seq = generator(sequence.fibonacciSeq);
    expect(seq.next()).to.eql(1);
    expect(seq.next()).to.eql(1);
    expect(seq.next()).to.eql(2);
    expect(seq.next()).to.eql(3);
    expect(seq.next()).to.eql(5);
    return done();
  });
  it('test for factorial sequencer', (done) => {
    const seq = generator(sequence.factorialSeq);
    expect(seq.next()).to.eql(1);
    expect(seq.next()).to.eql(1);
    expect(seq.next()).to.eql(2);
    expect(seq.next()).to.eql(6);
    expect(seq.next()).to.eql(24);
    return done();
  });
  it('test for range sequencer ', (done) => {
    const seq = generator(sequence.rangeSeq, 1, 2);
    expect(seq.next()).to.eql(1);
    expect(seq.next()).to.eql(3);
    expect(seq.next()).to.eql(5);
    expect(seq.next()).to.eql(7);
    expect(seq.next()).to.eql(9);
    return done();
  });
  it('test for partial sum sequencer', (done) => {
    const seq = generator(sequence.partialSumSeq, 1, 3, 7, 2, 0);
    expect(seq.next()).to.eql(1);
    expect(seq.next()).to.eql(4);
    expect(seq.next()).to.eql(11);
    expect(seq.next()).to.eql(13);
    expect(seq.next()).to.eql(13);
    expect(() => seq.next()).to.throw(Error);
    return done();
  });
  it('test for prime sequence', (done) => {
    const seq = generator(sequence.primeSeq);
    expect(seq.next()).to.eql(2);
    expect(seq.next()).to.eql(3);
    expect(seq.next()).to.eql(5);
    expect(seq.next()).to.eql(7);
    expect(seq.next()).to.eql(11);
    expect(seq.next()).to.eql(13);
    expect(seq.next()).to.eql(17);
    return done();
  });
});


describe('Pipe functions test', () => {
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
});


describe('Pipelined functions test', () => {
  it('test pipeline rangeSeq and accumulator', (done) => {
    const pipedSeq = pipeSeq(sequence.rangeSeq, 2, 3).pipeline(pipe.accumulator).invoke();
    const seq = generator(pipedSeq);
    expect(seq.next()).to.eql(2);
    expect(seq.next()).to.eql(7);
    expect(seq.next()).to.eql(15);
    expect(seq.next()).to.eql(26);
    return done();
  });
  it('test pipeline rangeSeq and isEven', (done) => {
    const pipedSeq = pipeSeq(sequence.rangeSeq, 0, 1).pipeline(pipe.isEven).invoke();
    const seq = generator(pipedSeq);
    expect(seq.next().status).to.eql(true);
    expect(seq.next().status).to.eql(false);
    expect(seq.next().status).to.eql(true);
    expect(seq.next().status).to.eql(false);
    return done();
  });
});