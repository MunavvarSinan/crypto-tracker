import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CoinDetailedScreen from '../screens/CoinDetailedScreen';
import BottomTabNavigation from './BottomTabNavigation';
import AddNewAssetScreen from '../screens/AddNewAssetScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator
      initialRouteName='Root'
      // screenOptions={{
      //   headerShown: false,
      // }}
    >
      {/* we are passing the tab navigator itself as the component here 
      because we need not render it both of the time it is the same tab itself right!  */}
      <Stack.Screen
        name={'Root'}
        component={BottomTabNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={'CoinDetailedScreen'}
        component={CoinDetailedScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={'AddNewAssetScreen'} component={AddNewAssetScreen} options={{
        title: "Add New Asset",
        headerStyle: {
          backgroundColor: '#121212',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }} />
    </Stack.Navigator>
  );
};

export default Navigation;
