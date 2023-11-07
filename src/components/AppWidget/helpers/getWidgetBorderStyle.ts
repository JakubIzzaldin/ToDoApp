import {staticColors} from '../../../constants/colors';
import {BorderProps} from '@chakra-ui/styled-system';
import {ColorProps} from '@chakra-ui/react';
import {sizes} from '../../../constants/sizes';

export const getWidgetBorderStyle = (leftIndicatorColor?: ColorProps['color']) => {
  const border: BorderProps = {
    borderWidth: '1px',
    borderRadius: sizes.commonBorderRadius,
    borderColor: staticColors.borderGray,
    borderStyle: 'solid',
    ...(leftIndicatorColor ? {borderLeft: `4px solid ${leftIndicatorColor}`} : {}),
  };
  return border;
};
