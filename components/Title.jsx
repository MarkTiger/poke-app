import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import capitalize from '../helpers/capitalize';

export default function Title({ title, isLight }) {
  return (
    <Text style={[styles.textTitle, { color: isLight ? 'white' : '#555' }]}>
      {capitalize(title)}
    </Text>
  );
}

const styles = StyleSheet.create({
  textTitle: {
    fontWeight: 'bold',
    fontSize: 40,
    paddingVertical: 20,
  },
});
