import React, { Component, Fragment } from 'react';
import { getSequence } from '../utility';

class Sequence extends Component {

  state = {
    sequence: [],
    routes: [{ name: 'Factorial Sequencer', value: '/factorialSeq' },
             { name: 'Fibonacci Sequencer', value: '/fibonacciSeq' },
             { name: 'Partial Sum Sequencer', value: '/partialSumSeq' },
             { name: 'Prime Number Sequencer', value: '/primeSeq' },
             { name: 'Range Sequencer', value: '/rangeSeq' }]
  }

  handleClick = async (e) => {
    const { routes } = this.state;
    const { value } = routes.find( k => k.name === e.target.value );
    const { data } = await getSequence(value);
    this.setState({ sequence: [ ...data ] });
  }

  render() {
    return(
      <div className=''>
        <h1>Sequencers</h1>
        <input type='button' value='Factorial Sequencer' onClick={this.handleClick}/>
        <input type='button' value='Fibonacci Sequencer' onClick={this.handleClick}/>
        <input type='button' value='Partial Sum Sequencer' onClick={this.handleClick}/>
        <input type='button' value='Prime Number Sequencer' onClick={this.handleClick}/>
        <input type='button' value='Range Sequencer' onClick={this.handleClick}/>
        <br/>
        { this.state.sequence.length > 0 && <h2>Sequence</h2> }
        { this.state.sequence.map( (value, index) => <Fragment><span key={index}>{value}</span><span>,</span></Fragment> )}
      </div>
    );
  }
}

export default Sequence;