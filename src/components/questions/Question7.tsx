import React, {Fragment, useMemo} from 'react';
import {Scroll} from '@components/layouts/Scroll';
import {Text} from '@components/layouts/Text';
import {useTranslation} from 'react-i18next';
import {useTheme} from 'styled-components';
import {Container} from '@components/layouts/Container';
import {Icons} from '@assets/Images';
import {useAppDispatch, useAppSelector} from '@hooks/useConnect';
import {setHealthIssue} from '@store/pricing.slice';
import {Box} from '@components/layouts/Box';
import QuestionOptionSmall from './QuestionOptionSmall';

const Question5 = () => {
  const {colors, fontFamily} = useTheme();
  const {t} = useTranslation();
  const healthIssue = useAppSelector(state => state.pricing.healthIssue);
  const dispatch = useAppDispatch();

  const options = useMemo(() => {
    return [
      {
        icon: Icons.question7Option1,
        onPress: () => dispatch(setHealthIssue('diabetes')),
        selected: healthIssue === 'diabetes',
        label: t('question_7_option_1_label'),
      },
      {
        icon: Icons.question7Option2,
        onPress: () => dispatch(setHealthIssue('depression')),
        selected: healthIssue === 'depression',
        label: t('question_7_option_2_label'),
      },
      {
        icon: Icons.question7Option3,
        onPress: () => dispatch(setHealthIssue('pcod_pcos')),
        selected: healthIssue === 'pcod_pcos',
        label: t('question_7_option_3_label'),
      },
      {
        icon: Icons.question7Option4,
        onPress: () => dispatch(setHealthIssue('high_blood_pressure')),
        selected: healthIssue === 'high_blood_pressure',
        label: t('question_7_option_4_label'),
      },
      {
        icon: Icons.question7Option5,
        onPress: () => dispatch(setHealthIssue('eating_disorder')),
        selected: healthIssue === 'eating_disorder',
        label: t('question_7_option_5_label'),
      },
      {
        icon: Icons.question7Option6,
        onPress: () => dispatch(setHealthIssue('heart_condition')),
        selected: healthIssue === 'heart_condition',
        label: t('question_7_option_6_label'),
      },
    ];
  }, [t, dispatch, healthIssue]);

  return (
    <Container px={16}>
      <Scroll>
        <Text mb={24} fontSize={20} fontFamily={fontFamily.mi400}>
          {t('question_6_label')}
        </Text>
        <Text
          fontSize={12}
          mb={24}
          color={colors.metallic_gray}
          fontFamily={fontFamily.mo400}>
          Lorem ipsum dolor sit amet consectetur. Quisque lectus eget volutpat
          aliquet phasellus massa in ut turpis.
        </Text>

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
      </Scroll>
    </Container>
  );
};

export default Question5;
