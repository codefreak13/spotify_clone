import React from 'react';
import {View, Image, Text, TouchableOpacity, FlatList} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import shortid from 'shortid';

import Styles from './styles';

export default function SelectedTrack() {
  const {
    singleTrack: {artist, name, year, image},
    trackList: {data},
  } = useSelector((state: any) => state.trackList);

  const _renderItem = (data: any) => {
    return <Card name={data?.item?.artists[0].name} title={data?.item?.name} />;
  };

  return (
    <View style={Styles.main}>
      <FlatList
        renderItem={_renderItem}
        data={data}
        keyExtractor={() => shortid.generate()}
        ListHeaderComponent={
          <>
            <View style={{width: '90%'}}>
              <Image
                source={{uri: image}}
                style={{width: '90%', height: 250, alignSelf: 'center'}}
                resizeMode="center"
              />
              <Text style={Styles.title}>{name}</Text>
              <Text style={Styles.artist}>{artist}</Text>
              <Text
                style={{
                  color: 'grey',
                  marginVertical: 10,
                }}>{`Album ${'\u25CF'} ${year}`}</Text>
            </View>
            <View style={Styles.icons}>
              <View style={Styles.icon}>
                <Ionicons name="heart-outline" color="#fff" size={30} />
                <Ionicons
                  name="arrow-down-circle-outline"
                  color="#fff"
                  size={30}
                />
                <FontAwesome name="ellipsis-h" color="#fff" size={20} />
              </View>
              <TouchableOpacity style={Styles.playContainer}>
                <FontAwesome name="play" color="#000" size={25} />
              </TouchableOpacity>
            </View>
          </>
        }
      />
    </View>
  );
}

const Card = ({name, title}: {title: string; name: string}) => {
  return (
    <TouchableOpacity style={Styles.card}>
      <View style={{alignSelf: 'center'}}>
        <Text style={{color: '#fff', fontSize: 20}}>{name}</Text>
        <Text style={{color: 'grey'}}>{title}</Text>
      </View>
      <FontAwesome name="ellipsis-h" color="#fff" size={20} />
    </TouchableOpacity>
  );
};
