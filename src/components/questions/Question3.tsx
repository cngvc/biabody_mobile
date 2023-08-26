import React, {useMemo} from 'react';
import {Box} from '@components/layouts/Box';
import {Scroll} from '@components/layouts/Scroll';
import {Text} from '@components/layouts/Text';
import {useTranslation} from 'react-i18next';
import {useTheme} from 'styled-components';
import {Container} from '@components/layouts/Container';
import {Picker, PickerIOS} from '@react-native-picker/picker';
import {useAppDispatch, useAppSelector} from '@hooks/useConnect';
import {
  setHeightDecimal,
  setHeightInt,
  setHeightUnit,
  setWeightDecimal,
  setWeightInt,
  setWeightUnit,
} from '@store/pricing.slice';
import QuestionOptionDropdown from './QuestionOptionDropdown';
import {Icons} from '@assets/Images';

const Question3 = () => {
  const {fontFamily, colors} = useTheme();
  const dispatch = useAppDispatch();
  const {
    heightInt,
    heightUnit,
    heightDecimal,
    weightInt,
    weightDecimal,
    weightUnit,
  } = useAppSelector(state => state.pricing);
  const {t} = useTranslation();
  const [isOpenHeightPicker, setOpenHeightPicker] = React.useState(false);
  const [isOpenWeightPicker, setOpenWeightPicker] = React.useState(false);

  console.log(
    heightInt,
    heightDecimal,
    heightUnit,
    weightInt,
    weightDecimal,
    weightUnit,
  );
  const intHeightOptions = useMemo(() => {
    const results = [];
    for (let i = 0; i <= 9; i++) {
      results.push(i.toString());
    }
    return results;
  }, []);

  const decimalHeightOptions = useMemo(() => {
    const results = [];
    for (let i = 0; i <= 99; i++) {
      results.push(i.toString());
    }
    return results;
  }, []);

  const intWeightOptions = useMemo(() => {
    const results = [];
    for (let i = 0; i <= 500; i++) {
      results.push(i.toString());
    }
    return results;
  }, []);

  const decimalWeightOptions = useMemo(() => {
    const results = [];
    for (let i = 0; i <= 99; i++) {
      results.push(i.toString());
    }
    return results;
  }, []);

  return (
    <Container px={16}>
      <Scroll>
        <Text fontSize={20} fontFamily={fontFamily.mi400}>
          {t('question_3_label')}
        </Text>

        <Text
          fontSize={12}
          mb={24}
          color={colors.metallic_gray}
          fontFamily={fontFamily.mo400}>
          Lorem ipsum dolor sit amet consectetur. Quisque lectus eget volutpat
          aliquet phasellus massa in ut turpis.
        </Text>

        <QuestionOptionDropdown
          open={isOpenHeightPicker}
          icon={Icons.question3Option1}
          onPress={() => setOpenHeightPicker(cur => !cur)}
          label={`${heightInt}'${heightDecimal}'' ${heightUnit}`}
          mb={4}
        />

        {isOpenHeightPicker ? (
          <Box
            flexDirection={'row'}
            border={1}
            borderColor={colors.bright_gray}
            borderRadius={12}
            mt={4}>
            <Box flex={1}>
              <PickerIOS
                selectedValue={`${heightInt}`}
                onValueChange={item => dispatch(setHeightInt(item))}>
                {intHeightOptions.map((height, index) => (
                  <Picker.Item key={index} label={height} value={height} />
                ))}
              </PickerIOS>
            </Box>

            <Box flex={1}>
              <PickerIOS
                selectedValue={`${heightDecimal}`}
                onValueChange={item =>
                  dispatch(setHeightDecimal(Number(item)))
                }>
                {decimalHeightOptions.map((height, index) => (
                  <Picker.Item key={index} label={height} value={height} />
                ))}
              </PickerIOS>
            </Box>

            <Box flex={1}>
              <PickerIOS
                selectedValue={`${heightUnit}`}
                onValueChange={item => dispatch(setHeightUnit(Number(item)))}>
                <PickerIOS.Item label="Metric (lb)" value="lb" />
                <PickerIOS.Item label="Imperial (ft)" value="ft" />
              </PickerIOS>
            </Box>
          </Box>
        ) : (
          <Box height={16} />
        )}

        <QuestionOptionDropdown
          open={isOpenWeightPicker}
          icon={Icons.question3Option2}
          onPress={() => setOpenWeightPicker(cur => !cur)}
          label={`${heightInt}'${heightDecimal}'' ${heightUnit}`}
          mb={4}
        />

        {isOpenWeightPicker ? (
          <Box
            flexDirection={'row'}
            border={1}
            borderColor={colors.bright_gray}
            borderRadius={12}
            mt={4}>
            <Box flex={1}>
              <PickerIOS
                selectedValue={`${weightInt}`}
                onValueChange={item => dispatch(setWeightInt(Number(item)))}>
                {intWeightOptions.map((height, index) => (
                  <Picker.Item key={index} label={height} value={height} />
                ))}
              </PickerIOS>
            </Box>

            <Box flex={1}>
              <PickerIOS
                selectedValue={`${weightDecimal}`}
                onValueChange={item =>
                  dispatch(setWeightDecimal(Number(item)))
                }>
                {decimalWeightOptions.map((height, index) => (
                  <Picker.Item key={index} label={height} value={height} />
                ))}
              </PickerIOS>
            </Box>

            <Box flex={1}>
              <PickerIOS
                selectedValue={`${weightUnit}`}
                onValueChange={item => dispatch(setWeightUnit(item))}>
                <PickerIOS.Item label="Kilogram (kg)" value="kg" />
                <PickerIOS.Item label="Pounds (lbs)" value="lbs" />
              </PickerIOS>
            </Box>
          </Box>
        ) : (
          <Box height={16} />
        )}
      </Scroll>
    </Container>
  );
};

export default Question3;
