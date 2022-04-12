import { View, Text } from 'react-native';
import React, { Suspense } from 'react';
import PortfoilioAssetsList from './components/PortfolioAssetList';

const PortfolioScreen = () => {
  return (
    <View>
      <Suspense
        fallback={<Text style={{ color: 'white' }}>Loading please wait</Text>}
      >
        <PortfoilioAssetsList />
      </Suspense>
    </View>
  );
};

export default PortfolioScreen;
