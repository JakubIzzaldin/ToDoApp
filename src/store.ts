import {configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import todoReducer from './pages/TodoPage/Slice';

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  }, // place for your reducer
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(), // place for your middleware if you want
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
