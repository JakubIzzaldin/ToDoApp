import {TextColor, TextFontWeightEnum, TextVariant} from '../types';
import {textColorMap, textVariantStyleMap} from '../constants';

type TextStyleParams = {
  variant: TextVariant;
  color: TextColor;
  underline?: boolean;
  colorOverride?: string;
  fontWeight: TextFontWeightEnum;
};

export const getTextStyles = ({
  variant,
  color: passedColor,
  underline,
  colorOverride,
  fontWeight,
}: TextStyleParams) => {
  const color = textColorMap[passedColor];
  const resultColor = colorOverride ?? color;

  return {
    color: resultColor,
    margin: 0,
    ...textVariantStyleMap[variant],
    fontWeight,
    textDecoration: underline ? 'underline' : undefined,
  };
};
