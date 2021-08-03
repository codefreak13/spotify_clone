import React, { useEffect } from 'react';
import { Text, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { RootState } from '../../../store';
import {
  getCurentPlayBack,
  getPopularPlaylists,
  getRecentlyPlayedTracks,
  getSavedAlbums,
  onRefresh,
} from '../../../reducers';
import { Carousel, SignOut } from '../../../components';
import Player from '../PlayerModule';
import Greeting from '../../../Utils/greeting';
import Styles from './styles';

interface Props {
  navigation: any;
}

const Home: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { trackData } = useSelector((state: RootState) => state.tracks);
  const { popularData } = useSelector((state: RootState) => state.popular);

  useEffect(() => {
    const bootstrapAsync = async () => {
      await Promise.all([
        dispatch(getRecentlyPlayedTracks()),
        dispatch(getPopularPlaylists()),
        dispatch(getCurentPlayBack()),
        dispatch(getSavedAlbums()),
      ]);
    };
    bootstrapAsync();
    refresh();

    const interval = setInterval(() => {
      refresh();
    }, 600000);
    return () => clearInterval(interval);
  }, []);

  const refresh = async () => {
    const currentTime = new Date(new Date().getTime());
    let expiryTime = await AsyncStorage.getItem('expiryDate');

    const timeCheck =
      expiryTime && new Date(currentTime) > new Date(expiryTime);

    return timeCheck ? dispatch(onRefresh()) : '';
  };

  return (
    <>
      <ScrollView style={Styles.main} contentContainerStyle={{ padding: 10 }}>
        <Greeting />
        {trackData.data && (
          <>
            <Text style={Styles.title}>Recently Played</Text>
            <Carousel items={trackData && trackData.data} type="recent" />
          </>
        )}
        {popularData.data && (
          <>
            <Text style={Styles.title}>Popular new releases</Text>
            <Carousel items={popularData && popularData.data} type="popular" />
          </>
        )}
      </ScrollView>
      <SignOut />
      <Player navigation={navigation} />
    </>
  );
};

export default Home;
