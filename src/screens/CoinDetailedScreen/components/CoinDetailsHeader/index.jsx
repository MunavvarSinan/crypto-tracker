import { View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const CoinDetailsHeader = ({coinId, image, symbol, marketCapRank}) => {
const navigation = useNavigation();
  return (
    <View style={styles.headerContianer}>
      <Ionicons name='chevron-back-sharp' size={24} color='white'  onPress={() => navigation.goBack()}/>
      <View style={styles.middleContainer}>
        <Image source={{ uri: image }} style={{ height: 25, width: 25 }} />
        <Text style={styles.title}>{symbol.toUpperCase()}</Text>
        <View style={styles.rankContainer}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>
            #{marketCapRank}
          </Text>
        </View>
      </View>
      <EvilIcons name='user' size={24} color='white' />
    </View>
  );
};

export default CoinDetailsHeader;
