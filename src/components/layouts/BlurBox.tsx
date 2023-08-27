import {isAndroid} from '@constants/information';
import {BlurView} from '@react-native-community/blur';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {
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
  borders,
} from 'styled-system';

export interface BlurBoxProps
  extends BordersProps,
    ColorProps,
    SpaceProps,
    GridProps,
    LayoutProps,
    FlexboxProps,
    PositionProps {}

export const BlurBox = styled(isAndroid ? View : BlurView)<BlurBoxProps>`
  ${color}
  ${space}
  ${layout}
  ${borders}
  ${grid}
  ${flexbox}
  ${position}
`;
