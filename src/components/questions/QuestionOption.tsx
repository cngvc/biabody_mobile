import {GradientIcon} from '@components/GradientIcon';
import {Box, FlexBox} from '@components/layouts/Box';
import {ActiveButton, Button} from '@components/layouts/Button';
import {Text} from '@components/layouts/Text';
import React from 'react';
import {ImageSourcePropType} from 'react-native';
import {useTheme} from 'styled-components';

interface QuestionOptionProps {
  selected: boolean;
  onPress: Function;
  icon: ImageSourcePropType;
  label: string;
  description: string;
}

const QuestionOption: React.FC<QuestionOptionProps> = ({
  selected,
  onPress,
  icon,
  label,
  description,
}) => {
  const {colors, fontFamily} = useTheme();

  return (
    <Button
      flexDirection={'row'}
      width={'100%'}
      borderWidth={1}
      borderColor={selected ? colors.primary_first : colors.bright_gray}
      alignItems={'center'}
      borderRadius={16}
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
      <Box width={16} />
      <FlexBox>
        <Text
          color={colors.raisin_black}
          fontFamily={fontFamily.mo600}
          fontSize={16}
          mb={2}>
          {label}
        </Text>
        <Text
          color={colors.metallic_gray}
          fontFamily={fontFamily.mo400}
          fontSize={12}>
          {description}
        </Text>
      </FlexBox>
    </Button>
  );
};

export default QuestionOption;
