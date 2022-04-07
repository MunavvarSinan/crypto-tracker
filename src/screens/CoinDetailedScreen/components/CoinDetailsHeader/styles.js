import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headerContianer: {
    flexDirection: 'row',
    // paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  middleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    marginHorizontal: 5,
    fontSize: 17
  },
  rankContainer: {
    backgroundColor: '#585858',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
  }
});

export default styles;
