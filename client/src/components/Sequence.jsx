import React, { Component, Fragment } from 'react';
import { getSequence } from '../utility';

class Sequence extends Component {

  state = {
    sequence: [],
    activeSequencer: '',
    options: {
      accumulator: false,
      isEven: false,
    },
    nextValue: [],
    count: 0,
    routes: [{ name: 'Factorial Sequencer', value: '/factorialSeq' },
             { name: 'Fibonacci Sequencer', value: '/fibonacciSeq' },
             { name: 'Partial Sum Sequencer', value: '/partialSumSeq' },
             { name: 'Prime Number Sequencer', value: '/primeSeq' },
             { name: 'Range Sequencer', value: '/rangeSeq' }]
  }

  handleClick = async (e) => {
    const { routes, options } = this.state;
    const { name, value } = routes.find( k => k.name === e.target.value );
    const { data } = await getSequence(value, options);
    this.setState({ 
      sequence: [ ...data ],
      activeSequencer: name,
      nextValue: [],
      count: 0,
    });
  }

  handleNextVal = (e) => {
    const { count, sequence, nextValue } = this.state;
    if (count === 10) {
       alert('Series is of only 10 numbers');
       return
    }
    const arr = [ ...nextValue ];
    arr.push(sequence[count]);
    this.setState({ nextValue: arr, count: count + 1 });
  }

  handleAdd = (e) => {
    let options = {
      accumulator: false,
      isEven: false,
    };
    if (e.target.value === 'Add Accumulator') {
      options.accumulator = true;
      alert('Accumulator Added');
    } else if(e.target.value === 'Add isEven Check') {
      options.isEven = true;
      alert('isEven Check Added');
    }
    this.setState({ options });
  }

  render() {
    const { sequence, activeSequencer, nextValue } = this.state;

    return(
      <div className=''>
        <h1>Sequencers</h1>
        <input type='button' value='Factorial Sequencer' onClick={this.handleClick}/>
        <input type='button' value='Fibonacci Sequencer' onClick={this.handleClick}/>
        <input type='button' value='Partial Sum Sequencer' onClick={this.handleClick}/>
        <input type='button' value='Prime Number Sequencer' onClick={this.handleClick}/>
        <input type='button' value='Range Sequencer' onClick={this.handleClick}/>
        <br/>
        <h3>Add Options</h3>
        <input type='button' value='Add Accumulator' onClick={this.handleAdd} />
        <input type='button' value='Add isEven Check' onClick={this.handleAdd} />
     
        { sequence.length > 0 && <div>
          <h3>{activeSequencer} Activated</h3>
            <input type='button' value='Next Value' onClick={this.handleNextVal}/>
          </div> }
        { nextValue.map( (value, index) => <Fragment  key={index}><span>{ value.number ? value.number : value }</span><span>,</span></Fragment> )}
      
      </div>
    );
  }
}

export default Sequence;