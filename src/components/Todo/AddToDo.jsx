import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/authenticate';

export default function AddTodo() {
  const [text, setText] = useState('');
  // initial the dispatch here
  const dispatch = useDispatch();

  const addTodoHandler = (event) => {
    event.preventDefault();
    // update the state here using addTodo action
    // action only receive one parameter, which is payload
    dispatch(addTodo(text));
    setText('');
  };

  return (
    <form onSubmit={addTodoHandler}>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button>Add todo</button>
    </form>
  );
}