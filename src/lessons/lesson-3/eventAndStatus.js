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

  state = {
    value: this.props.initialValue,
  };

  onIncrement = event => {
    console.log(this.props);

    this.setState((state, props) => ({ value: state.value + props.step }));
  };

  onDecrement = event => {
    console.log(this.props);

    this.setState((state, props) => ({ value: state.value - props.step }));
  };

  render() {
    const { step } = this.props;

    return (
      <div>
        <button type="button" onClick={this.onIncrement}>
          Increment by {step}
        </button>
        <span>{this.state.value}</span>
        <button type="button" onClick={this.onDecrement}>
          Decrement by {step}
        </button>
        <DoubleButton label="max" changeValue={this.onIncrement} />
      </div>
    );
  }
}

const DoubleButton = ({ label, changeValue }) => (
  <button type="button" onClick={changeValue}>
    {label}
  </button>
);

export { Button, Counter };
