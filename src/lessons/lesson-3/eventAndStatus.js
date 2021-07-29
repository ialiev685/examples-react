import React, { Component } from 'react';

const Button = () => {
  return <button onClick={event => console.log(event)}>Click me</button>;
};

//onClick, onChange, onSubmit, onMouseEnter

class Counter extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
  };

//   constructor(props){
//     super(props);
//     this.state={ value: this.props.initialValue}
//   this.onIncrement=this.onIncrement.bind(this)
//   this.onDecrement=this.onDecrement.bind(this)
// }

//   onIncrement(event) {
//     console.log(this.props);
//   }
//   onDecrement(event) {
//     console.log(this.props);
  // }

  state={ 
    value: this.props.initialValue
  }

  

onIncrement=event=>{
  console.log(this.props);
let num = this.state.value+1

  this.setState({value: num})
}

onDecrement=event=>{
  console.log(this.props);
  let num = this.state.value-1;

  this.setState({value: num})
}

  render() {
    const { step } = this.props;

    return (
      <div>
        <span>{this.state.value}</span>
        <button type="button" onClick={this.onIncrement}>
          Increment by {step}
        </button>
        <button type="button" onClick={this.onDecrement}>
          Decrement by {step}
        </button>
      </div>
    );
  }
}

export { Button, Counter };
