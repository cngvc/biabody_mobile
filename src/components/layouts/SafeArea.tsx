import styled from 'styled-components/native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: ${({theme}) => theme.colors.white};
`;
