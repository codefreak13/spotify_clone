import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './Home';
import Search from './Search/index';
import Library from './Library';
import PlayerModule from './PlayerModule';
import PlayScreen from './PlayScreen';
import SelectedTrack from './SelectedTrack';

const Tab = createBottomTabNavigator();

function BottomNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: 'grey',
        style: {
          height: 65,
          paddingVertical: 8,
          backgroundColor: 'rgb(40,40,40)',
        },
        labelStyle: {
          fontFamily: 'Roboto',
          fontSize: 12,
          paddingBottom: 10,
        },
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = '';
          if (route.name === 'Home') {
            iconName = focused ? 'home-outline' : 'home-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search-outline' : 'search-outline';
          } else if (route.name === 'Your Library') {
            iconName = focused ? 'library-outline' : 'library-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Your Library" component={Library} />
    </Tab.Navigator>
  );
}

export {
  BottomNavigator,
  Home,
  Search,
  Library,
  PlayerModule,
  PlayScreen,
  SelectedTrack,
};
