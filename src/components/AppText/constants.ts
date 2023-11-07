import {TextColor, TextVariant, TextVariantStyleMapValue} from './types';
import {staticColors} from '../../constants/colors';

export const textColorMap: Record<TextColor, string> = {
  dark: staticColors.textDark,
  danger: staticColors.textDanger,
  white: staticColors.textWhite,
  active: staticColors.textActive,
  neutral: staticColors.textNeutral,
};

export const textVariantStyleMap: Record<TextVariant, TextVariantStyleMapValue> = {
  bodyXs: {
    fontSize: '12px',
    lineHeight: '16px',
  },
  bodyS: {
    fontSize: '14px',
    lineHeight: '20px',
  },
  body: {
    fontSize: '12px',
    lineHeight: '16px',
  },
  heading4: {
    fontSize: '16px',
    lineHeight: '24px',
  },
  heading5: {
    fontSize: '12px',
    lineHeight: '16px',
  },
};
