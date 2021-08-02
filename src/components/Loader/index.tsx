import React from 'react';
import {View, ActivityIndicator} from 'react-native';

interface Props {
  loading: boolean;
}

const Loader = (props: Props) => {
  const {loading} = props;
  return (
    <>
      {loading ? (
        <View
          style={{
            flex: 100000,
            position: 'relative',
            top: 0,
            bottom: 0,
            zIndex: 999999999999999,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgb(18,18,18)',
          }}>
          <ActivityIndicator size="large" color="white" />
        </View>
      ) : null}
    </>
  );
};

export default Loader;
