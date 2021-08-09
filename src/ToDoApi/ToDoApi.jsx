import React, { Component } from 'react';

import ToDoEditor from '../ToDoEditor';
import ToDoFilter from '../ToDoFilter';
import ToDoSection from '../ToDoSection';
import ToDoList from '../ToDoList';

const shortid = require('shortid');

export default class TodoApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      filter: '',
    };
  }

  componentDidMount() {
    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);

    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextTodos = this.state.todos;
    const prevTodos = prevState.todos;

    if (nextTodos !== prevTodos) {
      localStorage.setItem('todos', JSON.stringify(nextTodos));
    }
  }

  addTodo = text => {
    const todo = { id: shortid.generate(), text };

    this.setState(prevState => ({ todos: [todo, ...prevState.todos] }));
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getVisibleTodo = () => {
    const { todos, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(({ text }) =>
      text.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { filter } = this.state;

    return (
      <ToDoSection>
        <ToDoEditor onSubmit={this.addTodo} />
        <ToDoFilter value={filter} onChange={this.changeFilter} />
        <ToDoList todos={this.getVisibleTodo()} />
      </ToDoSection>
    );
  }
}
