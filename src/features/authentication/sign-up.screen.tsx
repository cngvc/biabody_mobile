import React from 'react';
import {Container} from '@components/layouts/Container';
import {GradientButton} from '@components/GradientButton';
import {Image} from '@components/layouts/Image';
import {Scroll} from '@components/layouts/Scroll';
import {useTheme} from 'styled-components';
import {useAppNavigation} from '@hooks/useAppNavigation';
import {LOGIN_SCREEN, PLAN_STACK} from '@constants/screens';
import {Text} from '@components/layouts/Text';
import {Box} from '@components/layouts/Box';
import {Button} from '@components/layouts/Button';
import {Images} from '@assets/Images';
import {GradientText} from '@components/GradientText';
import CustomInput from '@components/CustomInput';
import {SafeArea} from '@components/layouts/SafeArea';
import {StatusBar} from 'react-native';
import {useTranslation} from 'react-i18next';

const SignUp = () => {
  const navigation = useAppNavigation();
  const {colors, fontFamily} = useTheme();
  const {t} = useTranslation();

  return (
    <SafeArea>
      <StatusBar barStyle={'dark-content'} />

      <Container px={16}>
        <Image
          source={Images.logoGradient}
          width={222}
          height={36}
          alignSelf="center"
          mt={64}
          mb={48}
        />
        <Scroll>
          <Text mb={8} color={colors.raisin_black} fontSize={20}>
            {t('signup_label')}
          </Text>
          <Box flexDirection="row" mb={32}>
            <Text
              fontSize={10}
              color={colors.metallic_gray}
              fontFamily={fontFamily.mo400}>
              {t('already_have_an_account')}{' '}
            </Text>

            <Button onPress={() => navigation.navigate(LOGIN_SCREEN)}>
              <GradientText fontFamily={fontFamily.mo700} fontSize={10}>
                {t('login')}
              </GradientText>
            </Button>
          </Box>

          <CustomInput label="First Name" placeholder="Enter First Name" />
          <CustomInput label="Last Name" placeholder="Enter Last Name" />
          <CustomInput label="Email" placeholder="Enter Email" />
          <CustomInput
            label={t('create_password')}
            placeholder={t('password_placeholder')}
          />
          <CustomInput
            label={t('confirm_password')}
            placeholder={t('confirm_password_placeholder')}
          />
        </Scroll>

        <GradientButton
          mb={16}
          label={t('create_account')}
          onPress={() => {
            navigation.navigate(PLAN_STACK);
          }}
        />
      </Container>
    </SafeArea>
  );
};

export default SignUp;
