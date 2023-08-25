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

export interface FlexListProps
  extends BorderProps,
    ColorProps,
    SpaceProps,
    GridProps,
    LayoutProps,
    FlexboxProps,
    PositionProps {}

export const FlexList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})<FlexListProps>`
  flex: 1;
  ${color}
  ${space}
  ${layout}
  ${border}
  ${grid}
  ${flexbox}
  ${position}
`;
