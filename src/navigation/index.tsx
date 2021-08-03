import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { persist } from '../reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeProvider } from 'react-native-elements';

import { Loader } from '../components';
import AuthNavigator from '../features/Auth';
import {
  Home,
  Search,
  Library,
  BottomNavigator,
  PlayScreen,
  SelectedTrack,
} from '../features/App';

export type MainStackParamList = {
  BottomNavigator: undefined;
  Home: undefined;
  Search: undefined;
  Library: undefined;
  PlayScreen: undefined;
  SelectedTrack: undefined;
};

const MainStack = createStackNavigator<MainStackParamList>();

export default function App() {
  const {
    auth: { loginData: { token },
      loginData }, tracks: { trackData }, trackList: { trackList }, currentPlayBack: { currentPlayData }, albums: { savedAlbums }, popular: { popularData }
  } = useSelector((state: RootState) => state)

  const dispatch: AppDispatch = useDispatch();

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken: any;

      try {
        userToken = await AsyncStorage.getItem('token');
        userToken && dispatch(persist());
      } catch (e) { }
    };
    bootstrapAsync();
  }, []);

  return (
    <ThemeProvider>
      <NavigationContainer>
        <Loader
          loading={
            loginData.loading ||
            trackData.loading ||
            trackList.loading ||
            currentPlayData.loading ||
            savedAlbums.loading ||
            popularData.loading
          }
        />
        {token ? (
          <MainStack.Navigator
            initialRouteName="BottomNavigator"
            headerMode="none"
            screenOptions={{
              headerStyle: { elevation: 0 },
              cardStyle: { backgroundColor: 'white' },
            }}>
            <MainStack.Screen
              name="BottomNavigator"
              component={BottomNavigator}
            />
            <MainStack.Screen name="Home" component={Home} />
            <MainStack.Screen name="Search" component={Search} />
            <MainStack.Screen name="Library" component={Library} />
            <MainStack.Screen name="PlayScreen" component={PlayScreen} />
            <MainStack.Screen name="SelectedTrack" component={SelectedTrack} />
          </MainStack.Navigator>
        ) : (
          <AuthNavigator />
        )}
      </NavigationContainer>
    </ThemeProvider>
  );
}
