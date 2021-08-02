import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {
  albumsSlice,
  authSlice,
  currentPlayBackSlice,
  popularSlice,
  selectedTrackSlice,
  trackSlice,
} from './reducers';
import thunkMiddleware from 'redux-thunk';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    tracks: trackSlice,
    popular: popularSlice,
    currentPlayBack: currentPlayBackSlice,
    albums: albumsSlice,
    trackList: selectedTrackSlice,
  },
  middleware: [
    ...getDefaultMiddleware({immutableCheck: false, serializableCheck: false}),
    thunkMiddleware,
  ],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
