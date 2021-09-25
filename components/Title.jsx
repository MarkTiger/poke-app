import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Title({ title }) {
  return <Text style={styles.textTitle}>{title}</Text>;
}

const styles = StyleSheet.create({
  textTitle: {
    fontWeight: 'bold',
    fontSize: 30,
    paddingVertical: 20,
  },
});
