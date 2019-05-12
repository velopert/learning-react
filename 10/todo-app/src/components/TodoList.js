import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ onToggle, onRemove, todos }) => {
  const list = todos.map(todo => (
    <TodoListItem
      todo={todo}
      key={todo.id}
      onRemove={onRemove}
      onToggle={onToggle}
    />
  ));
  return <div className="TodoList">{list}</div>;
};

export default TodoList;
