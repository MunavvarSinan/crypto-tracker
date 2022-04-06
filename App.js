import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList } from 'react-native';
import CoinItem from './src/components/CoinItem';
import cryptocurrencies from './assets/data/cryptocurrencies.json'
import HomeScreen from './src/screens/HomeScreen';
import CoinDetailScreen from './src/screens/CoinDetailedScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      <CoinDetailScreen />
      <StatusBar style='light' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 50,
  },
 
});
