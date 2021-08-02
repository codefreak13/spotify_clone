import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {useDispatch} from 'react-redux';

import {onLogin} from '../../../reducers';
import Styles from './styles';

const LoginScreen = () => {
  const dispatch = useDispatch();

  return (
    <View style={Styles.main}>
      <TouchableOpacity
        style={Styles.buttonSytle}
        onPress={async () => {
          const res = await dispatch(onLogin());
        }}>
        <Text style={Styles.buttonText}>Spotify Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
