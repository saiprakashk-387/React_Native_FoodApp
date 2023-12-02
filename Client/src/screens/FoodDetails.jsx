/* eslint-disable react/no-unstable-nested-components */
import {StyleSheet, Text, View} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {BackButton, HomeButton} from '../components/IconButton';

const FoodDetails = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
      headerRight: () => (
        <HomeButton onPress={() => navigation.navigate('Home')} />
      ),
    });
  }, [navigation]);
  return (
    <View>
      <Text>FoodDetails</Text>
    </View>
  );
};

export default FoodDetails;

const styles = StyleSheet.create({});
