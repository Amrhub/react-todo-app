import { PropTypes } from 'prop-types';
import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import styles from './TodoItem.module.scss';

const TodoItem = ({
  todo,
  handleChangeProps,
  delTodoProps,
  updateItemProps,
}) => {
  const [editing, setEditing] = useState(false);
  let viewMode = {};
  let editMode = {};

  if (editing) {
    viewMode = { display: 'none' };
  } else {
    editMode = { display: 'none' };
  }
  const handleEditing = () => {
    setEditing(true);
  };

  const editingDone = (e) => {
    if (e.key === 'Enter') {
      if (e.target.value.trim() === '') {
        delTodoProps(todo.id);
      } else {
        setEditing(false);
      }
    }
  };

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleChangeProps(todo.id)}
          className={styles.checkbox}
        />
        <span className={styles['item-title']}>{todo.title}</span>
        <button type="button" onClick={() => delTodoProps(todo.id)}>
          <FaTrash className={styles['delete-icon']} />
        </button>
      </div>
      <input
        type="text"
        className={styles.textInput}
        style={editMode}
        value={todo.title}
        onChange={(e) => {
          updateItemProps(e.target.value, todo.id);
        }}
        onKeyDown={editingDone}
      />
    </li>
  );
};

TodoItem.propTypes = {
  delTodoProps: PropTypes.func.isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  updateItemProps: PropTypes.func.isRequired,
};

export default TodoItem;
