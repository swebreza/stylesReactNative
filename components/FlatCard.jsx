import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCard() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCard</Text>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={[styles.card, styles.card1]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.card2]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.card3]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.card3]}>
          <Text>Red</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },

  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
  },
  card1: {
    backgroundColor: '#ff0000',
  },
  card2: {
    backgroundColor: '#ff0',
  },
  card3: {
    backgroundColor: '#0bc',
  },

  // flatcard: {
  //   flex: inline,
  // },
});
