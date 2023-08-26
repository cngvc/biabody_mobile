import React from 'react';
import {Container} from '@components/layouts/Container';
import {Image} from '@components/layouts/Image';
import {Scroll} from '@components/layouts/Scroll';
import {Box} from '@components/layouts/Box';
import {Text} from '@components/layouts/Text';
import {Button} from '@components/layouts/Button';
import {useTheme} from 'styled-components';
import {PLAN_STACK, SIGN_UP_SCREEN} from '@constants/screens';
import {useAppNavigation} from '@hooks/useAppNavigation';
import {GradientButton} from '@components/GradientButton';
import CustomInput from '@components/CustomInput';
import {Images} from '@assets/Images';
import {GradientText} from '@components/GradientText';
import {SafeArea} from '@components/layouts/SafeArea';
import {StatusBar} from 'react-native';
import {useTranslation} from 'react-i18next';

const Login = () => {
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
            {t('login')}
          </Text>
          <Box flexDirection="row" mb={32}>
            <Text
              fontSize={10}
              color={colors.metallic_gray}
              fontFamily={fontFamily.mo400}>
              {t('don_t_have_an_account')}{' '}
            </Text>

            <Button onPress={() => navigation.navigate(SIGN_UP_SCREEN)}>
              <GradientText fontFamily={fontFamily.mo700} fontSize={10}>
                {t('create_new')}
              </GradientText>
            </Button>
          </Box>

          <CustomInput
            label={t('email')}
            placeholder={t('email_placeholder')}
          />

          <CustomInput
            label={t('password')}
            placeholder={t('password_placeholder')}
          />

          <Text
            fontFamily={fontFamily.mo400}
            fontSize={12}
            textAlign="right"
            color={colors.metallic_gray}>
            {t('forgot_password')}
          </Text>
        </Scroll>

        <GradientButton
          mb={16}
          label="Login"
          onPress={() => {
            navigation.navigate(PLAN_STACK);
          }}
        />
      </Container>
    </SafeArea>
  );
};

export default Login;
