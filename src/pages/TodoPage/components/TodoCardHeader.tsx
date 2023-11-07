import {Box, HStack, Icon, IconButton, Spacer} from '@chakra-ui/react';
import {AppText} from '../../../components/AppText/AppText';
import {useGetTodoPopoverMap} from '../hooks/useGetTodoPopoverMap';
import {BsThreeDotsVertical} from 'react-icons/bs';
import {AppPopover} from '../../../components/AppPopover/AppPopover';
import React from 'react';

import {TodoOptionsButton} from './TodoOptionsButton';
type CardTodoHeaderProps = {
  text: string;
};
export const TodoCardHeader = ({text}: CardTodoHeaderProps) => {
  const popoversButtonsParamMap = useGetTodoPopoverMap('cardHeader');
  return (
    <HStack>
      <AppText variant={'heading4'} fontWeight={'medium'}>
        {text}
      </AppText>
      <Spacer />
      <AppPopover
        anchor={
          <Box>
            <IconButton
              aria-label={'button'}
              backgroundColor={'inherit'}
              color={'black'}
              key={'TodoPopover'}
            >
              <Icon as={BsThreeDotsVertical} />
            </IconButton>
          </Box>
        }
        placement={'bottom-end'}
      >
        {popoversButtonsParamMap.map((item) => (
          <TodoOptionsButton {...item} key={item.text} onClick={() => null} />
        ))}
      </AppPopover>
    </HStack>
  );
};
