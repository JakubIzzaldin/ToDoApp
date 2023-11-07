import {TodosSliceType} from '../Slice';

export const getCardsAndTodos = (todos: TodosSliceType) => {
  const cardKeys = Object.keys(todos);

  return cardKeys.map((cardId) => {
    const todoKeys = Object.keys(todos[cardId].todos);

    const todosResult = todoKeys.map((todoId) => ({
      ...todos[cardId].todos[todoId],
      todoId,
      cardId,
    }));

    return {cardTitle: todos[cardId].title, todos: todosResult, cardId};
  });
};
