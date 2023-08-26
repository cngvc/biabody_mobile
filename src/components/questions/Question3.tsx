import React from 'react';
import {FlexBox} from '@components/layouts/Box';
import {Scroll} from '@components/layouts/Scroll';
import {Text} from '@components/layouts/Text';
import {useTranslation} from 'react-i18next';
import {useTheme} from 'styled-components';
import {Container} from '@components/layouts/Container';

const Question3 = () => {
  const {fontFamily} = useTheme();
  const {t} = useTranslation();
  return (
    <Container px={16}>
      <Scroll>
        <Text fontSize={20} fontFamily={fontFamily.mi400}>
          {t('question_3_label')}
        </Text>

        <FlexBox />
      </Scroll>
    </Container>
  );
};

export default Question3;
