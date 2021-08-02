import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import api from '../../api';

export interface authState {
  popularData: {
    loading: boolean;
    data: [];
    error: {};
    token: boolean;
  };
}

const initialState: authState = {
  popularData: {
    loading: false,
    data: [],
    error: {},
    token: false,
  },
};

const getPopularPlaylists = createAsyncThunk(
  'popular/new_releases',
  async () => {
    try {
      let rawData = await api.get('browse/new-releases');
      const popular = rawData?.data.albums?.items;
      return popular;
    } catch (error) {
      console.log(JSON.stringify(error), 'error');
    }
  },
);

const popularSlice = createSlice({
  name: 'popular',
  initialState,
  reducers: {},
  extraReducers: {
    [getPopularPlaylists.pending.type]: (state, action) => {
      state.popularData = {
        loading: true,
        data: [],
        error: {},
        token: false,
      };
    },
    [getPopularPlaylists.fulfilled.type]: (state, action) => {
      state.popularData = {
        loading: false,
        data: action.payload,
        error: {},
        token: true,
      };
    },
    [getPopularPlaylists.rejected.type]: (state, action) => {
      state.popularData = {
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
} = popularSlice;

export {getPopularPlaylists};
export default popularSlice.reducer;
