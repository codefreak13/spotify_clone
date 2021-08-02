import React from 'react';
import {Text, View, Image, TouchableWithoutFeedback} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

import {RootState, AppDispatch} from '../../../store';

interface Props {
  navigation: any;
}

const PlayerModule: React.FC<Props> = ({navigation}) => {
  const dispatch: AppDispatch = useDispatch();
  const {
    currentPlayData: {data},
  } = useSelector((state: any) => state.currentPlayBack);

  let image, trackName, artist;
  if (data) {
    image = data?.item?.album?.images[0].url;
    trackName = data?.item?.name;
    artist = data?.item?.artists[0].name;
  }

  return data ? (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('PlayScreen')}>
      <View
        style={{
          backgroundColor: 'rgb(40,40,40)',
          justifyContent: 'space-between',
          position: 'absolute',
          zIndex: 10,
          bottom: 0,
          height: '11%',
          right: 0,
          left: 0,
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            height: '100%',
            width: '70%',
          }}>
          <Image source={{uri: image}} style={{width: 75, height: '100%'}} />
          <View
            style={{
              alignItems: 'flex-start',
              paddingHorizontal: 10,
              flexWrap: 'wrap',
              width: '90%',
            }}>
            <Text style={{color: '#fff'}}>{trackName}</Text>
            <Text style={{color: 'grey'}}>{artist}</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 10,
            width: '30%',
            justifyContent: 'space-around',
          }}>
          <Ionicons name="phone-portrait-outline" color="#fff" size={25} />
          <FontAwesome name="play" color="#fff" size={20} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  ) : null;
};

export default PlayerModule;
