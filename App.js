import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import CoinDetailScreen from './src/screens/CoinDetailedScreen';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    DroidSans: require('./assets/fonts/DroidSans.ttf'),
  });
  if (!fontsLoaded) {
    return <ActivityIndicator size={'large'} />;
  }

  return (
    <NavigationContainer
      theme={{
        colors: {
          background: '#121212',
        },
      }}
    >
      <View style={styles.container}>
        <Navigation />
        {/* <CoinDetailScreen /> */}
        <StatusBar style='light' />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 50,
  },
});
