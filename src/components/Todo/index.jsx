import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {removeTodo} from '../features/authenticate'
import AddTodo from './AddToDo';

function ToDo(props) {

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    const removeTodoHandler = id => {
        dispatch(removeTodo(id))
    }

    return (
        <div>
            <AddTodo/>
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>
                <span>{todo.text}</span>
                <button onClick={() => removeTodoHandler(todo.id)}> Delete </button>
              </li>
            ))}
          </ul>
        </div>
      );
}

export default ToDo;