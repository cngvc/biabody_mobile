import {Icons} from '@assets/Images';
import {GradientIcon} from '@components/GradientIcon';
import {Box, FlexBox} from '@components/layouts/Box';
import {ActiveButton, ButtonProps} from '@components/layouts/Button';
import {SvgImage} from '@components/layouts/SvgImage';
import {Text} from '@components/layouts/Text';
import React from 'react';
import {ImageSourcePropType} from 'react-native';
import {useTheme} from 'styled-components';

interface QuestionOptionDropdownProps extends ButtonProps {
  open: boolean;
  onPress: Function;
  icon: ImageSourcePropType;
  label: string;
}

const QuestionOptionDropdown: React.FC<QuestionOptionDropdownProps> = ({
  open,
  onPress,
  icon,
  label,
  ...rest
}) => {
  const {colors, fontFamily} = useTheme();

  return (
    <ActiveButton
      flexDirection={'row'}
      flex={1}
      borderWidth={1}
      borderColor={colors.bright_gray}
      alignItems={'center'}
      borderRadius={12}
      p={16}
      mb={24}
      onPress={() => onPress()}
      {...rest}>
      <GradientIcon
        asset={icon}
        width={24}
        height={24}
        colors={!open ? [colors.raisin_black, colors.raisin_black] : undefined}
      />
      <Box width={8} />
      <FlexBox>
        <Text
          color={colors.raisin_black}
          fontFamily={fontFamily.mo500}
          fontSize={14}>
          {label}
        </Text>
      </FlexBox>

      <SvgImage
        asset={Icons.topArrow}
        width={24}
        height={24}
        transform={[{rotate: open ? '0deg' : '180deg'}]}
      />
    </ActiveButton>
  );
};

export default QuestionOptionDropdown;
