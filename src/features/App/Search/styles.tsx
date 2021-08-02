import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  main: {
    backgroundColor: 'rgb(18,18,18)',
    flex: 1,
    padding: 15,
    paddingTop: 30,
    width: '100%',
  },
  search: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBar: {
    backgroundColor: 'white',
    borderRadius: 5,
    marginVertical: 20,
    width: '85%',
    alignSelf: 'flex-start',
    height: 60,
  },
});
