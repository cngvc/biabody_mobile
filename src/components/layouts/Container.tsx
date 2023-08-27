import styled from 'styled-components/native';
import {
  borders,
  color,
  layout,
  space,
  BordersProps,
  ColorProps,
  SpaceProps,
  LayoutProps,
} from 'styled-system';

export interface ContainerProps
  extends BordersProps,
    ColorProps,
    SpaceProps,
    LayoutProps {}

export const Container = styled.View<ContainerProps>`
  flex: 1;
  background-color: ${({theme}) => theme.colors.while};
  ${color}
  ${space}
  ${layout}
  ${borders}
`;
