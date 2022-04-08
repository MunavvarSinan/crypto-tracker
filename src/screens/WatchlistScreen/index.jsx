import { View, Text, FlatList, RefreshControl } from 'react-native';
import React, { useState, useEffect } from 'react';
import { WatchlistContext, useWatchlist } from '../../context/WatchlistContext';
import { CoinItem } from '../../components';
import { getWatchlistedCoins } from '../../services/requests';

const WatchlistScreen = () => {
  const { watchlistCoinId } = useWatchlist();
  const [coins, setCoins] = useState([]);
  const [loading, setLaoding] = useState(false);

  const tranformCoinIds = () => watchlistCoinId.join('%2C');

  const fetchWatchlistedCoins = async () => {
    if (loading) {
      return;
    }
    setLaoding(true);
    const watchlistedCoinsData = await getWatchlistedCoins(
      1,
      tranformCoinIds()
    );
    setCoins(watchlistedCoinsData);
    setLaoding(false);
  };

  useEffect(() => {
    if (watchlistCoinId.length > 0) {
      fetchWatchlistedCoins();
    }
  }, [watchlistCoinId]);

  console.log(watchlistCoinId);
  return (
    <FlatList
      data={coins}
      renderItem={({ item }) => <CoinItem marketCoin={item} />}
      refreshControl={
        <RefreshControl
          refreshing={loading}
          tintColor='white'
          onRefresh={watchlistCoinId.length > 0 ? fetchWatchlistedCoins : null}
        />
      }
    />
  );
};

export default WatchlistScreen;
