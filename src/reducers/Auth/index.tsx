import {createSlice, createAsyncThunk, AnyAction} from '@reduxjs/toolkit';
import {authorize, refresh} from 'react-native-app-auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {spotifyAuthConfig} from '../../features/Auth/Config';

export interface authState {
  loginData: {
    loading: boolean;
    data: {};
    error: {};
    token: boolean;
  };
}

const initialState: authState = {
  loginData: {
    loading: false,
    data: {},
    error: {},
    token: false,
  },
};

const onLogin = createAsyncThunk('auth/authorize', async () => {
  try {
    const result = await authorize(spotifyAuthConfig);
    await AsyncStorage.setItem('token', result?.accessToken);
    await AsyncStorage.setItem('expiryDate', result?.accessTokenExpirationDate);
    await AsyncStorage.setItem('refreshToken', result?.refreshToken);
    return result;
  } catch (error) {
    console.log(JSON.stringify(error));
  }
});

const onRefresh = createAsyncThunk('auth/refresh', async () => {
  try {
    let refreshToken;

    if ((await AsyncStorage.getItem('refreshToken')) != null) {
      refreshToken = await AsyncStorage.getItem('refreshToken');
    }

    const result = await refresh(spotifyAuthConfig, {
      refreshToken: refreshToken ? refreshToken : '',
    });
    await AsyncStorage.setItem('token', result?.accessToken);
    await AsyncStorage.setItem('expiryDate', result?.accessTokenExpirationDate);
    await AsyncStorage.setItem('refreshToken', result?.refreshToken!);
    return result;
  } catch (error) {
    console.log(JSON.stringify(error));
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    persist: state => {
      state.loginData = {
        ...state.loginData,
        token: true,
      };
    },
    signOut: state => {
      state.loginData = {
        ...state.loginData,
        token: false,
      };
    },
  },
  extraReducers: {
    [onLogin.pending.type]: (state, action) => {
      state.loginData = {
        loading: true,
        data: {},
        error: {},
        token: false,
      };
    },
    [onLogin.fulfilled.type]: (state, action) => {
      state.loginData = {
        loading: false,
        data: action.payload,
        error: {},
        token: true,
      };
    },
    [onLogin.rejected.type]: (state, action) => {
      state.loginData = {
        loading: false,
        data: {},
        error: action.payload,
        token: false,
      };
    },
    [onRefresh.pending.type]: (state, action) => {
      state.loginData = {
        loading: true,
        data: {},
        error: {},
        token: false,
      };
    },
    [onRefresh.fulfilled.type]: (state, action) => {
      state.loginData = {
        loading: false,
        data: action.payload,
        error: {},
        token: true,
      };
    },
    [onRefresh.rejected.type]: (state, action) => {
      state.loginData = {
        loading: false,
        data: {},
        error: action.payload,
        token: false,
      };
    },
  },
});

const {
  actions: {persist, signOut},
} = authSlice;

export {persist, signOut, onLogin, onRefresh};
export default authSlice.reducer;
