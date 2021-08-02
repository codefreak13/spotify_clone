import Config from 'react-native-config';

export const spotifyAuthConfig = {
  clientId: 'ad8279d60c8a4c818000d7de3e47c29e',
  clientSecret: Config.CLIENT_SECRET,
  redirectUrl: 'com.spotifyclone:/oauthredirect',
  scopes: [
    'playlist-read-private',
    'playlist-modify-public',
    'playlist-modify-private',
    'user-library-read',
    'user-library-modify',
    'user-top-read',
    'user-read-currently-playing',
    'user-read-playback-position',
    'user-read-recently-played',
    'user-read-playback-state',
  ],
  serviceConfiguration: {
    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
    tokenEndpoint: 'https://accounts.spotify.com/api/token',
  },
};
