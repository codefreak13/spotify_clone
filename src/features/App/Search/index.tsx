import React from 'react';
import {View, Text} from 'react-native';
import {SearchBar} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Player from '../PlayerModule';
import {SignOut} from '../../../components';

interface Props {
  navigation: any;
}

const Search: React.FC<Props> = ({navigation}) => {
  return (
    <View
      style={{
        backgroundColor: 'rgb(18,18,18)',
        flex: 1,
        padding: 15,
        paddingTop: 30,
        width: '100%',
      }}>
      <Text style={{fontWeight: 'bold', fontSize: 30, color: 'white'}}>
        Search
      </Text>
      <View
        style={{
          width: '100%',
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <SearchBar
          placeholder="Artists, songs, or podcasts"
          containerStyle={{
            backgroundColor: 'white',
            borderRadius: 5,
            marginVertical: 20,
            width: '85%',
            alignSelf: 'flex-start',
            height: 60,
          }}
          inputContainerStyle={{backgroundColor: 'white'}}
        />
        <Ionicons name="mic-outline" color="#fff" size={33} />
      </View>
      <SignOut />
      <Player navigation={navigation} />
    </View>
  );
};

export default Search;
