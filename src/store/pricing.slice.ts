import {createSlice} from '@reduxjs/toolkit';

export interface PricingState {
  plan: 'basic' | 'annual';
  goal: 'build-muscle' | 'get-fit' | 'loose-weight' | 'stay-healthy';
  sex: 'male' | 'female' | 'others';
  dietary: 'gluten-free' | 'vegan' | 'vegetarian';
  allergies: (
    | 'nuts'
    | 'fish'
    | 'shellfish'
    | 'egg'
    | 'milk'
    | 'lactose'
    | 'gluten'
  )[];
}

export const initialState: PricingState = {
  plan: 'annual',
  goal: 'get-fit',
  sex: 'male',
  dietary: 'gluten-free',
  allergies: [],
};

export const pricingSlice = createSlice({
  name: 'pricing',
  initialState,
  reducers: {
    setPlan: (state, action) => {
      state.plan = action.payload;
    },
    setGoal: (state, action) => {
      state.goal = action.payload;
    },
    setSex: (state, action) => {
      state.sex = action.payload;
    },
    setDietary: (state, action) => {
      state.dietary = action.payload;
    },
    setAllergies: (state, action) => {
      const allergies = [...state.allergies];
      if (allergies.indexOf(action.payload) !== -1) {
        allergies.splice(allergies.indexOf(action.payload), 1);
      } else {
        allergies.push(action.payload);
      }
      state.allergies = allergies;
    },
  },
});

export const {setPlan, setGoal, setSex, setDietary, setAllergies} =
  pricingSlice.actions;
export default pricingSlice.reducer;
