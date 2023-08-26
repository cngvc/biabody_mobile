import React from 'react';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import {useTheme} from 'styled-components';
import {ImageSourcePropType} from 'react-native';
import {SvgImage, SvgImageProps} from './layouts/SvgImage';

export interface GradientSvgImageProps extends SvgImageProps {
  asset: ImageSourcePropType;
  colors?: (string | number)[];
}

export const GradientIcon = (props: GradientSvgImageProps) => {
  const {colors} = useTheme();
  return (
    <MaskedView maskElement={<SvgImage {...props} />}>
      <LinearGradient
        colors={props.colors || [colors.primary_first, colors.primary_second]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <SvgImage {...props} opacity={0} />
      </LinearGradient>
    </MaskedView>
  );
};
