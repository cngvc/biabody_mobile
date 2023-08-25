import React from 'react';
import {FlexImageBackgroundBox} from '@components/layouts/ImageBackgroundBox';
import {Image} from '@components/layouts/Image';
import {Box} from '@components/layouts/Box';
import {Text} from '@components/layouts/Text';
import {Button} from '@components/layouts/Button';
import {LOGIN_SCREEN, SIGN_UP_SCREEN} from '@constants/screens';
import {useAppNavigation} from '@hooks/useAppNavigation';
import {useTheme} from 'styled-components';
import {OutlineButton} from '@components/OutlineButton';
import {Images} from '@assets/Images';
import {SafeArea} from '@components/layouts/SafeArea';
import {GradientButton} from '@components/GradientButton';
import {StatusBar} from 'react-native';

export const IntroScreen = () => {
  const navigation = useAppNavigation();
  const {colors} = useTheme();

  return (
    <FlexImageBackgroundBox source={Images.backgroundIntro}>
      <StatusBar barStyle={'light-content'} />

      <SafeArea>
        <Image
          source={Images.logoWhite}
          width={222}
          height={36}
          alignSelf="center"
          mt={64}
          mb={48}
        />

        <Box flex={1} />

        <Box flexDirection="row" justifyContent="center" mb={24} px={16}>
          <OutlineButton
            flex={1}
            onPress={() => navigation.navigate(LOGIN_SCREEN)}
            label="Login"
          />
          <Box width={16} />
          <GradientButton
            flex={1}
            onPress={() => navigation.navigate(SIGN_UP_SCREEN)}
            label="Join Now"
          />
        </Box>
        <Box flexDirection="row" justifyContent="center" mb={20}>
          <Button>
            <Text fontSize={10} color={colors}>
              Privacy Policy
            </Text>
          </Button>
          <Box width={16} />
          <Button>
            <Text fontSize={10} color={colors}>
              Terms & Condition
            </Text>
          </Button>
        </Box>
      </SafeArea>
    </FlexImageBackgroundBox>
  );
};

export default IntroScreen;
