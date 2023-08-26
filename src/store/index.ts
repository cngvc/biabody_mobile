import {
  configureStore,
  combineReducers,
  ThunkDispatch,
  Action,
  AnyAction,
} from '@reduxjs/toolkit';

import commonSlice, {CommonState, initialState as common} from './common.slice';
import pricingSlice, {
  PricingState,
  initialState as pricing,
} from './pricing.slice';

export interface RootState {
  common: CommonState;
  pricing: PricingState;
}

const initialState: RootState = {
  common: {...common},
  pricing: {...pricing},
};

const appReducer = combineReducers<RootState>({
  common: commonSlice,
  pricing: pricingSlice,
});

export const RESET_STORE = 'RESET_STORE';

const rootReducer = (state: RootState | undefined, action: AnyAction) => {
  if (action.type === RESET_STORE) {
    state = initialState;
  }
  return appReducer(state, action);
};

export type AppDispatch = ThunkDispatch<RootState, void, Action>;

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: initialState,
});
