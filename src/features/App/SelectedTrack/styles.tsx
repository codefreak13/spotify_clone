import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  main: {
    backgroundColor: 'rgb(18,18,18)',
    flex: 1,
    padding: 15,
    paddingTop: 30,
    width: '100%',
  },
  title: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: 'bold',
  },
  artist: {
    color: 'white',
    fontWeight: 'bold',
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 25,
  },
  icon: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    width: '40%',
  },
  playContainer: {
    borderRadius: 70,
    width: 70,
    height: 70,
    backgroundColor: '#1BD760',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: -30,
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    justifyContent: 'space-between',
  },
});
