import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import api from '../../api';

export interface authState {
  currentPlayData: {
    loading: boolean;
    data: {};
    error: {};
    token: boolean;
  };
}

const initialState: authState = {
  currentPlayData: {
    loading: false,
    data: {},
    error: {},
    token: false,
  },
};

const getCurentPlayBack = createAsyncThunk(
  'me/player/currently-playing',
  async () => {
    try {
      let rawData = await api.get('me/player');
      const current = rawData.data;
      return current;
    } catch (error) {
      console.log(JSON.stringify(error), 'error');
    }
  },
);

const currentPlayBackSlice = createSlice({
  name: 'popular',
  initialState,
  reducers: {},
  extraReducers: {
    [getCurentPlayBack.pending.type]: (state, action) => {
      state.currentPlayData = {
        loading: true,
        data: {},
        error: {},
        token: false,
      };
    },
    [getCurentPlayBack.fulfilled.type]: (state, action) => {
      state.currentPlayData = {
        loading: false,
        data: action.payload,
        error: {},
        token: true,
      };
    },
    [getCurentPlayBack.rejected.type]: (state, action) => {
      state.currentPlayData = {
        loading: false,
        data: {},
        error: action.payload,
        token: false,
      };
    },
  },
});

const {
  actions: {},
} = currentPlayBackSlice;

export {getCurentPlayBack};
export default currentPlayBackSlice.reducer;
