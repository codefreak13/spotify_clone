import React from 'react';
import {TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';

import {signOut} from '../../reducers';

export default function SignOut() {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      onPress={async () => {
        await AsyncStorage.clear();
        dispatch(signOut());
      }}
      style={{
        borderRadius: 50,
        width: 50,
        height: 50,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 100,
        right: 15,
      }}>
      <Ionicons name="log-out-outline" color="#000" size={25} />
    </TouchableOpacity>
  );
}
