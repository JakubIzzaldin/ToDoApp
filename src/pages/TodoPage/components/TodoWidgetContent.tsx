import {Box, Checkbox, HStack, Icon, IconButton, Spacer, useDisclosure} from '@chakra-ui/react';
import {AppText} from '../../../components/AppText/AppText';
import {staticColors} from '../../../constants/colors';

import React, {ChangeEvent} from 'react';
import {AppPopover} from '../../../components/AppPopover/AppPopover';
import {BsThreeDotsVertical} from 'react-icons/bs';
import {useGetTodoPopoverMap} from '../hooks/useGetTodoPopoverMap';
import {TodoOptionsButton} from './TodoOptionsButton';
import {sizes} from '../../../constants/sizes';

type AppWidgetContentProps = {
  text: string;

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
}: AppWidgetContentProps) => {
  const {onOpen} = useDisclosure();
  const popoversButtonsParamMap = useGetTodoPopoverMap('widget', onOpen);
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
        {popoversButtonsParamMap.map((item) => (
          <TodoOptionsButton
            {...item}
            key={item.text}
            onClick={() => {
              item.onAction(cardId, todoId);
            }}
          />
        ))}
      </AppPopover>
    </HStack>
  );
};
