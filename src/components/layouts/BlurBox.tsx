import {BlurView} from '@react-native-community/blur';
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

export interface BlurBoxProps
  extends BorderProps,
    ColorProps,
    SpaceProps,
    GridProps,
    LayoutProps,
    FlexboxProps,
    PositionProps {}

export const BlurBox = styled(BlurView)<BlurBoxProps>`
  ${color}
  ${space}
  ${layout}
  ${border}
  ${grid}
  ${flexbox}
  ${position}
`;
