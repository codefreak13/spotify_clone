import React, {FC} from 'react';
import {TouchableOpacity, Image, Text, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const Card = ({
  image,
  title,
  onPress,
}: {
  image: any;
  title: string;
  onPress: () => void;
}) => (
  <TouchableOpacity onPress={onPress} style={{flex: 1, width: 130}}>
    <Image source={image} style={{width: 130, height: 130}} />
    <Text style={{color: '#fff'}}>{title}</Text>
  </TouchableOpacity>
);

const MyCarousel = ({items, type}: {items: any; type: string}) => {
  const isCarousel = React.useRef(null);
  const windowWidth = Dimensions.get('window').width;

  const _renderItem = ({item}: any) => {
    let image,
      title = '';
    if (type === 'recent') {
      image = {uri: item?.album?.images[2].url};
      title = item?.name;
    } else if (type === 'popular') {
      image = {uri: item.images[1].url};
      title = item.name;
    } else {
      image = {uri: item.url};
      title = item.name;
    }
    return <Card image={image} title={title} onPress={() => {}} />;
  };

  return (
    <Carousel
      loop={true}
      ref={isCarousel}
      data={items}
      renderItem={_renderItem}
      sliderWidth={windowWidth}
      itemWidth={150}
      containerCustomStyle={{
        marginVertical: 10,
        marginBottom: 30,
      }}
    />
  );
};

export default MyCarousel;
