import React from 'react';
import ToDoItem from '../ToDoItem';

const ToDoList = ({ todos }) => {
  return (
    <ul>
      {todos.map(({ id, text }) => (
        <ToDoItem key={id} value={text} />
      ))}
    </ul>
  );
};

export default ToDoList;
