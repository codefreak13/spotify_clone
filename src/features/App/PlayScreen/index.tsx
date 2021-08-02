import React from 'react';
import {useSelector} from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {LinearProgress} from 'react-native-elements';

import {colors} from '../../../Utils/colors';
import {formatTime, playRate} from '../../../Utils/formatTime';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';

interface Props {
  navigation: any;
  presentation: any;
}

const PlayScreen: React.FC<Props> = ({navigation, presentation}) => {
  const {
    currentPlayData: {data},
    currentPlayData,
  } = useSelector((state: any) => state.currentPlayBack);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      presentation: 'modal',
    });
  }, [navigation]);

  let image, trackName, artist, albumName, duration, progress, trackPlayRate;
  if (data) {
    image = data?.item?.album?.images[0].url;
    trackName = data?.item?.name;
    artist = data?.item?.artists[0].name;
    albumName = data?.item?.album?.name;
    progress = data?.progress_ms;
    duration = data?.item?.duration_ms;
    trackPlayRate = playRate(progress, duration);
  }

  return (
    <ScrollView
      style={{
        backgroundColor: colors.primary,
        flex: 1,
        padding: 20,
        width: '100%',
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <FontAwesome
          name="chevron-down"
          color={colors.white}
          size={20}
          onPress={() => navigation.popToTop()}
        />
        <Text style={{color: '#fff'}}>PLAYING SONG</Text>
        <FontAwesome name="ellipsis-v" color={colors.white} size={20} />
      </View>
      <View style={{marginTop: 20, width: '95%', alignSelf: 'center'}}>
        <Image
          source={{uri: image}}
          style={{width: '100%', height: 320, alignSelf: 'center'}}
          resizeMode="cover"
        />
        <Text
          style={{
            color: colors.white,
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          {trackName}
        </Text>
        <Text style={{color: colors.grey}}>{artist}</Text>
        <LinearProgress
          color="white"
          variant="determinate"
          trackColor="grey"
          value={trackPlayRate}
          style={{marginTop: 20}}
        />
        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{color: '#fff'}}>{formatTime(progress)}</Text>
          <Text style={{color: '#fff'}}>{formatTime(duration)}</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 25,
            alignItems: 'center',
          }}>
          <Ionicons name="heart-outline" color="#fff" size={30} />
          <FontAwesome name="step-backward" color="grey" size={25} />
          <TouchableOpacity
            style={{
              borderRadius: 70,
              width: 70,
              height: 70,
              backgroundColor: '#fff',
              alignItems: 'center',
              alignSelf: 'center',
              justifyContent: 'center',
            }}>
            <FontAwesome name="play" color="#000" size={25} />
          </TouchableOpacity>
          <FontAwesome name="step-forward" color="#fff" size={25} />
          <Ionicons name="remove-circle-outline" color="#fff" size={30} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 40,
          }}>
          <Ionicons name="phone-portrait-outline" color="#fff" size={25} />
          <FontAwesome name="share-alt" color="#fff" size={25} />
        </View>
      </View>
    </ScrollView>
  );
};

export default PlayScreen;
