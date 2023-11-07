import {TodoWidget} from '../components/TodoWidget';
import {TodoCardProps} from '../components/TodoCard';

export const getAllTodosWidgetElements = (allTodos: TodoCardProps['allTodos'], cardId: string) =>
  allTodos.length
    ? allTodos.map((item) => <TodoWidget {...item} key={item.todoId} cardId={cardId} />)
    : null;

export const getTodosWidgetElements = (
  allTodos: TodoCardProps['allTodos'],
  cardId: string,
  type: 'all' | 'todo' | 'done'
) => {
  const todosWidgetMap = {
    ['all']: allTodos.map((item) => <TodoWidget {...item} key={item.todoId} cardId={cardId} />),

    ['todo']: allTodos
      .filter((item) => !item.isDone)
      .map((item) => <TodoWidget {...item} key={item.todoId} cardId={cardId} />),

    ['done']: allTodos
      .filter((item) => item.isDone)
      .map((item) => <TodoWidget {...item} key={item.todoId} cardId={cardId} />),
  };
  return todosWidgetMap[type];
};
