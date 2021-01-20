import React from 'react';
import {View, Text, Image} from 'react-native';
import {TabBar} from '../../assets';

export function Pokemons() {
  return (
    <View>
      <Text>Pokemons</Text>
      <Image style={{width: 100, height: 50}} source={TabBar} />
    </View>
  );
}
