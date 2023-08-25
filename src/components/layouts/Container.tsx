import styled from 'styled-components/native';
import {
  border,
  color,
  layout,
  space,
  BorderProps,
  ColorProps,
  SpaceProps,
  LayoutProps,
} from 'styled-system';

export interface ContainerProps
  extends BorderProps,
    ColorProps,
    SpaceProps,
    LayoutProps {}

export const Container = styled.View<ContainerProps>`
  flex: 1;
  background-color: ${({theme}) => theme.colors.while};
  ${color}
  ${space}
  ${layout}
  ${border}
`;
