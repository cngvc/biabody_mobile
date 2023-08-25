import React from 'react';
import {Container} from '@components/layouts/Container';
import {GradientButton} from '@components/GradientButton';
import {Image} from '@components/layouts/Image';
import {Scroll} from '@components/layouts/Scroll';
import {useTheme} from 'styled-components';
import {useAppNavigation} from '@hooks/useAppNavigation';
import {LOGIN_SCREEN} from '@constants/screens';
import {Text} from '@components/layouts/Text';
import {Box} from '@components/layouts/Box';
import {Button} from '@components/layouts/Button';
import {Images} from '@assets/Images';
import {GradientText} from '@components/GradientText';
import CustomInput from '@components/Input';
import {SafeArea} from '@components/layouts/SafeArea';
import {StatusBar} from 'react-native';

const SignUp = () => {
  const navigation = useAppNavigation();
  const {colors, fontFamily} = useTheme();

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
            Create New Account
          </Text>
          <Box flexDirection="row" mb={32}>
            <Text
              fontSize={10}
              color={colors.metallic_gray}
              fontFamily={fontFamily.mo400}>
              Already have an account?{' '}
            </Text>

            <Button onPress={() => navigation.navigate(LOGIN_SCREEN)}>
              <GradientText fontFamily={fontFamily.mo700} fontSize={10}>
                Login
              </GradientText>
            </Button>
          </Box>

          <CustomInput label="First Name" placeholder="Enter First Name" />
          <CustomInput label="Last Name" placeholder="Enter Last Name" />
          <CustomInput label="Email" placeholder="Enter Email" />
          <CustomInput
            label="Create Password"
            placeholder="Enter Create Password"
          />
          <CustomInput
            label="Re-enter Created Password"
            placeholder="Enter Re-enter Created Password"
          />
        </Scroll>

        <GradientButton mb={20} label="Create Account" onPress={() => {}} />
      </Container>
    </SafeArea>
  );
};

export default SignUp;
