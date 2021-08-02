import React from 'react';
import {useSelector} from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {LinearProgress} from 'react-native-elements';

import {formatTime, playRate} from '../../../Utils/formatTime';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import Styles from './styles';
import {colors} from '../../../Utils/colors';

interface Props {
  navigation: any;
  presentation: any;
}

const PlayScreen: React.FC<Props> = ({navigation, presentation}) => {
  const {
    currentPlayData: {data},
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
    <ScrollView style={Styles.scroll}>
      <View style={Styles.main}>
        <FontAwesome
          name="chevron-down"
          color={colors.white}
          size={20}
          onPress={() => navigation.popToTop()}
        />
        <Text style={{color: '#fff'}}>PLAYING SONG</Text>
        <FontAwesome name="ellipsis-v" color={colors.white} size={20} />
      </View>
      <View style={Styles.imageContainer}>
        <Image source={{uri: image}} style={Styles.image} resizeMode="cover" />
        <Text style={Styles.title}>{trackName}</Text>
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

        <View style={Styles.icons}>
          <Ionicons name="heart-outline" color="#fff" size={30} />
          <FontAwesome name="step-backward" color="grey" size={25} />
          <TouchableOpacity style={Styles.playContainer}>
            <FontAwesome name="play" color="#000" size={25} />
          </TouchableOpacity>
          <FontAwesome name="step-forward" color="#fff" size={25} />
          <Ionicons name="remove-circle-outline" color="#fff" size={30} />
        </View>
        <View style={Styles.otherIcons}>
          <Ionicons name="phone-portrait-outline" color="#fff" size={25} />
          <FontAwesome name="share-alt" color="#fff" size={25} />
        </View>
      </View>
    </ScrollView>
  );
};

export default PlayScreen;
