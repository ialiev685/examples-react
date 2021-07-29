import React, { Component } from 'react';

const Button = () => {
  return <button onClick={event => console.log(event)}>Click me</button>;
};

//onClick, onChange, onSubmit, onMouseEnter

class Counter extends Component {
  static defaultProps = {
    step: 1,
  };

  onIncrement(event) {
    console.log(this.props);
  }
  onDecrement(event) {
    console.log(this.props);
  }

  render() {
    const { step } = this.props;
    return (
      <div>
        <span>0</span>
        <button type="button" onClick={this.nIncrement}>
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
