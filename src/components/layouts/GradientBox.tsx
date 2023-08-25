import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import {
  border,
  layout,
  space,
  grid,
  flexbox,
  position,
  BorderProps,
  SpaceProps,
  LayoutProps,
  GridProps,
  FlexboxProps,
  PositionProps,
} from 'styled-system';

export interface GradientBox
  extends BorderProps,
    SpaceProps,
    GridProps,
    LayoutProps,
    FlexboxProps,
    PositionProps {}

export const GradientBox = styled(LinearGradient).attrs({
  start: {x: 0, y: 0},
  end: {x: 1, y: 0},
})<GradientBox>`
  ${space}
  ${layout}
  ${border}
  ${grid}
  ${flexbox}
  ${position}
`;
