import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const {Navigator, Screen} = createStackNavigator();

import Login from './Login';

const AuthNavigator = () => (
  <Navigator headerMode="none">
    <Screen name="Login" component={Login} />
  </Navigator>
);

export default AuthNavigator;
