import { View, Text, FlatList, Pressable } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';
import PortfolioAssetItem from '../PortfolioAssetItem';
import { useNavigation } from '@react-navigation/native';
import { useRecoilValue, useRecoilState } from 'recoil';
import { allPortfolioAssets } from '../../../../atoms/PortfolioAssets';

const PortfoilioAssetsList = () => {
  const assets = useRecoilValue(allPortfolioAssets);
  const navigation = useNavigation();
  return (
    <View>
      <FlatList
        data={[{ id: 'bitcoin' }]}
        renderItem={({ item }) => <PortfolioAssetItem assetItem={item} />}
        ListHeaderComponent={
          // List header components is used because we need to display th flat list below the amout and some detail
          // so we are wrapping it in a ListHeaderComponent instide of flat list so it display above the flatlist
          <>
            <View style={styles.balanceContainer}>
              <View>
                <Text style={styles.currentBalance}> CUrrent Balance</Text>
                <Text style={styles.currentBalanceValue}>$20000</Text>
                <Text style={styles.valueChange}>$1000 (All time)</Text>
              </View>
              <View style={styles.priceChangeContainer}>
                <AntDesign
                  name={'caretup'}
                  size={12}
                  color={'white'}
                  style={{ alignSelf: 'center', marginRight: 5 }}
                />
                <Text style={styles.percentageChange}>1.2%</Text>
              </View>
            </View>
            <View>
              <Text style={styles.assetsLabel}> Your Assets</Text>
            </View>
          </>
        }
        ListFooterComponent={
          <Pressable
            style={styles.buttonContainer}
            onPress={() => navigation.navigate('AddNewAssetScreen')}
          >
            <Text style={styles.buttonText}>Add New Assets</Text>
          </Pressable>
        }
      />
    </View>
  );
};

export default PortfoilioAssetsList;
