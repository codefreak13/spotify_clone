import {Provider} from 'react-redux';
import {StatusBar, View, SafeAreaView} from 'react-native';
import {store} from './store';
import Screens from './navigation';
import React from 'react';

export default function App() {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <SafeAreaView style={{flex: 1, paddingTop: 20}}>
          <StatusBar
            barStyle="light-content"
            hidden={false}
            backgroundColor="rgb(18,18,18)"
            translucent={true}
          />
          <Screens />
        </SafeAreaView>
      </View>
    </Provider>
  );
}
