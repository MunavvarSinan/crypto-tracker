import { View, Text, FlatList } from 'react-native';
import React from 'react';
import PortfoilioAssetsList from './components/PortfolioAssetList';


const PortfolioScreen = () => {
  return (
    <View>
      <PortfoilioAssetsList />
    </View>
  );
};

export default PortfolioScreen;
