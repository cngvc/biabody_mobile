import styled from 'styled-components/native';
import {
  border,
  color,
  layout,
  space,
  BorderProps,
  ColorProps,
  SpaceProps,
  LayoutProps,
  fontSize,
  FontSizeProps,
} from 'styled-system';

export interface InputProps
  extends BorderProps,
    ColorProps,
    SpaceProps,
    LayoutProps,
    FontSizeProps {}

export const Input = styled.TextInput<InputProps>`
  width: 100%;
  color: ${({theme}) => theme.colors.raisin_black};
  background-color: ${({theme}) => theme.colors.white};
  font-family: ${({theme}) => theme.fontFamily.mo500};
  ${color}
  ${space}
  ${layout}
  ${border}
  ${fontSize}
`;
