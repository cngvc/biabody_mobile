import React from 'react';
import {Container} from '@components/layouts/Container';
import {Image} from '@components/layouts/Image';
import {Scroll} from '@components/layouts/Scroll';
import {useTheme} from 'styled-components';
import {useAppNavigation} from '@hooks/useAppNavigation';
import {GradientButton} from '@components/GradientButton';
import {Images} from '@assets/Images';
import {SafeArea} from '@components/layouts/SafeArea';
import {StatusBar} from 'react-native';
import {Box, FlexBox} from '@components/layouts/Box';
import {Text} from '@components/layouts/Text';
import {GradientBox} from '@components/layouts/GradientBox';
import {GradientText} from '@components/GradientText';
import {BlurBox} from '@components/layouts/BlurBox';

const Pricing = () => {
  const navigation = useAppNavigation();
  const {colors, fontFamily} = useTheme();

  return (
    <Container>
      <StatusBar barStyle={'light-content'} />
      <Box
        position={'relative'}
        justifyContent={'flex-end'}
        alignItems={'center'}>
        <Image
          source={Images.pricingBanner}
          width="100%"
          style={{aspectRatio: 360 / 390, height: undefined}}
          borderBottomLeftRadius={24}
          borderBottomRightRadius={24}
        />

        <BlurBox
          position={'absolute'}
          blurAmount={2}
          backgroundColor={`${colors.white}50`}
          border={1}
          borderColor={colors.white}
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
            Pricing Plan
          </Text>
          <Text
            color={colors.white}
            fontFamily={fontFamily.mi500}
            fontSize={20}
            mb={24}>
            Membership pricing plans
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
            <Box
              flexDirection={'row'}
              width={'100%'}
              height={80}
              border={1}
              borderColor={colors.bright_gray}
              alignItems={'center'}
              borderRadius={16}
              px={24}
              mb={24}>
              <Box
                width={48}
                height={48}
                border={1}
                borderColor={colors.bright_gray}
                justifyContent={'center'}
                alignItems={'center'}
                borderRadius={24}>
                <Image source={Images.pricingIcon2} width={24} height={17} />
              </Box>
              <Box width={16} />
              <Text
                color={colors.raisin_black}
                fontFamily={fontFamily.mo600}
                fontSize={16}>
                Basic Plan
              </Text>
              <FlexBox />
              <Text
                color={colors.raisin_black}
                fontFamily={fontFamily.mi400}
                fontSize={24}>
                $19
              </Text>
            </Box>

            <Box
              position={'relative'}
              flexDirection={'row'}
              width={'100%'}
              height={80}
              border={1}
              borderColor={colors.primary_first}
              alignItems={'center'}
              borderRadius={16}
              pr={24}
              mb={24}>
              <GradientBox
                colors={[colors.primary_first, colors.primary_second]}
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
                colors={[colors.primary_first, colors.primary_second]}>
                <Image source={Images.pricingIcon1} width={24} height={17} />
              </GradientBox>
              <Box width={16} />
              <Text
                color={colors.raisin_black}
                fontFamily={fontFamily.mo600}
                fontSize={16}>
                Annual Plan
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
                  Most Popular
                </GradientText>
              </Box>
            </Box>

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
          <GradientButton mb={20} label="Buy Now" onPress={() => {}} />
        </FlexBox>
      </SafeArea>
    </Container>
  );
};

export default Pricing;
