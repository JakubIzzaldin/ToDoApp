import {AppWidgetBox} from '../../../components/AppWidget/components/AppWidgetBox';
import {TodoWidgetContent} from './TodoWidgetContent';
import React, {useState} from 'react';
import {priorityColorsMap} from '../constants';
import {TodoType} from '../Slice';
export type WidgetPrioritiesType = 'high' | 'medium' | 'low' | 'none';
type TodoWidgetProps = {
  todoId: string;
  cardId: string;
} & TodoType;

export const TodoWidget = ({priority, isDone, ...props}: TodoWidgetProps) => {
  const [isWidgetChecked, setIsWidgetChecked] = useState<boolean>(isDone);
  const priorityColor = priorityColorsMap[priority];
  const handleCheckboxChange = (isChecked: boolean) => {
    setIsWidgetChecked(isChecked);
  };

  return (
    <AppWidgetBox leftIndicatorColor={priorityColor}>
      <TodoWidgetContent
        onChangeChecked={handleCheckboxChange}
        isChecked={isWidgetChecked}
        {...props}
      />
    </AppWidgetBox>
  );
};
