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

export interface ScrollProps
  extends BordersProps,
    ColorProps,
    SpaceProps,
    GridProps,
    LayoutProps,
    FlexboxProps,
    PositionProps {}

export const Scroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})<ScrollProps>`
  flex: 1;
  ${color}
  ${space}
  ${layout}
  ${borders}
  ${grid}
  ${flexbox}
  ${position}
`;
