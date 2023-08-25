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

export interface ScrollProps
  extends BorderProps,
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
  ${border}
  ${grid}
  ${flexbox}
  ${position}
`;
