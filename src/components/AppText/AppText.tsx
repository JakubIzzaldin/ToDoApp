import {Text} from '@chakra-ui/react';
import {AppTextProps} from './types';
import {getTextStyles} from './helpers/getTextStyles';
import {TextProps} from '@chakra-ui/layout/dist/text';

export const AppText = ({
  children,
  variant = 'body',
  color = 'dark',
  fontWeight = 'regular',
  underline,
  colorOverride,
  ...props
}: AppTextProps & TextProps) => {
  const resultTextStyle = getTextStyles({color, variant, colorOverride, fontWeight, underline});
  return (
    <Text style={resultTextStyle} backgroundColor={'unset'} {...props}>
      {children}
    </Text>
  );
};
