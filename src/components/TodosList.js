import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = ({
  todos,
  handleChangeProps,
  delTodoProps,
  updateItemProps,
}) => (
  <ul className="todo--list">
    {todos.map((todoItem) => (
      <TodoItem
        key={todoItem.id}
        todo={todoItem}
        handleChangeProps={handleChangeProps}
        delTodoProps={delTodoProps}
        updateItemProps={updateItemProps}
      />
    ))}
  </ul>
);
TodosList.propTypes = {
  todos: PropTypes.arrayOf(Object).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  delTodoProps: PropTypes.func.isRequired,
  updateItemProps: PropTypes.func.isRequired,
};

export default TodosList;
