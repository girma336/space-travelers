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

  },
  extraReducers: (builder) => {
    builder.addCase(getRock.fulfilled, (state, action) => ({
      ...state,
      rockets: action.payload,
    }));
  },
});

const RocketReducer = rockSlice.reducer;
export default RocketReducer;
