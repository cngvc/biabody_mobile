import {GradientIcon} from '@components/GradientIcon';
import {Box, FlexBox} from '@components/layouts/Box';
import {ActiveButton} from '@components/layouts/Button';
import {Text} from '@components/layouts/Text';
import React from 'react';
import {ImageSourcePropType} from 'react-native';
import {useTheme} from 'styled-components';

interface QuestionOptionSmallProps {
  selected: boolean;
  onPress: Function;
  icon: ImageSourcePropType;
  label: string;
}

const QuestionOptionSimple: React.FC<QuestionOptionSmallProps> = ({
  selected,
  onPress,
  icon,
  label,
}) => {
  const {colors, fontFamily} = useTheme();

  return (
    <ActiveButton
      flexDirection={'row'}
      flex={1}
      borderWidth={1}
      borderColor={selected ? colors.primary_first : colors.bright_gray}
      alignItems={'center'}
      borderRadius={12}
      p={16}
      mb={24}
      onPress={() => onPress()}>
      <GradientIcon
        asset={icon}
        width={24}
        height={24}
        colors={
          !selected ? [colors.raisin_black, colors.raisin_black] : undefined
        }
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
    </ActiveButton>
  );
};

export default QuestionOptionSimple;
