import React from 'react';
import {View, Image, Text, TouchableOpacity, FlatList} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector, useDispatch} from 'react-redux';
import shortid from 'shortid';

export default function SelectedTrack({navigation}: any) {
  const {
    singleTrack: {artist, name, year, image},
    trackList: {data},
  } = useSelector((state: any) => state.trackList);

  const _renderItem = (data: any) => {
    return <Card name={data?.item?.artists[0].name} title={data?.item?.name} />;
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
            <View style={{width: '90%'}}>
              <Image
                source={{uri: image}}
                style={{width: '90%', height: 250, alignSelf: 'center'}}
                resizeMode="center"
              />
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  textAlign: 'center',
                  marginVertical: 10,
                  fontWeight: 'bold',
                }}>
                {name}
              </Text>
              <Text style={{color: 'white', fontWeight: 'bold'}}>{artist}</Text>
              <Text
                style={{
                  color: 'grey',
                  marginVertical: 10,
                }}>{`Album ${'\u25CF'} ${year}`}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 25,
                //   alignItems: 'center',
              }}>
              <View
                style={{
                  justifyContent: 'space-around',
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '40%',
                }}>
                <Ionicons name="heart-outline" color="#fff" size={30} />
                <Ionicons
                  name="arrow-down-circle-outline"
                  color="#fff"
                  size={30}
                />
                <FontAwesome name="ellipsis-h" color="#fff" size={20} />
              </View>
              <TouchableOpacity
                style={{
                  borderRadius: 70,
                  width: 70,
                  height: 70,
                  backgroundColor: '#1BD760',
                  alignItems: 'center',
                  alignSelf: 'center',
                  justifyContent: 'center',
                  marginTop: -30,
                }}>
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
    <TouchableOpacity
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
        justifyContent: 'space-between',
      }}>
      <View style={{alignSelf: 'center'}}>
        <Text style={{color: '#fff', fontSize: 20}}>{name}</Text>
        <Text style={{color: 'grey'}}>{title}</Text>
      </View>
      <FontAwesome name="ellipsis-h" color="#fff" size={20} />
    </TouchableOpacity>
  );
};
