import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk'
import toDoReducer from '../features/authenticate';
import interviewReducer from '../features/interview';

export default configureStore({
  reducer: {
      todos: toDoReducer,
      interviews: interviewReducer
  },
  devTools: true,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
      thunk: true
  })
});