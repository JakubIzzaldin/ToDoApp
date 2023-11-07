import {PopoverButtonProps} from '../components/TodoOptionsButton';
import {MdEdit} from 'react-icons/md';
import {AiFillDelete, AiOutlineUnorderedList} from 'react-icons/ai';
import {BsCheck2} from 'react-icons/bs';

import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';
import {
  clearAllCards,
  clearAllDoneTask,
  deleteCard,
  deleteCardList,
  deleteTodo,
  setAllTodosToTrue,
} from '../Slice';

type TodoPopoverTypes = 'widget' | 'cardHeader' | 'pageHeaderSettings';
export const useGetTodoPopoverList = (contentType: TodoPopoverTypes, onEditOpen?: () => void) => {
  const dispatch = useDispatch();

  const {t} = useTranslation();

  const handleDelete = (cardId: string, todoId: string) => {
    dispatch(deleteTodo({cardId, todoId}));
  };
  const handleDeleteCard = (cardId: string) => {
    dispatch(deleteCard({cardId}));
  };
  const handleDeleteCardList = (cardId: string) => {
    dispatch(deleteCardList({cardId}));
  };
  const handleMarkAllTask = (cardId: string) => {
    dispatch(setAllTodosToTrue({cardId}));
  };
  const handleClearDoneTask = () => {
    dispatch(clearAllDoneTask());
  };
  const handleClearAllCards = () => {
    dispatch(clearAllCards());
  };
  const handleEdit = () => {
    onEditOpen?.();
  };
  const popoverMap: Record<TodoPopoverTypes, PopoverButtonProps[]> = {
    widget: [
      {
        text: t('popover.edit'),
        id: 1,
        iconType: MdEdit,
        color: 'dark',
        onAction: handleEdit,
      },
      {
        id: 2,
        text: t('popover.delete'),
        iconType: AiFillDelete,
        color: 'danger',
        onAction: handleDelete,
      },
    ],
    cardHeader: [
      {
        id: 3,
        text: 'Mark all done',
        iconType: BsCheck2,
        color: 'dark',
        onAction: handleMarkAllTask,
      },
      {
        text: 'Edit',
        id: 4,
        iconType: MdEdit,
        color: 'dark',
        onAction: handleEdit,
      },
      {
        id: 5,
        text: 'Delete list',
        iconType: AiFillDelete,
        color: 'danger',
        onAction: handleDeleteCardList,
      },
      {
        id: 5,
        text: 'Delete card',
        iconType: AiFillDelete,
        color: 'danger',
        onAction: handleDeleteCard,
      },
    ],
    pageHeaderSettings: [
      {
        id: 6,
        text: 'Clear all',
        iconType: AiOutlineUnorderedList,
        color: 'dark',
        onAction: handleClearAllCards,
      },
      {
        text: 'Clear all done task',
        id: 7,
        iconType: BsCheck2,
        color: 'dark',
        onAction: handleClearDoneTask,
      },
    ],
  };

  return popoverMap[contentType];
};
