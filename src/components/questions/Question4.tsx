import React, {Fragment, useMemo} from 'react';
import {Scroll} from '@components/layouts/Scroll';
import {Text} from '@components/layouts/Text';
import {useTranslation} from 'react-i18next';
import {useTheme} from 'styled-components';
import {Container} from '@components/layouts/Container';
import {Icons} from '@assets/Images';
import {useAppDispatch, useAppSelector} from '@hooks/useConnect';
import {setSex} from '@store/pricing.slice';
import {Box} from '@components/layouts/Box';
import QuestionOptionSmall from './QuestionOptionSmall';

const Question4 = () => {
  const {colors, fontFamily} = useTheme();
  const {t} = useTranslation();
  const sex = useAppSelector(state => state.pricing.sex);
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
              <QuestionOptionSmall
                icon={e.icon}
                onPress={e.onPress}
                selected={e.selected}
                label={e.label}
              />
              {index <= options.length - 1 && <Box width={8} />}
            </Fragment>
          ))}
        </Box>
      </Scroll>
    </Container>
  );
};

export default Question4;
