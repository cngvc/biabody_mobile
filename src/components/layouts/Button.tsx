import styled from 'styled-components/native';
import {
  borders,
  color,
  layout,
  space,
  flexbox,
  position,
  BordersProps,
  ColorProps,
  SpaceProps,
  LayoutProps,
  FlexboxProps,
  PositionProps,
} from 'styled-system';

export interface ButtonProps
  extends BordersProps,
    ColorProps,
    SpaceProps,
    FlexboxProps,
    LayoutProps,
    PositionProps {}

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})<ButtonProps>`
  justify-content: center;
  align-items: center;
  ${color}
  ${space}
  ${layout}
  ${borders}
  ${flexbox}
  ${position}
`;

export const ActiveButton = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})<ButtonProps>`
  justify-content: center;
  align-items: center;
  ${color}
  ${space}
  ${layout}
  ${borders}
  ${flexbox}
  ${position}
`;

export const FlexButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})<ButtonProps>`
  flex: 1;
  justify-content: center;
  align-items: center;
  ${color}
  ${space}
  ${layout}
  ${borders}
  ${flexbox}
`;
