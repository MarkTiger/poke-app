import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Tab, TabView } from 'react-native-elements';

import Title from '../components/Title';
import createId from '../helpers/createId';
import item_bg from '../assets/detail_bg.png';
import capitalize from '../helpers/capitalize';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function DetailScreen({ route }) {
  const [index, setIndex] = useState(0);
  return (
    <SafeAreaView
      style={[
        styles.container,
        styles[`${route.params.types[0].type.name}ListItem`],
      ]}
    >
      <ImageBackground
        style={styles.item_bg}
        source={item_bg}
        resizeMode="stretch"
      >
        <View style={{ paddingHorizontal: 12 }}>
          <Title title={route.params.name} isLight={true} />
        </View>
        <View style={styles.typeContainer}>
          {route.params.types.map((type) => {
            return (
              <Text
                style={styles.type}
                key={`${route.params.name}-type-${type.slot}`}
              >
                {type.type.name}
              </Text>
            );
          })}
        </View>
        <Text style={styles.idStyle}>{createId(route.params.id)}</Text>
        {/* <View style={styles.pokeImgContainer}> */}
        <Image
          style={styles.pokeImg}
          source={{ uri: route.params.sprites.front_default }}
        />
        {/* </View> */}
        <View
          style={{
            flex: 1,
            minHeight: windowHeight * 0.1,
          }}
        ></View>
        <View
          style={{
            height: 100,
            backgroundColor: 'white',
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
          }}
        ></View>
        <View style={styles.detailContainer}>
          <Tab value={index} onChange={setIndex}>
            <Tab.Item title="About" titleStyle={{ fontSize: 12 }} />
            <Tab.Item title="Base Stats" titleStyle={{ fontSize: 12 }} />
            <Tab.Item title="Moves" titleStyle={{ fontSize: 12 }} />
          </Tab>
        </View>
        <TabView value={index} onChange={setIndex}>
          <TabView.Item style={styles.tabItem}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ width: windowWidth * 0.3 }}>
                <Text style={styles.detailTextName}>Species</Text>
                <Text style={styles.detailTextName}>Height</Text>
                <Text style={styles.detailTextName}>Weight</Text>
                <Text style={styles.detailTextName}>Abilities</Text>
              </View>
              <View>
                <Text
                  style={[
                    styles.detailTextName,
                    { color: '#333', fontWeight: 'normal' },
                  ]}
                >
                  {capitalize(route.params.species.name)}
                </Text>
                <Text
                  style={[
                    styles.detailTextName,
                    { color: '#333', fontWeight: 'normal' },
                  ]}
                >
                  {((route.params.height / 10) * 3.281).toFixed(2)} ft (
                  {(route.params.height / 10).toFixed(2)} cm)
                </Text>
                <Text
                  style={[
                    styles.detailTextName,
                    { color: '#333', fontWeight: 'normal' },
                  ]}
                >
                  {((route.params.weight / 10) * 2.205).toFixed(1)} lbs (
                  {route.params.weight / 10} kg)
                </Text>
                <Text
                  style={[
                    styles.detailTextName,
                    { color: '#333', fontWeight: 'normal' },
                  ]}
                >
                  {route.params.abilities
                    .map((el) => capitalize(el.ability.name))
                    .join(', ')}
                </Text>
              </View>
            </View>
          </TabView.Item>
          <TabView.Item style={styles.tabItem}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ width: windowWidth * 0.3 }}>
                {route.params.stats.map((el) => {
                  return (
                    <Text style={styles.detailTextName} key={el.stat.url}>
                      {capitalize(el.stat.name)}
                    </Text>
                  );
                })}
              </View>
              <View>
                {route.params.stats.map((el, i) => {
                  return (
                    <View
                      key={'stat-value-' + i}
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}
                    >
                      <Text
                        style={[
                          styles.detailTextName,
                          { color: '#333', marginRight: 8, width: 26 },
                        ]}
                      >
                        {el.base_stat}
                      </Text>
                      <View
                        style={{
                          height: 4,
                          backgroundColor: '#ccc',
                          borderRadius: 8,
                          width: windowWidth * 0.5,
                        }}
                      >
                        <View
                          style={{
                            height: 4,
                            backgroundColor:
                              el.base_stat >= 50 ? '#77e679' : '#e67777',
                            borderRadius: 8,
                            width: `${
                              el.base_stat < 100 ? el.base_stat : 100
                            }%`,
                          }}
                        ></View>
                      </View>
                    </View>
                  );
                })}
              </View>
            </View>
          </TabView.Item>
          <TabView.Item style={styles.tabItem}>
            <ScrollView>
              {route.params.moves.map((el, i) => {
                return (
                  <Text key={'Pokemon-move-' + i} style={styles.detailTextName}>
                    {capitalize(el.move.name)}
                  </Text>
                );
              })}
            </ScrollView>
          </TabView.Item>
        </TabView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  typeContainer: {
    flexDirection: 'row',
    paddingHorizontal: 12,
  },
  item_bg: {
    flex: 1,
    position: 'relative',
  },
  detailContainer: {
    backgroundColor: 'white',
  },
  tabItem: {
    backgroundColor: 'white',
    width: '100%',
    padding: 12,
  },
  detailTextName: {
    color: '#666',
    fontWeight: 'bold',
    paddingVertical: 8,
  },
  type: {
    color: 'white',
    padding: 6,
    textAlign: 'center',
    borderRadius: 12,
    backgroundColor: '#ffffff40',
    marginBottom: 6,
    marginRight: 8,
  },
  idStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    position: 'absolute',
    top: 100,
    right: 12,
  },
  pokeImgContainer: {
    width: windowWidth * 0.8,
    height: windowWidth * 0.8,
    position: 'absolute',
    left: windowWidth * 0.1,
    right: windowWidth * 0.1,
    top: windowHeight * 0.3,
    zIndex: 100,
  },
  pokeImg: {
    width: windowWidth,
    height: windowWidth,
    top: windowHeight * 0.2,
    resizeMode: 'contain',
    position: 'absolute',
    zIndex: 100,
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
