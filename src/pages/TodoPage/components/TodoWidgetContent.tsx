import {Box, Checkbox, HStack, Icon, IconButton, Spacer} from '@chakra-ui/react';
import {AppText} from '../../../components/AppText/AppText';
import {staticColors} from '../../../constants/colors';

import React, {ChangeEvent, useState} from 'react';
import {AppPopover} from '../../../components/AppPopover/AppPopover';
import {BsThreeDotsVertical} from 'react-icons/bs';
import {useGetTodoPopoverList} from '../hooks/useGetTodoPopoverList';
import {TodoOptionsButton} from './TodoOptionsButton';
import {sizes} from '../../../constants/sizes';
import {WidgetEditTodoModal} from './WidgetEditTodoModal';
import {WidgetPrioritiesType} from './TodoWidget';

type AppWidgetContentProps = {
  text: string;
  priority: WidgetPrioritiesType;
  onChangeChecked: (isChecked: boolean) => void;
  isChecked: boolean;
  todoId: string;
  cardId: string;
};
export const TodoWidgetContent = ({
  text,
  onChangeChecked,
  isChecked,
  todoId,
  cardId,
  priority,
}: AppWidgetContentProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const popoversButtonsParamList = useGetTodoPopoverList('widget', () => {
    setIsModalOpen(true);
  });
  const onCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChangeChecked(event.target.checked);
  };
  return (
    <HStack gap={'8px'} backgroundColor={'unset'} px={'4px'} width={'100%'} pl={'10px'}>
      <Box border={`1px solid ${staticColors.borderGray}`} borderRadius={sizes.commonBorderRadius}>
        <Checkbox
          colorScheme={'blue'}
          iconColor={'white'}
          isChecked={isChecked}
          onChange={onCheckboxChange}
        />
      </Box>

      <AppText
        overflow={'hidden'}
        whiteSpace={'nowrap'}
        textOverflow={'ellipsis'}
        variant={'heading5'}
      >
        {text}
      </AppText>
      <Spacer />
      <AppPopover
        anchor={
          <span>
            <IconButton
              aria-label={'button'}
              backgroundColor={'inherit'}
              color={'black'}
              key={'widgetPopover'}
            >
              <Icon as={BsThreeDotsVertical} />
            </IconButton>
          </span>
        }
        placement={'bottom-end'}
      >
        {popoversButtonsParamList.map((item) => (
          <TodoOptionsButton
            {...item}
            key={item.text}
            onClick={() => {
              item.onAction(cardId, todoId);
            }}
          />
        ))}
        <WidgetEditTodoModal
          widgetPriority={priority}
          text={text}
          onClose={() => setIsModalOpen(false)}
          isOpen={isModalOpen}
          todoId={todoId}
          cardId={cardId}
        />
      </AppPopover>
    </HStack>
  );
};
