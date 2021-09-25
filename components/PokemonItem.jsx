import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import capitalize from '../helpers/capitalize';
import item_bg from '../assets/item_bg.png';
import { useNavigation } from '@react-navigation/core';

const windowWidth = Dimensions.get('window').width;

export default function PokemonItem({ pokemon }) {
  const navigation = useNavigation();

  return (
    <View
      style={[styles[`${pokemon.types[0].type.name}ListItem`], styles.listItem]}
    >
      <TouchableHighlight
        underlayColor="#11111130"
        onPress={() => navigation.navigate('Detail')}
        style={styles.touch}
      >
        <View style={styles.fullWidthHeight}>
          <ImageBackground
            source={item_bg}
            resizeMode={'cover'}
            style={styles.imageBg}
          >
            <Text style={styles.text}>{capitalize(pokemon.name)}</Text>
            {pokemon.types.map((type) => {
              return (
                <Text
                  style={styles.type}
                  key={`${pokemon.name}-type-${type.slot}`}
                >
                  {type.type.name}
                </Text>
              );
            })}
          </ImageBackground>
          <Image
            source={{ uri: pokemon.sprites.front_default }}
            style={styles.pokeImg}
          />
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  touch: {
    borderRadius: 12,
  },
  fullWidthHeight: {
    width: '100%',
    height: '100%',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  type: {
    color: 'white',
    padding: 6,
    textAlign: 'center',
    borderRadius: 12,
    backgroundColor: '#ffffff30',
    marginBottom: 6,
    width: '50%',
  },
  imageBg: {
    flex: 1,
    padding: 8,
    borderRadius: 12,
  },
  pokeImg: {
    width: '60%',
    height: '60%',
    position: 'absolute',
    right: 0,
    bottom: 12,
  },
  listItem: {
    marginHorizontal: 8,
    marginBottom: 16,
    width: windowWidth * 0.4,
    borderRadius: 12,
    position: 'relative',
    height: windowWidth * 0.3,
  },
  grassListItem: {
    backgroundColor: '#10e8b9',
  },
  fireListItem: {
    backgroundColor: '#ff5e5e',
  },
  waterListItem: {
    backgroundColor: '#78c9ff',
  },
  bugListItem: {
    backgroundColor: '#00ad6b',
  },
  normalListItem: {
    backgroundColor: '#cfa7a7',
  },
  poisonListItem: {
    backgroundColor: '#c338ff',
  },
  electricListItem: {
    backgroundColor: '#ffd54d',
  },
  groundListItem: {
    backgroundColor: '#c9a165',
  },
  fairyListItem: {
    backgroundColor: '#ffbfda',
  },
  fightingListItem: {
    backgroundColor: '#ff8800',
  },
  psychicListItem: {
    backgroundColor: '#ff4f87',
  },
  rockListItem: {
    backgroundColor: '#965333',
  },
  ghostListItem: {
    backgroundColor: '#5872b8',
  },
});
