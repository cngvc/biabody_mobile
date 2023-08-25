import styled from 'styled-components/native';
import {
  border,
  color,
  layout,
  space,
  grid,
  flexbox,
  position,
  BorderProps,
  ColorProps,
  SpaceProps,
  LayoutProps,
  GridProps,
  FlexboxProps,
  PositionProps,
} from 'styled-system';

export interface BoxProps
  extends BorderProps,
    ColorProps,
    SpaceProps,
    GridProps,
    LayoutProps,
    FlexboxProps,
    PositionProps {}

export const ImageBackgroundBox = styled.ImageBackground<BoxProps>`
  ${color}
  ${space}
  ${layout}
  ${border}
  ${grid}
  ${flexbox}
  ${position}
`;

export const FlexImageBackgroundBox = styled.ImageBackground<BoxProps>`
  flex: 1;
  ${color}
  ${space}
  ${layout}
  ${border}
  ${grid}
  ${flexbox}
  ${position}
`;
