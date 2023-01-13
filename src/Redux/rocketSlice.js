import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetchRockete from './api/fetchRocket';
// Action creator

const FETCH_ROCK = 'space-travelers/fetch-rock';

export const getRock = createAsyncThunk(FETCH_ROCK, async () => {
  try {
    const response = await fetchRockete();
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
});

const rockSlice = createSlice({
  name: 'rocket',
  initialState: {
    rockets: [],
  },
  reducers: {
    bookRocket(state, action) {
      const newId = action.payload;
      const newState = state.rockets.map((rocket) => {
        if (rocket.id !== newId) return rocket;
        return { ...rocket, reserved: true };
      });
      return {
        ...state,
        rockets: newState,
      };
    },
    removeRocket(state, action) {
      const newId = action.payload;
      const newState = state.rockets.map((rocket) => {
        if (rocket.id !== newId) return rocket;
        return { ...rocket, reserved: false };
      });
      return {
        ...state,
        rockets: newState,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRock.fulfilled, (state, action) => ({
      ...state,
      rockets: action.payload,
    }));
  },
});

export const { bookRocket, removeRocket } = rockSlice.actions;
const RocketReducer = rockSlice.reducer;
export default RocketReducer;
