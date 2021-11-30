/* eslint-disable comma-dangle */
import React, { useEffect, useRef, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import InputTodo from './InputTodo';
import TodosList from './TodosList';
import About from '../pages/About';
import NotMatch from '../pages/NotMatch';
import Navbar from './Navbar';

const TodoContainer = () => {
  const [todoItems, setTodoItems] = useState([]);
  const [pushContent, setPushContent] = useState(false);

  // eslint-disable-next-line prefer-const
  let prevState = useRef(todoItems);

  useEffect(() => {
    if (prevState.current !== todoItems) {
      localStorage.setItem('todoItems', JSON.stringify(todoItems));
      prevState.current = todoItems;
    }
  }, [todoItems]);

  useEffect(() => {
    const temp = localStorage.getItem('todoItems');
    const loadedTodos = JSON.parse(temp);
    if (loadedTodos) {
      setTodoItems(loadedTodos);
    }
  }, []);

  const aboutContentPush = () => {
    setPushContent((prev) => !prev);
  };

  const handleChange = (itemID) => {
    const updatedItems = todoItems.map((item) => {
      if (item.id === itemID) {
        return {
          ...item,
          completed: !item.completed,
        };
      }
      return item;
    });
    setTodoItems(updatedItems);
  };

  const delTodo = (itemId) => {
    const updatedItems = todoItems.filter((item) => item.id !== itemId);
    setTodoItems(updatedItems);
  };

  const addItem = (itemTitle) => {
    const newItem = {
      id: uuidv4(),
      title: itemTitle,
      completed: false,
    };
    const updatedItems = [...todoItems, newItem];
    setTodoItems(updatedItems);
  };

  const updateItem = (itemTitle, itemId) => {
    const updatedItems = todoItems.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          title: itemTitle,
        };
      }
      return item;
    });
    setTodoItems(updatedItems);
  };

  return (
    <>
      <Navbar aboutContentPush={aboutContentPush} />
      <Switch>
        <Route exact path="/">
          <div className="container">
            <div className="inner">
              <Header />
              <InputTodo addItem={addItem} />
              <TodosList
                todos={todoItems}
                handleChangeProps={handleChange}
                delTodoProps={delTodo}
                updateItemProps={updateItem}
              />
            </div>
          </div>
        </Route>
        <Route path="/about">
          <About pushContent={pushContent} />
        </Route>
        <Route path="*">
          <NotMatch />
        </Route>
      </Switch>
    </>
  );
};
export default TodoContainer;
