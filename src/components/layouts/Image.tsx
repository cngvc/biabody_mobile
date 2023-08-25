import styled from 'styled-components/native';
import {
  border,
  color,
  layout,
  space,
  flexbox,
  BorderProps,
  ColorProps,
  SpaceProps,
  LayoutProps,
  FlexboxProps,
} from 'styled-system';

export interface ImageProps
  extends BorderProps,
    ColorProps,
    SpaceProps,
    FlexboxProps,
    LayoutProps {}

export const Image = styled.Image<ImageProps>`
  ${color}
  ${space}
  ${layout}
  ${border}
  ${flexbox}
`;
