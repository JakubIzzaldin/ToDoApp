import {
  Button,
  FormControl,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import React, {ChangeEvent, useState} from 'react';
import {AppText} from '../../../components/AppText/AppText';

import {staticColors} from '../../../constants/colors';
import {useAppDispatch} from '../../../store';
import {editCardTitle} from '../Slice';
type CardEditModalProps = {
  onClose: () => void;
  isOpen: boolean;
  cardId: string;
  text: string;
};
export const CardEditTodoModal = ({text, onClose, isOpen, cardId}: CardEditModalProps) => {
  const dispatch = useAppDispatch();

  const [cardTitle, setCardTitle] = useState<string>();
  const handleOnClose = () => {
    onClose();
  };
  const handleTodoName = (event: ChangeEvent<HTMLInputElement>) => {
    setCardTitle(event.target.value);
  };
  const handleSaveChanges = () => {
    dispatch(editCardTitle({cardId, cardTitle: cardTitle || text}));
    onClose();
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit card title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl pb={'10px'}>
              <AppText variant={'bodyXs'}>Card name</AppText>
              <Input placeholder={text} onChange={handleTodoName} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <HStack gap={'4px'}>
              <Button backgroundColor={staticColors.modalButtonColor} onClick={handleOnClose}>
                <AppText variant={'bodyS'}>Cancel</AppText>
              </Button>
              <Button colorScheme="blue" mr={3} onClick={handleSaveChanges}>
                <AppText variant={'bodyS'} color={'white'}>
                  Save
                </AppText>
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
