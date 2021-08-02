import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  main: {
    backgroundColor: 'rgb(18,18,18)',
    flex: 1,
    padding: 15,
    paddingTop: 30,
    width: '100%',
  },
  body: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
    marginLeft: 10,
  },
  icons: {
    flexDirection: 'row',
    width: '25%',
    justifyContent: 'space-between',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  recent: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '35%',
    justifyContent: 'space-between',
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
});
