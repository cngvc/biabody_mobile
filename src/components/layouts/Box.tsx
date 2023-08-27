import styled from 'styled-components/native';
import {
  borders,
  color,
  layout,
  space,
  grid,
  flexbox,
  position,
  BordersProps,
  ColorProps,
  SpaceProps,
  LayoutProps,
  GridProps,
  FlexboxProps,
  PositionProps,
} from 'styled-system';

export interface BoxProps
  extends BordersProps,
    ColorProps,
    SpaceProps,
    GridProps,
    LayoutProps,
    FlexboxProps,
    PositionProps {}

export const Box = styled.View<BoxProps>`
  ${color}
  ${space}
  ${layout}
  ${borders}
  ${grid}
  ${flexbox}
  ${position}
`;

export const FlexBox = styled.View<BoxProps>`
  flex: 1;
  ${color}
  ${space}
  ${layout}
  ${borders}
  ${grid}
  ${flexbox}
  ${position}
`;
