import React, { useEffect } from 'react';
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

import backgroundImg from '../assets/bg.png';
import PokemonItem from '../components/PokemonItem';
import Title from '../components/Title';
import { fetchPokemons } from '../stores/action';

export default function HomeScreen() {
  const { isLoading, pokemons } = useSelector(({ isLoading, pokemons }) => {
    return {
      isLoading,
      pokemons,
    };
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);

  const renderItem = ({ item }) => {
    return <PokemonItem pokemon={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={backgroundImg}
        resizeMode={'cover'}
        style={styles.backgroundImg}
      >
        <Title title="Pokedex" />
        <FlatList
          data={pokemons}
          renderItem={renderItem}
          numColumns={2}
          keyExtractor={(item) => {
            return item.id.toString();
          }}
        />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImg: {
    flex: 1,
    paddingHorizontal: 12,
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
});
