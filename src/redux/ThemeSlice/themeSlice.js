import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dark: false,

  // default mode
  colors: {
    bgColor: '#000000',
    secondBg: '#121212',
    thirdBg: '#202020',
    textColor: '#fff',
  },
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.dark = !state.dark;
      if (state.dark) {
        // light mode
        state.colors = {
            bgColor: '#DFDFDF',
            secondBg: '#EFEFEF',
            thirdBg: '#FDFDFD',
            textColor: '#000',
        };

      }
    //   Dark mode 
      else {
        state.colors = {
            bgColor: '#000000',
            secondBg: '#121212',
            thirdBg: '#202020',
            textColor: '#fff',
        };
      }
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
