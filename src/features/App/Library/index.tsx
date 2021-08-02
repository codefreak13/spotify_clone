import React from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import {Avatar} from 'react-native-elements';
import {useSelector, useDispatch} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import shortid from 'shortid';

import {SignOut} from '../../../components';
import Player from '../PlayerModule';
import {getTrackList, getsingleTrack} from '../../../reducers';
import Styles from './styles';

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
    <View style={Styles.main}>
      <FlatList
        renderItem={_renderItem}
        data={data}
        keyExtractor={() => shortid.generate()}
        ListHeaderComponent={
          <>
            <View style={Styles.body}>
              <View style={{flexDirection: 'row'}}>
                <Avatar rounded title="A" />
                <Text style={Styles.title}>Your Library</Text>
              </View>
              <View style={Styles.icons}>
                <Ionicons name="search-outline" color="#fff" size={25} />
                <Ionicons name="add-outline" color="#fff" size={25} />
              </View>
            </View>

            <View style={Styles.card}>
              <View style={Styles.recent}>
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
    <TouchableOpacity onPress={onPress} style={Styles.cardContainer}>
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
