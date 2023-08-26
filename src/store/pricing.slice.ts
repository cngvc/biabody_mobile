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

  heightInt: number;
  heightDecimal: number;
  heightUnit: 'lb' | 'ft';

  weightInt: number;
  weightDecimal: number;
  weightUnit: 'lbs' | 'kg';
}

export const initialState: PricingState = {
  plan: 'annual',
  goal: 'get-fit',
  sex: 'male',
  dietary: 'gluten-free',
  allergies: [],
  healthIssue: 'diabetes',
  dob: moment().valueOf(),

  heightInt: 5,
  heightDecimal: 10,
  heightUnit: 'ft',

  weightInt: 60,
  weightDecimal: 0,
  weightUnit: 'kg',
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
    setHeightInt: (state, action) => {
      state.heightInt = action.payload;
    },
    setHeightDecimal: (state, action) => {
      state.heightDecimal = action.payload;
    },
    setHeightUnit: (state, action) => {
      state.heightUnit = action.payload;
    },

    setWeightInt: (state, action) => {
      state.weightInt = action.payload;
    },
    setWeightDecimal: (state, action) => {
      state.weightDecimal = action.payload;
    },
    setWeightUnit: (state, action) => {
      state.weightUnit = action.payload;
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
  setHeightInt,
  setHeightDecimal,
  setHeightUnit,
  setWeightInt,
  setWeightDecimal,
  setWeightUnit,
} = pricingSlice.actions;
export default pricingSlice.reducer;
