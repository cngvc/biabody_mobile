import React from 'react';
import {useTheme} from 'styled-components';
import {Button, ButtonProps} from './layouts/Button';
import {Text} from './layouts/Text';

interface OutlineButtonProps extends ButtonProps {
  onPress: Function;
  disabled?: boolean;
  label: String;
}
export const OutlineButton = ({
  onPress,
  disabled = false,
  label,
  ...rest
}: OutlineButtonProps) => {
  const {colors, fontFamily} = useTheme();

  return (
    <Button
      disabled={disabled}
      borderWidth={1}
      borderColor={colors.white}
      borderRadius={12}
      height={48}
      onPress={() => onPress()}
      activeOpacity={0.8}
      {...rest}>
      <Text fontSize={14} fontFamily={fontFamily.mi400} color={colors.white}>
        {label}
      </Text>
    </Button>
  );
};
