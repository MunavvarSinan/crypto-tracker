import React, { useState, useEffect } from 'react';
import { FlatList, RefreshControl, View, Text } from 'react-native';
import { CoinItem } from '../../components';
import { getMarketData } from '../../services/requests';

const HomeScreen = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCoins = async (pageNumber) => { 
    // pagenumber is based on the number of coins per page a page only contains 50 coins after that it is second page etc. 
    if (loading) {
      return;
    }
    setLoading(true);
    const coinsData = await getMarketData(pageNumber);
    setCoins((existingCoins) => [...existingCoins, ...coinsData]); // to prevent overwriting the existing coins array i.e when we are moving to the second page we are not overwriting the first page coins
    setLoading(false);
  };

  const refetchCoins = async () => {
    // refetch is used to fetch the first 50 when the user scrolls to the end of the list
    if (loading) {
      return;
    }
    setLoading(true);
    const coinsData = await getMarketData(1);
    setCoins(coinsData);
    setLoading(false);
  };

  useEffect(() => {
    fetchCoins();
  }, []);
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontFamily: 'DroidSans',
            color: 'white',
            fontSize: 25,
            letterSpacing: 1,
            paddingHorizontal: 20,
            paddingBottom: 5,
          }}
        >
          Cryptoassets
        </Text>
        <Text
          style={{ color: 'lightgrey', fontSize: 12, paddingHorizontal: 10 }}
        >
          Powered by CoinGecko
        </Text>
      </View>
      <FlatList
        data={coins}
        renderItem={({ item }) => <CoinItem marketCoin={item} />} // passig the coins to the coinItem
        onEndReached={() => fetchCoins(coins.length / 50 + 1)} // just fetch the next 50 coins when the user scrolls to the end of the list || adding as pages like 1st page contain 50 coins, 2nd page contain next 50 coins and so on
        // like if we have 50 coins 50/50 +1 =2 so we move to the second page and fetch the next 50 coins
        refreshControl={
          <RefreshControl
            refreshing={loading}
            tintColor='white'
            onRefresh={refetchCoins}
          />
        }
      />
    </View>
  );
};

export default HomeScreen;
