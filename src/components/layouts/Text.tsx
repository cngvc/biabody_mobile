import styled from 'styled-components/native';
import {
  ColorProps,
  SpaceProps,
  TypographyProps,
  TextStyleProps,
  color,
  space,
  typography,
  textStyle,
} from 'styled-system';

export interface TextProps
  extends TypographyProps,
    ColorProps,
    SpaceProps,
    TextStyleProps {}

export const Text = styled.Text<TextProps>`
  font-family: ${({theme}) => theme.fontFamily.mo400};
  color: ${({theme}) => theme.colors.raisin_black};
  ${typography}
  ${color}
  ${space}
  ${textStyle}
`;
