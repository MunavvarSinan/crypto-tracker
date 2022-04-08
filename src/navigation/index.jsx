import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CoinDetailedScreen from '../screens/CoinDetailedScreen';
import BottomTabNavigation from './BottomTabNavigation';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator
      initialRouteName='Root'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={'Root'} component={BottomTabNavigation} /> 
      {/* we are passing the tab navigator itself as the component here 
      because we need not render it both of the time it is the same tab itself right!  */}
      <Stack.Screen
        name={'CoinDetailedScreen'}
        component={CoinDetailedScreen}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
