import React, {Fragment, useMemo} from 'react';
import {Scroll} from '@components/layouts/Scroll';
import {Text} from '@components/layouts/Text';
import {useTranslation} from 'react-i18next';
import {useTheme} from 'styled-components';
import {Container} from '@components/layouts/Container';
import {Icons} from '@assets/Images';
import {useAppDispatch, useAppSelector} from '@hooks/useConnect';
import {setDietary} from '@store/pricing.slice';
import {Box} from '@components/layouts/Box';
import QuestionOptionSmall from './QuestionOptionSmall';

const Question5 = () => {
  const {colors, fontFamily} = useTheme();
  const {t} = useTranslation();
  const dietary = useAppSelector(state => state.pricing.dietary);
  const dispatch = useAppDispatch();

  const options = useMemo(() => {
    return [
      {
        icon: Icons.question5Option1,
        onPress: () => dispatch(setDietary('gluten-free')),
        selected: dietary === 'gluten-free',
        label: t('question_5_option_1_label'),
      },
      {
        icon: Icons.question5Option2,
        onPress: () => dispatch(setDietary('vegan')),
        selected: dietary === 'vegan',
        label: t('question_5_option_2_label'),
      },
      {
        icon: Icons.question5Option3,
        onPress: () => dispatch(setDietary('vegetarian')),
        selected: dietary === 'vegetarian',
        label: t('question_5_option_3_label'),
      },
    ];
  }, [t, dispatch, dietary]);

  return (
    <Container px={16}>
      <Scroll>
        <Text mb={24} fontSize={20} fontFamily={fontFamily.mi400}>
          {t('question_5_label')}
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
