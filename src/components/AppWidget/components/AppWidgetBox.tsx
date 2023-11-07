import {BackgroundProps, ColorProps, Flex} from '@chakra-ui/react';
import {ReactNode} from 'react';
import {getWidgetBorderStyle} from '../helpers/getWidgetBorderStyle';
import {sizes} from '../../../constants/sizes';

type AppWidgetBoxProps = {
  children: ReactNode;
  leftIndicatorColor?: ColorProps['color'];
  backgroundColor?: BackgroundProps['backgroundColor'];
};
export const AppWidgetBox = ({
  children,
  backgroundColor = 'white',
  leftIndicatorColor,
}: AppWidgetBoxProps) => {
  const borderStyle = getWidgetBorderStyle(leftIndicatorColor);

  return (
    <Flex
      width={sizes.widgetWidth}
      height={'52px'}
      {...borderStyle}
      alignContent={'center'}
      backgroundColor={backgroundColor}
    >
      {children}
    </Flex>
  );
};
