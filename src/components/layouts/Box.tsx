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

export const Box = styled.View<BoxProps>`
  ${color}
  ${space}
  ${layout}
  ${border}
  ${grid}
  ${flexbox}
  ${position}
`;

export const FlexBox = styled.View<BoxProps>`
  flex: 1;
  ${color}
  ${space}
  ${layout}
  ${border}
  ${grid}
  ${flexbox}
  ${position}
`;
