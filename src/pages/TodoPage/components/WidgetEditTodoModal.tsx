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
import {PriorityPopover} from './PriorityPopover';
import {WidgetPrioritiesType} from './TodoWidget';
import {priorityTextsMap} from '../constants';
import {staticColors} from '../../../constants/colors';
import {useAppDispatch} from '../../../store';
import {updateTodo} from '../Slice';
type EditTodoModalProps = {
  onClose: () => void;
  isOpen: boolean;
  todoId: string;
  cardId: string;
  text: string;
  widgetPriority: WidgetPrioritiesType;
};
export const WidgetEditTodoModal = ({
  text,
  onClose,
  isOpen,
  todoId,
  cardId,
  widgetPriority,
}: EditTodoModalProps) => {
  const dispatch = useAppDispatch();
  const [priority, setPriority] = useState<WidgetPrioritiesType>(priorityTextsMap[widgetPriority]);
  const [todoName, setTodoName] = useState<string>();
  const handleOnClose = () => {
    onClose();
  };
  const handleTodoName = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoName(event.target.value);
  };
  const handleSaveChanges = () => {
    dispatch(updateTodo({todoId, cardId, text: todoName || text, priority}));
    onClose();
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl pb={'10px'}>
              <AppText variant={'bodyXs'}>Todo name</AppText>
              <Input placeholder={text} onChange={handleTodoName} />
            </FormControl>

            <AppText variant={'bodyXs'}>Priority</AppText>
            <PriorityPopover
              onClick={(priority) => {
                setPriority(priority);
              }}
              priority={priority}
            />
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
