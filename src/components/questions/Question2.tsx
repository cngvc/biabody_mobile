import React, {useMemo} from 'react';
import {Scroll} from '@components/layouts/Scroll';
import {Text} from '@components/layouts/Text';
import {useTranslation} from 'react-i18next';
import {useTheme} from 'styled-components';
import {Container} from '@components/layouts/Container';
import QuestionOption from './QuestionOption';
import {Icons} from '@assets/Images';
import {useAppDispatch, useAppSelector} from '@hooks/useConnect';
import {setGoal} from '@store/pricing.slice';

const Question2 = () => {
  const {colors, fontFamily} = useTheme();
  const {t} = useTranslation();
  const goal = useAppSelector(state => state.pricing.goal);
  const dispatch = useAppDispatch();

  const options = useMemo(() => {
    return [
      {
        icon: Icons.question2Option1,
        onPress: () => dispatch(setGoal('build-muscle')),
        selected: goal === 'build-muscle',
        label: t('question_2_option_1_label'),
        description: t('question_2_option_1_description'),
      },
      {
        icon: Icons.question2Option2,
        onPress: () => dispatch(setGoal('get-fit')),
        selected: goal === 'get-fit',
        label: t('question_2_option_2_label'),
        description: t('question_2_option_2_description'),
      },
      {
        icon: Icons.question2Option3,
        onPress: () => dispatch(setGoal('loose-weight')),
        selected: goal === 'loose-weight',
        label: t('question_2_option_3_label'),
        description: t('question_2_option_3_description'),
      },
      {
        icon: Icons.question2Option4,
        onPress: () => dispatch(setGoal('stay-healthy')),
        selected: goal === 'stay-healthy',
        label: t('question_2_option_4_label'),
        description: t('question_2_option_4_description'),
      },
    ];
  }, [t, dispatch, goal]);

  return (
    <Container px={16}>
      <Scroll>
        <Text mb={24} fontSize={20} fontFamily={fontFamily.mi400}>
          {t('question_2_label')}
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
          <QuestionOption
            key={index}
            icon={e.icon}
            onPress={e.onPress}
            selected={e.selected}
            label={e.label}
            description={e.description}
          />
        ))}
      </Scroll>
    </Container>
  );
};

export default Question2;
