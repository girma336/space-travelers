import { configureStore } from '@reduxjs/toolkit';
import RocketReducer from './rocketSlice';
import missionsReducer, { fetchMissionsFromApi } from './missionSlice';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
    rocket: RocketReducer,
  },
});

store.dispatch(fetchMissionsFromApi());

export default store;
