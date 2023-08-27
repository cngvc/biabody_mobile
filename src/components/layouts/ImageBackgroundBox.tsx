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

export const ImageBackgroundBox = styled.ImageBackground<BoxProps>`
  ${color}
  ${space}
  ${layout}
  ${borders}
  ${grid}
  ${flexbox}
  ${position}
`;

export const FlexImageBackgroundBox = styled.ImageBackground<BoxProps>`
  flex: 1;
  ${color}
  ${space}
  ${layout}
  ${borders}
  ${grid}
  ${flexbox}
  ${position}
`;
