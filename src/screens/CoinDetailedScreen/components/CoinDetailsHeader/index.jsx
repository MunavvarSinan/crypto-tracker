import { View, Text, Image } from 'react-native';
import React from 'react';
import styles from './styles';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useWatchlist } from '../../../../context/WatchlistContext';

const CoinDetailsHeader = ({ coinId, image, symbol, marketCapRank }) => {
  const navigation = useNavigation();

  const { watchlistCoinId, storeWatchlistCoinId, removeWatchlistCoinId } =
    useWatchlist();
  const checkCoinWatchlisted = () =>
    watchlistCoinId.some((coinIdValue) => coinIdValue === coinId);

  const handleWatchlistCoin = () => {
    if (checkCoinWatchlisted()) {
      return removeWatchlistCoinId(coinId);
    }
    return storeWatchlistCoinId(coinId);
  };
  return (
    <View style={styles.headerContianer}>
      <Ionicons
        name='chevron-back-sharp'
        size={24}
        color='white'
        onPress={() => navigation.goBack()}
      />
      <View style={styles.middleContainer}>
        <Image source={{ uri: image }} style={{ height: 25, width: 25 }} />
        <Text style={styles.title}>{symbol.toUpperCase()}</Text>
        <View style={styles.rankContainer}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>
            #{marketCapRank}
          </Text>
        </View>
      </View>
      <FontAwesome
        name={checkCoinWatchlisted() ? 'star' : 'star-o'}
        size={25}
        color={checkCoinWatchlisted() ? '#FFBF00' : 'white'}
        onPress={handleWatchlistCoin}
      />
    </View>
  );
};

export default CoinDetailsHeader;
