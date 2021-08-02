import React from 'react';
import {View, Text} from 'react-native';

export default function Greeting() {
  const d = new Date();
  const hours = d.getHours();

  const greeting =
    hours < 12
      ? 'Good morning'
      : hours <= 18 && hours >= 12
      ? 'Good afternoon'
      : 'Good evening';
  return (
    <View style={{marginVertical: 20}}>
      <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 25}}>
        {greeting}
      </Text>
    </View>
  );
}
