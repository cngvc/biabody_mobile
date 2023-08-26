import {createSlice} from '@reduxjs/toolkit';
import moment from 'moment';

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
  healthIssue:
    | 'diabetes'
    | 'depression'
    | 'pcod_pcos'
    | 'high_blood_pressure'
    | 'eating_disorder'
    | 'heart_condition';
  dob: number;
}

export const initialState: PricingState = {
  plan: 'annual',
  goal: 'get-fit',
  sex: 'male',
  dietary: 'gluten-free',
  allergies: [],
  healthIssue: 'diabetes',
  dob: moment().valueOf(),
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
    setDob: (state, action) => {
      state.dob = action.payload;
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
    setHealthIssue: (state, action) => {
      state.healthIssue = action.payload;
    },
  },
});

export const {
  setPlan,
  setGoal,
  setSex,
  setDob,
  setDietary,
  setAllergies,
  setHealthIssue,
} = pricingSlice.actions;
export default pricingSlice.reducer;
