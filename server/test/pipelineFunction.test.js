const sequence = require('../sequence');
const generator = require('../generator');
const pipeSeq = require('../pipeline');
const pipe = require('../pipedFunctions');
const expect = require('chai').expect;

const pipelineFunctionTest = () => {
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
}

module.exports = pipelineFunctionTest;