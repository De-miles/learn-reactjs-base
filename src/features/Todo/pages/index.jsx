import React from 'react';
import PropTypes from 'prop-types';
import TodoList from '../components/TodoList';
import { useState } from 'react';

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const initTodoList = [
    {
      id: 1,
      title: 'Eat',
      status: 'new',
    },
    {
      id: 2,
      title: 'Code',
      status: 'completed',
    },
    {
      id: 3,
      title: 'Sleep',
      status: 'new',
    },
  ];

  const [todoList, setTodoList] = useState(initTodoList);

  const handleTodoClick = (todo, idx) => {
    const newTodoList = [...todoList];

    const newTodo = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
    };

    newTodoList[idx] = newTodo;

    setTodoList(newTodoList);
  };

  return (
    <div>
      <h3>Todo List</h3>
      <TodoList todoList={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default TodoFeature;
