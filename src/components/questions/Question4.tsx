import React, {Fragment, useMemo} from 'react';
import {Scroll} from '@components/layouts/Scroll';
import {Text} from '@components/layouts/Text';
import {useTranslation} from 'react-i18next';
import {useTheme} from 'styled-components';
import {Container} from '@components/layouts/Container';
import {Icons} from '@assets/Images';
import {useAppDispatch, useAppSelector} from '@hooks/useConnect';
import {setDob, setSex} from '@store/pricing.slice';
import {Box} from '@components/layouts/Box';
import QuestionOptionSimple from './QuestionOptionSimple';
import DatePicker from 'react-native-date-picker';
import {screens} from '@constants/sizes';
import moment from 'moment';
import QuestionOptionDropdown from './QuestionOptionDropdown';

const Question4 = () => {
  const {colors, fontFamily} = useTheme();
  const [isOpenDatePicker, setOpenDatePicker] = React.useState(false);
  const {t} = useTranslation();
  const {sex, dob} = useAppSelector(state => state.pricing);
  const dispatch = useAppDispatch();

  const options = useMemo(() => {
    return [
      {
        icon: Icons.question4Option1,
        onPress: () => dispatch(setSex('male')),
        selected: sex === 'male',
        label: t('question_4_option_1_label'),
      },
      {
        icon: Icons.question4Option2,
        onPress: () => dispatch(setSex('female')),
        selected: sex === 'female',
        label: t('question_4_option_2_label'),
      },
      {
        icon: Icons.question4Option3,
        onPress: () => dispatch(setSex('others')),
        selected: sex === 'others',
        label: t('question_4_option_3_label'),
      },
    ];
  }, [t, dispatch, sex]);

  return (
    <Container px={16}>
      <Scroll>
        <Text mb={24} fontSize={20} fontFamily={fontFamily.mi400}>
          {t('question_4_label')}
        </Text>
        <Text
          fontSize={12}
          mb={24}
          color={colors.metallic_gray}
          fontFamily={fontFamily.mo400}>
          Lorem ipsum dolor sit amet consectetur. Quisque lectus eget volutpat
          aliquet phasellus massa in ut turpis.
        </Text>

        <Box flexDirection={'row'}>
          {options.map((e, index) => (
            <Fragment key={index}>
              <QuestionOptionSimple
                icon={e.icon}
                onPress={e.onPress}
                selected={e.selected}
                label={e.label}
              />
              {index <= options.length - 1 && <Box width={8} />}
            </Fragment>
          ))}
        </Box>

        <QuestionOptionDropdown
          open={isOpenDatePicker}
          icon={Icons.question4calender}
          onPress={() => setOpenDatePicker(cur => !cur)}
          label={moment(dob).format('MMM DD, YYYY')}
        />

        {isOpenDatePicker && (
          <DatePicker
            style={{
              width: screens.width,
            }}
            date={moment(dob).toDate()}
            maximumDate={moment().toDate()}
            onDateChange={value => {
              dispatch(setDob(moment(value).valueOf()));
            }}
            mode="date"
          />
        )}
      </Scroll>
    </Container>
  );
};

export default Question4;
