import {createSlice} from '@reduxjs/toolkit';

export interface CommonState {
  language: 'gb' | 'de';
}

export const initialState: CommonState = {
  language: 'gb',
};

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const {setLanguage} = commonSlice.actions;
export default commonSlice.reducer;
