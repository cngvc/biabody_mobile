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

export interface FlexListProps
  extends BordersProps,
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
  ${borders}
  ${grid}
  ${flexbox}
  ${position}
`;
