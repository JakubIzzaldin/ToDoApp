import {createSlice, nanoid, PayloadAction} from '@reduxjs/toolkit';
import {WidgetPrioritiesType} from './components/TodoWidget';

export type TodoType = {
  text: string;
  priority: WidgetPrioritiesType;
  isDone: boolean;
};
export type TodosType = {[key: string]: TodoType};

export type TodosSliceType = {
  [key: string]: {todos: TodosType; title: string};
};

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
      state[action.payload.cardId] = {
        todos: {},
        title: action.payload.cardTitle,
      };
    },
    deleteCard: (state, action: PayloadAction<{cardId: string}>) => {
      delete state[action.payload.cardId];
    },
    deleteCardList: (state, action: PayloadAction<{cardId: string}>) => {
      state[action.payload.cardId].todos = {};
    },
    editCardTitle: (state, action: PayloadAction<{cardId: string; cardTitle: string}>) => {
      state[action.payload.cardId].title = action.payload.cardTitle;
    },
    clearAllDoneTask: (state) => {
      const cardKeys = Object.keys(state).map((cardKey) => cardKey);

      cardKeys.forEach((cardId) => {
        Object.keys(state[cardId].todos).forEach((todoId) => {
          if (state[cardId].todos[todoId].isDone) delete state[cardId].todos[todoId];
        });
      });
    },
    clearAllCards: (state) => {
      const cardKeys = Object.keys(state).map((cardKey) => cardKey);
      cardKeys.forEach((cardId) => {
        delete state[cardId];
      });
    },

    setAllTodosToTrue: (state, action: PayloadAction<{cardId: string}>) => {
      Object.keys(state[action.payload.cardId].todos).forEach((value) => {
        state[action.payload.cardId].todos[value].isDone = true;
      });
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
          isDone?: boolean;
        } & Omit<TodoType, 'isDone'>
      >
    ) => {
      const resultIsDone =
        action.payload.isDone !== undefined
          ? action.payload.isDone
          : state[action.payload.cardId].todos[action.payload.todoId].isDone;

      state[action.payload.cardId].todos[action.payload.todoId].text = action.payload.text;
      state[action.payload.cardId].todos[action.payload.todoId].priority = action.payload.priority;
      state[action.payload.cardId].todos[action.payload.todoId].isDone = resultIsDone;
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  updateTodo,
  addCard,
  deleteCard,
  setAllTodosToTrue,
  editCardTitle,
  clearAllDoneTask,
  clearAllCards,
  deleteCardList,
} = todosSlice.actions;
export default todosSlice.reducer;
