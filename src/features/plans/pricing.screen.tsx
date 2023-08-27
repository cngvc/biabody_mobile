import React from 'react';
import {Container} from '@components/layouts/Container';
import {Image} from '@components/layouts/Image';
import {Scroll} from '@components/layouts/Scroll';
import {useTheme} from 'styled-components';
import {useAppNavigation} from '@hooks/useAppNavigation';
import {GradientButton} from '@components/GradientButton';
import {Icons, Images} from '@assets/Images';
import {SafeArea} from '@components/layouts/SafeArea';
import {StatusBar} from 'react-native';
import {Box, FlexBox} from '@components/layouts/Box';
import {Text} from '@components/layouts/Text';
import {GradientBox} from '@components/layouts/GradientBox';
import {GradientText} from '@components/GradientText';
import {BlurBox} from '@components/layouts/BlurBox';
import {useTranslation} from 'react-i18next';
import {useAppDispatch, useAppSelector} from '@hooks/useConnect';
import {setPlan} from '@store/pricing.slice';
import {ActiveButton} from '@components/layouts/Button';
import {screens} from '@constants/sizes';
import {QUESTIONS_SCREEN} from '@constants/screens';
import {GradientIcon} from '@components/GradientIcon';

const Pricing = () => {
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();
  const plan = useAppSelector(state => state.pricing.plan);

  const {colors, fontFamily} = useTheme();
  const {t} = useTranslation();

  const handleChangePlan = (_plan: 'basic' | 'annual') => {
    dispatch(setPlan(_plan));
  };

  return (
    <Container>
      <StatusBar
        barStyle={'light-content'}
        translucent
        backgroundColor="transparent"
      />
      <Box
        position={'relative'}
        justifyContent={'flex-end'}
        alignItems={'center'}>
        <Image
          source={Images.pricingBanner}
          width={screens.width}
          style={{aspectRatio: 1 / 1, height: undefined}}
          borderBottomLeftRadius={24}
          borderBottomRightRadius={24}
        />

        <BlurBox
          position={'absolute'}
          blurAmount={2}
          backgroundColor={`${colors.white}50`}
          borderWidth={1}
          borderColor={colors.white}
          borderTopColor={colors.white}
          borderRadius={16}
          p={16}
          left={16}
          right={16}
          bottom={16}>
          <Text
            color={colors.white}
            fontFamily={fontFamily.mo500}
            fontSize={16}
            mb={8}>
            {t('pricing_plan')}
          </Text>
          <Text
            color={colors.white}
            fontFamily={fontFamily.mi500}
            fontSize={20}
            mb={24}>
            {t('membership_pricing_plans')}
          </Text>
          <Text
            color={colors.white}
            fontSize={12}
            fontFamily={fontFamily.mo400}>
            Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit Borem ipsum dolor sit amet, consectetur
            adipiscing elit. Nunc vulputate
          </Text>
        </BlurBox>
      </Box>

      <SafeArea edges={['bottom']}>
        <FlexBox px={16}>
          <Scroll>
            <Box height={24} />

            {/* basic */}
            <ActiveButton
              flexDirection={'row'}
              width={'100%'}
              height={80}
              borderWidth={1}
              borderStyle={'dotted'}
              borderColor={
                plan === 'basic' ? colors.primary_first : colors.bright_gray
              }
              alignItems={'center'}
              borderRadius={16}
              pr={24}
              mb={24}
              onPress={() => handleChangePlan('basic')}>
              <GradientBox
                colors={
                  plan === 'basic'
                    ? [colors.primary_first, colors.primary_second]
                    : [colors.transparent, colors.transparent]
                }
                borderColor={
                  plan === 'annual' ? colors.transparent : colors.bright_gray
                }
                width={2}
                height={32}
                mr={14}
                ml={8}
                borderRadius={2}
              />
              <GradientBox
                width={48}
                height={48}
                borderWidth={1}
                colors={
                  plan === 'basic'
                    ? [colors.primary_first, colors.primary_second]
                    : [colors.transparent, colors.transparent]
                }
                borderColor={
                  plan === 'basic' ? colors.transparent : colors.bright_gray
                }
                justifyContent={'center'}
                alignItems={'center'}
                borderRadius={24}>
                <GradientIcon
                  asset={Icons.pricingIcon1}
                  width={24}
                  height={17}
                  colors={
                    plan === 'basic'
                      ? [colors.white, colors.white]
                      : [colors.raisin_black, colors.raisin_black]
                  }
                />
              </GradientBox>
              <Box width={16} />
              <Text
                color={colors.raisin_black}
                fontFamily={fontFamily.mo600}
                fontSize={16}>
                {t('basic_plan')}
              </Text>
              <FlexBox />
              <Text
                color={colors.raisin_black}
                fontFamily={fontFamily.mi400}
                fontSize={24}>
                $19
              </Text>
            </ActiveButton>

            {/* annual */}
            <ActiveButton
              position={'relative'}
              flexDirection={'row'}
              width={'100%'}
              height={80}
              borderWidth={1}
              borderColor={
                plan === 'annual' ? colors.primary_first : colors.bright_gray
              }
              alignItems={'center'}
              borderRadius={16}
              pr={24}
              mb={24}
              onPress={() => handleChangePlan('annual')}>
              <GradientBox
                colors={
                  plan === 'annual'
                    ? [colors.primary_first, colors.primary_second]
                    : [colors.transparent, colors.transparent]
                }
                borderColor={
                  plan === 'annual' ? colors.transparent : colors.bright_gray
                }
                width={2}
                height={32}
                mr={14}
                ml={8}
                borderRadius={2}
              />

              <GradientBox
                width={48}
                height={48}
                justifyContent={'center'}
                alignItems={'center'}
                borderRadius={24}
                colors={
                  plan === 'annual'
                    ? [colors.primary_first, colors.primary_second]
                    : [colors.transparent, colors.transparent]
                }>
                <GradientIcon
                  asset={Icons.pricingIcon2}
                  width={24}
                  height={17}
                  colors={
                    plan === 'annual'
                      ? [colors.white, colors.white]
                      : [colors.raisin_black, colors.raisin_black]
                  }
                />
              </GradientBox>
              <Box width={16} />
              <Text
                color={colors.raisin_black}
                fontFamily={fontFamily.mo600}
                fontSize={16}>
                {t('annual_plan')}
              </Text>
              <FlexBox />
              <Text
                color={colors.raisin_black}
                fontFamily={fontFamily.mi400}
                fontSize={24}>
                $99
              </Text>

              <Box
                position={'absolute'}
                top={-11}
                right={32}
                backgroundColor={colors.white}
                px={4}>
                <GradientText fontSize={12} fontFamily={fontFamily.mi500}>
                  {t('most_popular')}
                </GradientText>
              </Box>
            </ActiveButton>

            <Box flexDirection={'row'} alignItems={'center'} mb={8}>
              <Image source={Images.checkMark} width={20} height={20} />
              <Text
                fontFamily={fontFamily.mo400}
                color={colors.metallic_gray}
                ml={8}>
                Borem ipsum dolor sit amet
              </Text>
            </Box>

            <Box flexDirection={'row'} alignItems={'center'} mb={8}>
              <Image source={Images.checkMark} width={20} height={20} />
              <Text
                fontFamily={fontFamily.mo400}
                color={colors.metallic_gray}
                ml={8}>
                Borem ipsum dolor sit amet, adipiscing elit.
              </Text>
            </Box>

            <Box flexDirection={'row'} alignItems={'center'} mb={8}>
              <Image source={Images.checkMark} width={20} height={20} />
              <Text
                fontFamily={fontFamily.mo400}
                color={colors.metallic_gray}
                ml={8}>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate
              </Text>
            </Box>
          </Scroll>
          <GradientButton
            mb={16}
            label={t('buy_now')}
            onPress={() => {
              navigation.navigate(QUESTIONS_SCREEN);
            }}
          />
        </FlexBox>
      </SafeArea>
    </Container>
  );
};

export default Pricing;
