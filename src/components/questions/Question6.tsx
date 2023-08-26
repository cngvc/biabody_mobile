import React, {Fragment, useMemo} from 'react';
import {Scroll} from '@components/layouts/Scroll';
import {Text} from '@components/layouts/Text';
import {useTranslation} from 'react-i18next';
import {useTheme} from 'styled-components';
import {Container} from '@components/layouts/Container';
import {Icons} from '@assets/Images';
import {useAppDispatch, useAppSelector} from '@hooks/useConnect';
import {setAllergies} from '@store/pricing.slice';
import {Box} from '@components/layouts/Box';
import QuestionOptionSimple from './QuestionOptionSimple';

const Question5 = () => {
  const {colors, fontFamily} = useTheme();
  const {t} = useTranslation();
  const allergies = useAppSelector(state => state.pricing.allergies);
  const dispatch = useAppDispatch();

  const options = useMemo(() => {
    return [
      {
        icon: Icons.question6Option1,
        onPress: () => dispatch(setAllergies('nuts')),
        selected: allergies.includes('nuts'),
        label: t('question_6_option_1_label'),
      },
      {
        icon: Icons.question6Option2,
        onPress: () => dispatch(setAllergies('fish')),
        selected: allergies.includes('fish'),
        label: t('question_6_option_2_label'),
      },
      {
        icon: Icons.question6Option3,
        onPress: () => dispatch(setAllergies('shellfish')),
        selected: allergies.includes('shellfish'),
        label: t('question_6_option_3_label'),
      },
      {
        icon: Icons.question6Option4,
        onPress: () => dispatch(setAllergies('egg')),
        selected: allergies.includes('egg'),
        label: t('question_6_option_4_label'),
      },
      {
        icon: Icons.question6Option5,
        onPress: () => dispatch(setAllergies('milk')),
        selected: allergies.includes('milk'),
        label: t('question_6_option_5_label'),
      },
      {
        icon: Icons.question6Option6,
        onPress: () => dispatch(setAllergies('lactose')),
        selected: allergies.includes('lactose'),
        label: t('question_6_option_6_label'),
      },
      {
        icon: Icons.question6Option7,
        onPress: () => dispatch(setAllergies('gluten')),
        selected: allergies.includes('gluten'),
        label: t('question_6_option_7_label'),
      },
    ];
  }, [t, dispatch, allergies]);

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
            <QuestionOptionSimple
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
