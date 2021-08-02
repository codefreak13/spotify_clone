import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const request = axios.create({
  timeout: 60000,
  timeoutErrorMessage:
    'Either your internet connect is not strong or you have no internet connectiom',
  baseURL: 'https://api.spotify.com/v1/',
});

class Api {
  post = async (URL: any, data?: any) => {
    try {
      let token: any = await AsyncStorage.getItem('token');
      token = token || '';
      const res = await request.post(URL, data, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      return {errorStatus: false, ...res};
    } catch (err) {
      throw err;
    }
  };

  delete = async (URL: any) => {
    try {
      let token: any = await AsyncStorage.getItem('token');
      token = token || '';
      const res = await request.delete(URL, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      return {errorStatus: false, ...res};
    } catch (err) {
      return err;
    }
  };

  get = async (URL: any) => {
    try {
      let token: any = await AsyncStorage.getItem('token');
      token = token || '';
      const res = await request.get(URL, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      return {errorStatus: false, ...res};
    } catch (err) {
      return err;
    }
  };
  put = async (URL: any, data?: any) => {
    try {
      let token: any = await AsyncStorage.getItem('token');
      token = token || '';
      const res = await request.put(URL, data, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      return {errorStatus: false, ...res};
    } catch (err) {
      return err;
    }
  };
}

export default new Api();
