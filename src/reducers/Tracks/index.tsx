import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import api from '../../api';

export interface authState {
  trackData: {
    loading: boolean;
    data: [];
    error: {};
    token: boolean;
  };
}

const initialState: authState = {
  trackData: {
    loading: false,
    data: [],
    error: {},
    token: false,
  },
};

const getRecentlyPlayedTracks = createAsyncThunk(
  'track/recently_played',
  async () => {
    try {
      let rawData = await api.get('me/player/recently-played');
      const tracks = rawData?.data?.items.map((i: any) => i.track);
      return tracks;
    } catch (error) {
      console.log(JSON.stringify(error), 'error');
    }
  },
);

const trackSlice = createSlice({
  name: 'track',
  initialState,
  reducers: {},
  extraReducers: {
    [getRecentlyPlayedTracks.pending.type]: (state, action) => {
      state.trackData = {
        loading: true,
        data: [],
        error: {},
        token: false,
      };
    },
    [getRecentlyPlayedTracks.fulfilled.type]: (state, action) => {
      state.trackData = {
        loading: false,
        data: action.payload,
        error: {},
        token: true,
      };
    },
    [getRecentlyPlayedTracks.rejected.type]: (state, action) => {
      state.trackData = {
        loading: false,
        data: [],
        error: action.payload,
        token: false,
      };
    },
  },
});

const {
  actions: {},
} = trackSlice;

export {getRecentlyPlayedTracks};
export default trackSlice.reducer;
