import React from 'react';
import {Text, View, Image, TouchableWithoutFeedback} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

import Styles from './styles';

interface Props {
  navigation: any;
}

const PlayerModule: React.FC<Props> = ({navigation}) => {
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
      <View style={Styles.main}>
        <View style={Styles.imageContainer}>
          <Image source={{uri: image}} style={{width: 75, height: '100%'}} />
          <View style={Styles.title}>
            <Text style={{color: '#fff'}}>{trackName}</Text>
            <Text style={{color: 'grey'}}>{artist}</Text>
          </View>
        </View>
        <View style={Styles.icon}>
          <Ionicons name="phone-portrait-outline" color="#fff" size={25} />
          <FontAwesome name="play" color="#fff" size={20} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  ) : null;
};

export default PlayerModule;
