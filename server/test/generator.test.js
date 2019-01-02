const sequence = require('../sequence');
const generator = require('../generator');
const expect = require('chai').expect;

const sudoGeneratorTest = () => {
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
}

module.exports = sudoGeneratorTest;