import React, {useMemo} from 'react';
import {Box, FlexBox} from '../layouts/Box';
import {Text} from '../layouts/Text';
import {useTranslation} from 'react-i18next';
import {useTheme} from 'styled-components';
import {Icons} from '@assets/Images';
import {ActiveButton} from '../layouts/Button';
import {Bar} from 'react-native-progress';
import {NUMBER_OF_QUESTIONS} from '@constants/commons';
import {screens} from '@constants/sizes';
import {SvgImage} from '@components/layouts/SvgImage';

interface QuestionProcessProps {
  number: number;
  onBack?: Function;
}

const QuestionProcess: React.FC<QuestionProcessProps> = ({number, onBack}) => {
  const {colors, fontFamily} = useTheme();
  const process = useMemo(() => {
    return (number ?? 0) / NUMBER_OF_QUESTIONS;
  }, [number]);

  const {t} = useTranslation();

  return (
    <Box
      px={16}
      mb={28}
      width={screens.width}
      height={48}
      flexDirection={'row'}
      alignItems={'center'}>
      {onBack && (
        <ActiveButton onPress={() => onBack()}>
          <SvgImage asset={Icons.leftArrow} width={24} height={24} />
        </ActiveButton>
      )}
      <Box width={8} />
      <Text
        fontSize={12}
        color={colors.metallic_gray}
        fontFamily={fontFamily.mi400}>
        {t('question')} {number}
      </Text>
      <FlexBox />

      <Bar
        color={colors.primary_first}
        progress={process}
        width={140}
        borderColor={colors.bright_gray}
        borderRadius={2}
        useNativeDriver
      />
    </Box>
  );
};

export default QuestionProcess;
