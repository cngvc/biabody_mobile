import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useTheme} from 'styled-components';
import {Button, ButtonProps} from './layouts/Button';
import {Text} from './layouts/Text';

interface GradientButtonProps extends ButtonProps {
  onPress: Function;
  disabled?: boolean;
  label: String;
}
export const GradientButton = ({
  onPress,
  disabled = false,
  label,
  ...rest
}: GradientButtonProps) => {
  const {colors, fontFamily} = useTheme();

  return (
    <Button
      disabled={disabled}
      borderRadius={12}
      height={48}
      onPress={() => onPress()}
      activeOpacity={0.8}
      {...rest}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.linearGradient}
        colors={[colors.primary_first, colors.primary_second]}
      />
      <Text fontSize={14} fontFamily={fontFamily.mi400} color={colors.white}>
        {label}
      </Text>
    </Button>
  );
};
const styles = StyleSheet.create({
  linearGradient: {
    position: 'absolute',
    width: '100%',
    height: 48,
    borderRadius: 12,
  },
});
