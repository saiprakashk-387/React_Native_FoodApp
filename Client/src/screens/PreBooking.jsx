/* eslint-disable react/no-unstable-nested-components */
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {
  DefaultButton,
  HomeButton,
  TextButton,
  TextIconButton,
} from '../components/IconButton';
import {SmallButton} from '../components/Button';

const PreBooking = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HomeButton onPress={() => navigation.navigate('Home')} />
      ),
    });
  }, [navigation]);

  return (
    <ScrollView>
      <ImageBackground
        style={styles.container}
        source={require('../assets/images/pre_background.jpg')}>
        <Text style={styles.text}>Booking Date {'  '} 06/04/2023</Text>
        <View style={styles.section}>
          <View style={styles.viewRow}>
            <TextIconButton title={'Breakfast'} />
            <SmallButton title={'cancel'} />
          </View>
          <View style={styles.viewRow}>
            <TextIconButton title={'Lunch'} />
            <SmallButton title={'cancel'} />
          </View>
          <Text style={[styles.text, {marginRight: 'auto', marginLeft: 100}]}>
            (Or)
          </Text>
          <View style={styles.viewRow}>
            <TextButton title={'Dinner'} style={styles.button} />
          </View>

          <Text style={styles.text}>
            Your Food Pre-Booking for {''} 06/04/2023
          </Text>
          <View style={[styles.viewRow, {marginLeft: 12}]}>
            <DefaultButton title={'Lunch'} />
            <SmallButton title={'cancel'} />
          </View>
          <View style={[styles.viewRow, {marginLeft: 12, marginTop: -30}]}>
            <DefaultButton title={'Dinner'} />
            <SmallButton title={'cancel'} />
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default PreBooking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  section: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewRow: {
    flexDirection: 'row',
    marginRight: 'auto',
  },
  DateContainer: {
    backgroundColor: '#fff',
    width: '40%',
    padding: 10,
    margin: 30,
    borderColor: '#B31312',
    borderWidth: 1,
    marginLeft: -5,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
  },
  button: {
    paddingHorizontal: 50,
    paddingVertical: 12,
  },
});
