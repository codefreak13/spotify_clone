import React from 'react';
import {View, Text} from 'react-native';
import {SearchBar} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Player from '../PlayerModule';
import {SignOut} from '../../../components';
import Styles from './styles';

interface Props {
  navigation: any;
}

const Search: React.FC<Props> = ({navigation}) => {
  return (
    <View style={Styles.main}>
      <Text style={{fontWeight: 'bold', fontSize: 30, color: 'white'}}>
        Search
      </Text>
      <View style={Styles.search}>
        <SearchBar
          placeholder="Artists, songs, or podcasts"
          containerStyle={Styles.searchBar}
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
