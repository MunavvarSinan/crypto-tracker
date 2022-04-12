import { atom, selector } from 'recoil';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getWatchlistedCoins } from '../services/requests';

export const allPortfolioBoughAssets = selector({
  key: 'allPortfolioBoughAssets',
  get: async () => {
    const jsonValue = await AsyncStorage.getItem('@portfolio_coins');
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  },
});

export const allPortfolioBoughAssetsFromApi = selector({
  key: 'allPortfolioBoughAssetsFromApi',
  get: async ({ get }) => {
    const boughtPortfolioAssets = get(allPortfolioBoughAssetsInStorage);
    const portfolioAssetsMarketData = await getWatchlistedCoins(
      1,
      boughtPortfolioAssets.map((potfolioAsset) => potfolioAsset.id).join(',')
    );
    const boughtAssets = boughtPortfolioAssets.map((boughtAsset) => {
      const portfolioAsset = portfolioAssetsMarketData.filter(
        (item) => boughtAsset.id === item.id
      )[0];
      return {
        ...boughtAsset,
        currentPrice: portfolioAsset.current_price,
        priceChangePercentage: portfolioAsset.price_change_percentage_24h,
      };
    });
    return boughtAssets.sort(
      (item1, item2) =>
        item1.quantityBought * item1.currentPrice <
        item2.quantityBought * item2.currentPrice
    );
  },
});

export const allPortfolioAssets = atom({
  key: 'allPortfolioAssets',
  default: allPortfolioBoughAssets,
});

export const allPortfolioBoughAssetsInStorage = atom({
  key: 'allPortfolioBoughAssetsInStorage',
  default: [],
});
