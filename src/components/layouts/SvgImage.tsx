import {SvgProps, WithLocalSvg} from 'react-native-svg';
import styled from 'styled-components/native';

export interface SvgImageProps extends SvgProps {}

export const SvgImage = styled(WithLocalSvg)<SvgImageProps>``;
