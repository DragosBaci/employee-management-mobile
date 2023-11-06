import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../Utils/Colors';

const DetailCard = ({
  imageUri,
  description,
  name,
}: {
  imageUri: string;
  description?: string;
  name?: string;
}) => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.cardContainer}>
        <Image
          source={{
            uri: 'http://localhost:8080' + imageUri,
          }}
          style={styles.imageContainer}
        />
        {description ? (
          <Text style={styles.titleStyle}>{description}</Text>
        ) : (
          name && <Text style={styles.titleStyle}>{name}</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default DetailCard;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: 100,
    height: 100,
  },
  cardContainer: {
    backgroundColor: Colors.WHITE,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 110,
    width: '90%',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderTopStartRadius: 6,
    borderTopEndRadius: 6,
  },
  titleStyle: {
    paddingRight: 30,
    fontSize: 25,
    fontWeight: 'bold',
  },
  subtitleStyle: {
    width: '90%',
    backgroundColor: Colors.WHITE,
    paddingVertical: 6,
    textAlign: 'center',
    fontSize: 17,
    borderBottomEndRadius: 6,
    borderBottomStartRadius: 6,
  },
});
