import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../ThemeSlice/themeSlice.js';

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export default store;
