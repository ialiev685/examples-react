import React, { Component } from 'react';
import './CounterTwo.css';

class CounterTwo extends Component {
  state = {
    value: this.props.initialValue,
  };

  increment = () => {
    this.setState(prevState => ({ value: prevState.value + 1 }));
  };

  decrement = () => {
    this.setState(prevState => ({ value: prevState.value - 1 }));
  };

  render() {
    const { value } = this.state;
    return (
      <div className="counter">
        <p className="counter__value">значение: {value}</p>
        <div className="counter__controls">
          <button
            className="counter__button counter__button--increment"
            type="button"
            onClick={this.increment}
          >
            прибавить +
          </button>
          <button
            className="counter__button counter__button--decrement"
            type="button"
            onClick={this.decrement}
          >
            убавить -
          </button>
        </div>
      </div>
    );
  }
}
export default CounterTwo;
