import {AppWidgetBox} from '../../../components/AppWidget/components/AppWidgetBox';
import {TodoWidgetContent} from './TodoWidgetContent';
import React from 'react';
import {priorityColorsMap} from '../constants';
import {TodoType, updateTodo} from '../Slice';
import {useDispatch} from 'react-redux';
export type WidgetPrioritiesType = 'high' | 'medium' | 'low' | 'none';
type TodoWidgetProps = {
  todoId: string;
  cardId: string;
} & TodoType;

export const TodoWidget = ({priority, isDone, cardId, todoId, text}: TodoWidgetProps) => {
  const dispatch = useDispatch();
  const priorityColor = priorityColorsMap[priority];
  const handleCheckboxChange = () => {
    dispatch(updateTodo({cardId, todoId, text, isDone: !isDone, priority}));
  };

  return (
    <AppWidgetBox leftIndicatorColor={priorityColor}>
      <TodoWidgetContent
        onChangeChecked={handleCheckboxChange}
        isChecked={isDone}
        cardId={cardId}
        todoId={todoId}
        text={text}
        priority={priority}
      />
    </AppWidgetBox>
  );
};
