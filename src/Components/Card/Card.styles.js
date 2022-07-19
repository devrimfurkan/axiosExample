import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: '1%',
    margin: '3%',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 15,
    alignItems: 'center',
  },
  column: {
    marginTop: '10%',
    flex: 1,
  },
  leading: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  trailing: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});