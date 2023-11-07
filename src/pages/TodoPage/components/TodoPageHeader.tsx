import {AppText} from '../../../components/AppText/AppText';
import {Box, Flex, Icon, IconButton, Spacer} from '@chakra-ui/react';
import {AiFillSetting} from 'react-icons/ai';
import {MdSort} from 'react-icons/md';
import React, {useState} from 'react';
import {useGetTodoPopoverList} from '../hooks/useGetTodoPopoverList';

import {TodoOptionsButton} from './TodoOptionsButton';
import {AppPopover} from '../../../components/AppPopover/AppPopover';

export const TodoPageHeader = () => {
  const pageHeaderParamsList = useGetTodoPopoverList('pageHeaderSettings');
  const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>();
  return (
    <Flex
      width={'100%'}
      height={'48px'}
      backgroundColor={'white'}
      px={'10px'}
      alignItems={'center'}
    >
      <AppText variant={'heading4'} fontWeight={'medium'}>
        Todo list
      </AppText>
      <Spacer />
      <IconButton aria-label={'button'} backgroundColor={'inherit'} color={'black'}>
        <Icon as={MdSort} />
      </IconButton>
      <AppPopover
        onClose={() => {
          setIsPopoverOpen(false);
        }}
        isOpen={isPopoverOpen}
        anchor={
          <Box>
            <IconButton
              aria-label={'button'}
              backgroundColor={'inherit'}
              color={'black'}
              key={'TodoPopover'}
              onClick={() => {
                setIsPopoverOpen(true);
              }}
            >
              <Icon as={AiFillSetting} />
            </IconButton>
          </Box>
        }
        placement={'bottom-end'}
      >
        {pageHeaderParamsList.map((item) => (
          <TodoOptionsButton
            {...item}
            key={item.text}
            onClick={() => {
              item.onAction('cardId', '');
              setIsPopoverOpen(false);
            }}
          />
        ))}
      </AppPopover>
    </Flex>
  );
};
