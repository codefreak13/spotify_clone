import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import api from '../../api';

export interface authState {
  trackList: {
    loading: boolean;
    data: [];
    error: {};
    token: boolean;
  };
  singleTrack: {};
}

const initialState: authState = {
  trackList: {
    loading: false,
    data: [],
    error: {},
    token: false,
  },
  singleTrack: {},
};

const getTrackList = createAsyncThunk(
  'selected/track_list',
  async (id: any) => {
    try {
      let rawData = await api.get(`albums/${id}/tracks`);
      const trackList = rawData?.data?.items;
      return trackList;
    } catch (error) {
      console.log(JSON.stringify(error), 'error');
    }
  },
);

const selectedTrackSlice = createSlice({
  name: 'selectedTrack',
  initialState,
  reducers: {
    getsingleTrack: (state, action) => {
      state.singleTrack = action.payload;
    },
  },
  extraReducers: {
    [getTrackList.pending.type]: (state, action) => {
      state.trackList = {
        loading: true,
        data: [],
        error: {},
        token: false,
      };
    },
    [getTrackList.fulfilled.type]: (state, action) => {
      state.trackList = {
        loading: false,
        data: action.payload,
        error: {},
        token: true,
      };
    },
    [getTrackList.rejected.type]: (state, action) => {
      state.trackList = {
        loading: false,
        data: [],
        error: action.payload,
        token: false,
      };
    },
  },
});

const {
  actions: {getsingleTrack},
} = selectedTrackSlice;

export {getTrackList, getsingleTrack};
export default selectedTrackSlice.reducer;
