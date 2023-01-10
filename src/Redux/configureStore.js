import { configureStore } from '@reduxjs/toolkit';
import RocketReducer from './rocketSlice';

const store = configureStore({
  reducer: {
    rocket: RocketReducer,
  },
});

export default store;
