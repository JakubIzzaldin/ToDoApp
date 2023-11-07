import {Flex} from '@chakra-ui/react';
import {AppText} from '../../../components/AppText/AppText';
import {sizes} from '../../../constants/sizes';
import {staticColors} from '../../../constants/colors';
import {useDispatch} from 'react-redux';
import {addCard} from '../Slice';
import {nanoid} from '@reduxjs/toolkit';

export const AddCardButton = () => {
  const dispatch = useDispatch();
  const handleAddCard = () => {
    dispatch(addCard({cardId: nanoid(), cardTitle: 'No name section'}));
  };
  return (
    <Flex
      alignSelf={'start'}
      backgroundColor={staticColors.addCardBackground}
      minWidth={sizes.addCardButtonWidth}
      height={sizes.addCardButtonHeight}
      justifyContent={'center'}
      alignItems={'center'}
      onClick={handleAddCard}
      cursor={'pointer'}
      borderRadius={sizes.commonBorderRadius}
    >
      <AppText variant={'bodyS'}>+ Add section</AppText>
    </Flex>
  );
};
