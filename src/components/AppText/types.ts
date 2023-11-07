import {ReactNode} from 'react';

export type TextVariant = 'bodyXs' | 'bodyS' | 'body' | 'heading4' | 'heading5';

export type TextColor = 'dark' | 'white' | 'danger' | 'active' | 'neutral';

export type AppTextProps = {
  children: ReactNode;
  variant?: TextVariant;
  color?: TextColor;
  underline?: boolean;
  colorOverride?: string;
  fontWeight?: TextFontWeightEnum;
};

export type TextFontWeightEnum = 'bold' | 'medium' | 'regular';

export type TextVariantStyleMapValue = {
  fontSize: string;
  lineHeight: string;
};
