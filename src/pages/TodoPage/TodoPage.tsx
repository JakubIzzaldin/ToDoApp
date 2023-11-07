import {Flex, HStack, Icon, IconButton, Spacer, VStack, Wrap, WrapItem} from '@chakra-ui/react';

import {AppText} from '../../components/AppText/AppText';

import React from 'react';
import {TodoCard} from './components/TodoCard';

import {useAppSelector} from '../../store';

import {getCardsAndTodos} from './helpers/getCardsAndTodos';
import {AddCardButton} from './components/AddCardButton';

import {staticColors} from '../../constants/colors';
import {AiFillSetting} from 'react-icons/ai';
import {MdSort} from 'react-icons/md';

const TodoPage = () => {
  const todosStore = useAppSelector((state) => state.todos);

  const todoCardsList = getCardsAndTodos(todosStore).map(({cardId, todos, cardTitle}) => (
    <WrapItem pb={'10px'} justifyContent={'center'}>
      <TodoCard allTodos={todos} title={cardTitle} key={cardId} cardId={cardId} />
    </WrapItem>
  ));

  return (
    <VStack height={'full'} width={'full'} backgroundColor={staticColors.pageBackgroundColor}>
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
          <Icon as={AiFillSetting} />
        </IconButton>
        <IconButton aria-label={'button'} backgroundColor={'inherit'} color={'black'}>
          <Icon as={MdSort} />
        </IconButton>
      </Flex>
      <HStack>
        <Wrap justify={'center'}>
          {todoCardsList}
          <AddCardButton />
        </Wrap>
      </HStack>
    </VStack>
  );
};

export default TodoPage;
