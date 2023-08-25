import React from 'react';
import {Box, BoxProps} from './layouts/Box';
import {useTheme} from 'styled-components';
import {Text} from './layouts/Text';
import {Input} from './layouts/Input';

interface InputProps extends BoxProps {
  label: string;
  placeholder: string;
}

const CustomInput = ({label, placeholder, ...rest}: InputProps) => {
  const {colors, fontFamily} = useTheme();

  return (
    <Box
      borderWidth={1}
      borderColor={colors.bright_gray}
      px={16}
      py={4}
      borderRadius={12}
      mb={16}
      {...rest}>
      <Text
        color={colors.metallic_gray}
        fontFamily={fontFamily.mo400}
        fontSize={12}
        mb={2}>
        {label}
      </Text>
      <Input placeholder={placeholder} />
    </Box>
  );
};

export default CustomInput;
