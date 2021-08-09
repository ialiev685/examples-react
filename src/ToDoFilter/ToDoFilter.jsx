import React from 'react';

const ToDoFilter = ({ value, onChange }) => {
  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default ToDoFilter;
