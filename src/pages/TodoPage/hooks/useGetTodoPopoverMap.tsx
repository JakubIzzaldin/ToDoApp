import {PopoverButtonProps} from '../components/TodoOptionsButton';
import {MdEdit} from 'react-icons/md';
import {AiFillDelete} from 'react-icons/ai';
import {BsCheck2} from 'react-icons/bs';

import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';
import {deleteTodo} from '../Slice';

type TodoPopoverTypes = 'widget' | 'cardHeader';
export const useGetTodoPopoverMap = (contentType: TodoPopoverTypes, onEditOpen?: () => void) => {
  const dispatch = useDispatch();
  const {t} = useTranslation();

  const handleDelete = (cardId: string, todoId: string) => {
    dispatch(deleteTodo({cardId, todoId}));
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
        text: 'Mark all task',
        iconType: BsCheck2,
        color: 'dark',
        onAction: handleDelete,
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
        onAction: handleDelete,
      },
    ],
  };

  return popoverMap[contentType];
};
