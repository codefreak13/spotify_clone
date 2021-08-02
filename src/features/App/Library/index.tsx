import React from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import {Avatar} from 'react-native-elements';
import {useSelector, useDispatch} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import shortid from 'shortid';

import {SignOut} from '../../../components';
import Player from '../PlayerModule';
import {getTrackList, getsingleTrack} from '../../../reducers';

interface Props {
  navigation: any;
}

const Library: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch();
  const {
    savedAlbums: {data},
  } = useSelector((state: any) => state.albums);
  const {trackList} = useSelector((state: any) => state.trackList);

  const _renderItem = (data: any) => {
    const item = data?.item?.album;

    const routeData = {
      albumId: item?.id,
      year: item?.release_date.slice(0, 4),
      artist: item?.artists[0].name,
      name: item?.name,
      image: item?.images[0]?.url,
    };

    return (
      <Card
        name={item?.name}
        type={item?.album_type}
        image={item?.images[1]?.url}
        onPress={async () => {
          await dispatch(getsingleTrack(routeData));
          const _trackList = await dispatch(getTrackList(item?.id));
          trackList.data && navigation.navigate('SelectedTrack');
        }}
      />
    );
  };

  return (
    <View
      style={{
        backgroundColor: 'rgb(18,18,18)',
        flex: 1,
        padding: 15,
        paddingTop: 30,
        width: '100%',
      }}>
      <FlatList
        renderItem={_renderItem}
        data={data}
        keyExtractor={() => shortid.generate()}
        ListHeaderComponent={
          <>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row'}}>
                <Avatar rounded title="A" />
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 30,
                    color: 'white',
                    marginLeft: 10,
                  }}>
                  Your Library
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  width: '25%',
                  justifyContent: 'space-between',
                }}>
                <Ionicons name="search-outline" color="#fff" size={25} />
                <Ionicons name="add-outline" color="#fff" size={25} />
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                justifyContent: 'space-between',
                marginTop: 20,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '35%',
                  justifyContent: 'space-between',
                }}>
                <Ionicons name="swap-vertical-outline" color="#fff" size={25} />
                <Text style={{color: 'white'}}>Recently Played</Text>
              </View>
              <Ionicons name="apps-outline" color="#fff" size={25} />
            </View>
          </>
        }
      />
      <SignOut />
      <Player navigation={navigation} />
    </View>
  );
};

export default Library;

const Card = ({
  image,
  name,
  type,
  onPress,
}: {
  image?: any;
  type: string;
  name: string;
  onPress?: () => void;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
      }}>
      <Image
        source={{uri: image}}
        style={{width: 70, height: 70, marginRight: 10}}
      />
      <View style={{alignSelf: 'center'}}>
        <Text style={{color: '#fff', fontSize: 15}}>{name}</Text>
        <Text style={{color: 'grey'}}>{type}</Text>
      </View>
    </TouchableOpacity>
  );
};
