import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaPlusCircle } from 'react-icons/fa';

const InputTodo = ({ addItem }) => {
  const [title, setTitle] = useState('');
  const inputChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (title.trim().length === 0) {
      // eslint-disable-next-line no-alert
      alert('Please write item');
      return;
    }
    addItem(title.trim());
    setTitle('');
  };

  return (
    <form onSubmit={submitHandler} className="form-container">
      <input
        type="text"
        placeholder="Add Todo..."
        onChange={inputChangeHandler}
        name="title"
        value={title}
        className="input-text"
      />
      <button type="submit" className="input-submit">
        <FaPlusCircle />
      </button>
    </form>
  );
};

InputTodo.propTypes = {
  addItem: PropTypes.func.isRequired,
};

export default InputTodo;
