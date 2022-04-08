import React, { useContext, createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const WatchlistContext = createContext();

export const useWatchlist = () => useContext(WatchlistContext);

const WatchlistProvider = ({ children }) => {
  const [watchlistCoinId, setWatchlistCoinId] = useState([]);

  const getWatchlistData = async () => {
    try {
      const watchlistData = await AsyncStorage.getItem('@watchlist_coins');
      setWatchlistCoinId(
        // if watchlistData is not null then parse it to JSON and set it to watchlistCoinId
        // else set watchlistCoinId to empty array instead of null
        watchlistData != null ? JSON.parse(watchlistData) : [] 
      );
    } catch (error) {
      console.log(error);
    }
  };

  const storeWatchlistCoinId = async (coinId) => {
    try {
      // we are creating a new array and pushing the coinId to it
      // the new array contains the previous coinIds and the new coinId
      const newWatchlist = [...watchlistCoinId, coinId];
      const newWatchlistData = JSON.stringify(newWatchlist);
      await AsyncStorage.setItem('@watchlist_coins', newWatchlistData); // @watchlist_coins is the name of the key in the AsyncStorage
      setWatchlistCoinId(newWatchlist);
    } catch (error) {
      console.log(error);
    }
  };

  const removeWatchlistCoinId = async (coinId) => {
    // in async storage we can't remove an item from an array we can only remove the whole array  so we are actually updating the array
    try {
      // we are filtering it and getting out the coinId which matches with the id from watchlist array
      //after that we updaing the watchlist array with the new array
      const newWatchlist = watchlistCoinId.filter((id) => id !== coinId);
      const newWatchlistData = JSON.stringify(newWatchlist);
      await AsyncStorage.setItem('@watchlist_coins', newWatchlistData);
      setWatchlistCoinId(newWatchlist);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWatchlistData();
  }, []);
  return (
    <WatchlistContext.Provider
    // we are passing the values of the state and the functions to the context provider so that we can use them in the components
      value={{ watchlistCoinId, storeWatchlistCoinId, removeWatchlistCoinId }}
    >
      {children}
    </WatchlistContext.Provider>
  );
};

export default WatchlistProvider;
