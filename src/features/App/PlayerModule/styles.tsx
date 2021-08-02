import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  main: {
    backgroundColor: 'rgb(40,40,40)',
    justifyContent: 'space-between',
    position: 'absolute',
    zIndex: 10,
    bottom: 0,
    height: '11%',
    right: 0,
    left: 0,
    alignItems: 'center',
    flexDirection: 'row',
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    width: '70%',
  },
  title: {
    alignItems: 'flex-start',
    paddingHorizontal: 10,
    flexWrap: 'wrap',
    width: '90%',
  },
  icon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    width: '30%',
    justifyContent: 'space-around',
  },
});
