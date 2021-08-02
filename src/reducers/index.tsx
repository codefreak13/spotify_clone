import authSlice, {onLogin, persist, onRefresh, signOut} from './Auth';
import trackSlice, {getRecentlyPlayedTracks} from './Tracks';
import popularSlice, {getPopularPlaylists} from './PopularPlaylist';
import currentPlayBackSlice, {getCurentPlayBack} from './CurrentPlayBack';
import albumsSlice, {getSavedAlbums} from './Albums';
import selectedTrackSlice, {
  getTrackList,
  getsingleTrack,
} from './SelectedTrack';

export {
  authSlice,
  onLogin,
  onRefresh,
  persist,
  signOut,
  trackSlice,
  getRecentlyPlayedTracks,
  popularSlice,
  getPopularPlaylists,
  currentPlayBackSlice,
  getCurentPlayBack,
  albumsSlice,
  getSavedAlbums,
  selectedTrackSlice,
  getTrackList,
  getsingleTrack,
};
