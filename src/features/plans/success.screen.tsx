import React from 'react';
import {Container} from '@components/layouts/Container';
import {useTheme} from 'styled-components';
import {Icons} from '@assets/Images';
import {SafeArea} from '@components/layouts/SafeArea';
import {StatusBar} from 'react-native';
import {Box, FlexBox} from '@components/layouts/Box';
import {Text} from '@components/layouts/Text';
import {useTranslation} from 'react-i18next';

import {SvgImage} from '@components/layouts/SvgImage';

const Success = () => {
  const {colors, fontFamily} = useTheme();
  const {t} = useTranslation();

  return (
    <SafeArea>
      <StatusBar barStyle={'dark-content'} />
      <Container px={16}>
        <FlexBox justifyContent={'center'} alignItems={'center'}>
          <SvgImage asset={Icons.pricingSuccess} width={90} height={100} />
          <Box height={12} />
          <Text mb={24} fontSize={24} fontFamily={fontFamily.mi500}>
            {t('success_label')}
          </Text>
          <Text
            fontSize={12}
            color={colors.metallic_gray}
            fontFamily={fontFamily.mo400}
            textAlign={'center'}>
            Lorem ipsum dolor sit amet consectetur. Quisque lectus eget volutpat
            aliquet phasellus massa in ut turpis.{' '}
          </Text>
        </FlexBox>
      </Container>
    </SafeArea>
  );
};

export default Success;
