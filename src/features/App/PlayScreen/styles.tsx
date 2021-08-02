import {StyleSheet} from 'react-native';
import {colors} from '../../../Utils/colors';

export default StyleSheet.create({
  scroll: {
    backgroundColor: colors.primary,
    flex: 1,
    padding: 20,
    width: '100%',
  },
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    marginTop: 20,
    width: '95%',
    alignSelf: 'center',
  },
  title: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: 320,
    alignSelf: 'center',
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 25,
    alignItems: 'center',
  },
  playContainer: {
    borderRadius: 70,
    width: 70,
    height: 70,
    backgroundColor: '#fff',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  otherIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
});
