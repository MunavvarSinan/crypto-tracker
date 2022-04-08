import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';


const PortfoilioAssetsList = () => {
  return (
    <View>
      <FlatList data={[]} renderItem={() => <Text> Item</Text>} ListHeaderComponent={
          <>
          <Text> CUrrent Balance</Text>
          <Text>$20000</Text>
          <Text>1000 (All time)</Text>
          <View>
          <AntDesign
              name={'caretup'}
              size={12}
              color={'white'}
              style={{ alignSelf: 'center', marginRight: 5 }}
            />
          </View>
          </>
      }/>
    </View>
  );
};

export default PortfoilioAssetsList;
