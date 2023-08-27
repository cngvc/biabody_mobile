import styled from 'styled-components/native';
import {
  borders,
  color,
  layout,
  space,
  flexbox,
  BordersProps,
  ColorProps,
  SpaceProps,
  LayoutProps,
  FlexboxProps,
} from 'styled-system';

export interface ImageProps
  extends BordersProps,
    ColorProps,
    SpaceProps,
    FlexboxProps,
    LayoutProps {}

export const Image = styled.Image<ImageProps>`
  ${color}
  ${space}
  ${layout}
  ${borders}
  ${flexbox}
`;
