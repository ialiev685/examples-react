import React, { Component } from 'react';

export default class ToDoEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      massage: '',
    };
  }

  handleChange = e => {
    this.setState({
      massage: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.massage);

    this.setState({ massage: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea
          value={this.state.massage}
          onChange={this.handleChange}
        ></textarea>
        <button type="submit">Сохранить</button>
      </form>
    );
  }
}
