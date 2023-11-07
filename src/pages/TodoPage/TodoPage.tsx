import {Box, Wrap, WrapItem} from '@chakra-ui/react';

import React from 'react';
import {TodoCard} from './components/TodoCard';

import {useAppSelector} from '../../store';

import {getCardsAndTodos} from './helpers/getCardsAndTodos';
import {AddCardButton} from './components/AddCardButton';

import {staticColors} from '../../constants/colors';

import {TodoPageHeader} from './components/TodoPageHeader';

const TodoPage = () => {
  const todosStore = useAppSelector((state) => state.todos);

  const todoCardsList = getCardsAndTodos(todosStore).map(({cardId, todos, cardTitle}) => (
    <WrapItem pb={'10px'} justifyContent={'center'} key={cardId}>
      <TodoCard allTodos={todos} title={cardTitle} cardId={cardId} />
    </WrapItem>
  ));

  return (
    <Box height={'full'} width={'full'} backgroundColor={staticColors.pageBackgroundColor}>
      <TodoPageHeader />

      <Wrap minHeight={'300px'}>
        {todoCardsList}
        <AddCardButton />
      </Wrap>
    </Box>
  );
};

export default TodoPage;
