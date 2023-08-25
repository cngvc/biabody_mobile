import React from 'react';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import {TextProps as CustomTextProps, Text} from './layouts/Text';
import {useTheme} from 'styled-components';
import {TextProps} from 'react-native';

export interface GradientTextProps extends CustomTextProps, TextProps {}

export const GradientText = (props: GradientTextProps) => {
  const {colors} = useTheme();

  return (
    <MaskedView maskElement={<Text {...props} />}>
      <LinearGradient
        colors={[colors.primary_first, colors.primary_second]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <Text {...props} opacity={0} />
      </LinearGradient>
    </MaskedView>
  );
};
