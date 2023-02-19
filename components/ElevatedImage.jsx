import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedImage() {
  return (
    <View>
      <Text style={styles.heading}>ElevatedImage</Text>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image
            source={{
              uri: 'https://image.tmdb.org/t/p/w300/a7f2CN7sBmFJJu5uO9BvDgqOEAc.jpg',
              height: 180,
            }}
            style={styles.imageStyling}
          />
          <View style={styles.cardText}>
            <Text style={styles.cardTitle}>Title</Text>
            <Text style={styles.cardLabel}>Label</Text>
            <Text style={styles.cardDescription}>
              A React component for displaying different types of images,
              including network images, static resources, temporary local
              images, and images from local disk, such as the camera roll. This
              example shows fetching and displaying an image from local storage
              as well as one from network and even from data provided in the
              'data:' uri scheme.
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image
            source={{
              uri: 'https://media.istockphoto.com/id/1193697615/photo/time-is-running-fast-hourglass-in-the-hands-symbolize-the-transience-of-time-background-is.jpg?s=612x612&w=0&k=20&c=yaQp-GeoUPMp3P9tM-T0mTSJ-fRRwdsstQXJuGO7kdk=',
              height: 180,
            }}
            style={styles.imageStyling}
          />
          <View style={styles.cardText}>
            <Text style={styles.cardTitle}>Title</Text>
            <Text style={styles.cardLabel}>Label</Text>
            <Text style={styles.cardDescription}>
              A React component for displaying different types of images,
              including network images, static resources, temporary local
              images, and images from local disk, such as the camera roll. This
              example shows fetching and displaying an image from local storage
              as well as one from network and even from data provided in the
              'data:' uri scheme.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  heading: {
    fontSize: 30,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 13,
    elevation: 10,
  },
  cardElevation: {},
  imageStyling: {},
  cardText: {
    padding: 16,
    height: 180,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardLabel: {
    fontSize: 15,
    fontWeight: '500',
  },
  cardDescription: {
    fontSize: 10,
    fontWeight: '400',
  },
});
