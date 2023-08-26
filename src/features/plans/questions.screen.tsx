import React from 'react';
import {Container} from '@components/layouts/Container';
import {SafeArea} from '@components/layouts/SafeArea';
import {StatusBar} from 'react-native';
import {useTranslation} from 'react-i18next';
import QuestionProcess from '@components/questions/QuestionProcess';
import {GradientButton} from '@components/GradientButton';
import {SceneMap, TabView} from 'react-native-tab-view';
import {screens} from '@constants/sizes';
import {Box, FlexBox} from '@components/layouts/Box';
import {NUMBER_OF_QUESTIONS} from '@constants/commons';

import Question1 from '@components/questions/Question1';
import Question2 from '@components/questions/Question2';
import Question3 from '@components/questions/Question3';
import Question4 from '@components/questions/Question4';
import Question5 from '@components/questions/Question5';
import Question6 from '@components/questions/Question6';
import Question7 from '@components/questions/Question7';
import {useAppNavigation} from '@hooks/useAppNavigation';
import {SUCCESS_SCREEN} from '@constants/screens';

const sceneKeys = {
  '1': '1',
  '2': '2',
  '3': '3',
  '4': '4',
  '5': '5',
  '6': '6',
  '7': '7',
};

const scenes = SceneMap({
  [sceneKeys['1']]: Question1,
  [sceneKeys['2']]: Question2,
  [sceneKeys['3']]: Question3,
  [sceneKeys['4']]: Question4,
  [sceneKeys['5']]: Question5,
  [sceneKeys['6']]: Question6,
  [sceneKeys['7']]: Question7,
});

const Questions = () => {
  const {t} = useTranslation();
  const navigation = useAppNavigation();
  const [tabIndex, setTabIndex] = React.useState(0);

  return (
    <SafeArea>
      <StatusBar barStyle={'dark-content'} />
      <QuestionProcess
        number={tabIndex + 1}
        onBack={
          tabIndex === 0
            ? undefined
            : () => setTabIndex(cur => Math.max(cur - 1, 0))
        }
      />
      <Container>
        <FlexBox>
          <TabView
            lazy
            swipeEnabled={false}
            renderTabBar={() => null}
            overScrollMode="never"
            navigationState={{
              index: tabIndex,
              routes: [
                {key: sceneKeys['1']},
                {key: sceneKeys['2']},
                {key: sceneKeys['3']},
                {key: sceneKeys['4']},
                {key: sceneKeys['5']},
                {key: sceneKeys['6']},
                {key: sceneKeys['7']},
              ],
            }}
            renderScene={scenes}
            onIndexChange={() => {}}
            initialLayout={{width: screens.width}}
          />
        </FlexBox>
        <Box px={16}>
          <GradientButton
            mb={16}
            label={t('continue')}
            onPress={() => {
              if (tabIndex === NUMBER_OF_QUESTIONS - 1) {
                navigation.navigate(SUCCESS_SCREEN);
              }
              setTabIndex(cur => Math.min(cur + 1, NUMBER_OF_QUESTIONS - 1));
            }}
          />
        </Box>
      </Container>
    </SafeArea>
  );
};

export default Questions;
