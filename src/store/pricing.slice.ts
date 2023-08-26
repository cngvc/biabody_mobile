import {createSlice} from '@reduxjs/toolkit';

export interface PricingState {
  plan: 'basic' | 'annual';
}

export const initialState: PricingState = {
  plan: 'annual',
};

export const pricingSlice = createSlice({
  name: 'pricing',
  initialState,
  reducers: {
    setPlan: (state, action) => {
      state.plan = action.payload;
    },
  },
});

export const {setPlan} = pricingSlice.actions;
export default pricingSlice.reducer;
