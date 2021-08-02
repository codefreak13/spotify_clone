import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import api from '../../api';

export interface authState {
  savedAlbums: {
    loading: boolean;
    data: [];
    error: {};
    token: boolean;
  };
}

const initialState: authState = {
  savedAlbums: {
    loading: false,
    data: [],
    error: {},
    token: false,
  },
};

const getSavedAlbums = createAsyncThunk('album/saved_albums', async () => {
  try {
    let rawData = await api.get('me/albums');
    const albums = rawData?.data?.items;
    return albums;
  } catch (error) {}
});

const albumsSlice = createSlice({
  name: 'album',
  initialState,
  reducers: {},
  extraReducers: {
    [getSavedAlbums.pending.type]: (state, action) => {
      state.savedAlbums = {
        loading: true,
        data: [],
        error: {},
        token: false,
      };
    },
    [getSavedAlbums.fulfilled.type]: (state, action) => {
      state.savedAlbums = {
        loading: false,
        data: action.payload,
        error: {},
        token: true,
      };
    },
    [getSavedAlbums.rejected.type]: (state, action) => {
      state.savedAlbums = {
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
} = albumsSlice;

export {getSavedAlbums};
export default albumsSlice.reducer;
