import {createSlice, nanoid, PayloadAction} from '@reduxjs/toolkit';
import {WidgetPrioritiesType} from './components/TodoWidget';

export type TodoType = {
  text: string;
  priority: WidgetPrioritiesType;
  isDone: boolean;
};
export type TodosType = {[key: string]: TodoType};

export type TodosSliceType = {[key: string]: {todos: TodosType; title: string}};

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    first: {
      todos: {
        ukazka1: {text: 'Ukoly do skoly', priority: 'medium', isDone: true},
        ukazka2: {text: 'Nakup', priority: 'low', isDone: false},
        ukazka3: {text: 'Ajina', priority: 'high', isDone: true},
        ukazka4: {text: 'Plavani', priority: 'none', isDone: false},
      },
      title: 'Anetka todo',
    },
  } as TodosSliceType,
  reducers: {
    addCard: (state, action: PayloadAction<{cardId: string; cardTitle: string}>) => {
      state[action.payload.cardId] = {todos: {}, title: action.payload.cardTitle};
    },
    deleteCard: (state, action: PayloadAction<{cardId: string}>) => {
      delete state[action.payload.cardId];
    },

    renameCardTitle: (state, action: PayloadAction<{cardId: string; cardTitle: string}>) => {
      state[action.payload.cardId].title = action.payload.cardTitle;
    },
    addTodo: (
      state,
      action: PayloadAction<
        {
          cardId: string;
        } & TodoType
      >
    ) => {
      state[action.payload.cardId].todos = {
        ...state[action.payload.cardId].todos,
        [nanoid()]: {
          text: action.payload.text,
          priority: action.payload.priority,
          isDone: action.payload.isDone,
        },
      };
    },
    deleteTodo: (
      state,
      action: PayloadAction<{
        cardId: string;
        todoId: string;
      }>
    ) => {
      delete state[action.payload.cardId].todos[action.payload.todoId];
    },
    updateTodo: (
      state,
      action: PayloadAction<
        {
          todoId: string;
          cardId: string;
        } & TodoType
      >
    ) => {
      state[action.payload.cardId].todos[action.payload.todoId].text = action.payload.text;
      state[action.payload.cardId].todos[action.payload.todoId].priority = action.payload.priority;
    },
  },
});

export const {addTodo, deleteTodo, updateTodo, addCard, deleteCard} = todosSlice.actions;
export default todosSlice.reducer;
