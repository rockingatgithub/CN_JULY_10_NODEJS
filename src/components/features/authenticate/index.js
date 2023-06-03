import { createSlice } from '@reduxjs/toolkit';
import { v1 as uuidv1 } from 'uuid';

export const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: uuidv1(),
                text: action.payload,
            };

            return [...state, todo];
        },
        removeTodo: (state, action) => {

            const newList = state.filter((todo) => todo.id !== action.payload )

            return [...newList]

        }
    }
});

// this is for dispatch
export const { addTodo, removeTodo } = todoSlice.actions;

// this is for configureStore
export default todoSlice.reducer;