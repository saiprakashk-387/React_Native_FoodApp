/* eslint-disable react/no-unstable-nested-components */
import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useLayoutEffect} from 'react';
import {BackButton, HomeButton} from '../components/IconButton';
import {useSelector, useDispatch} from 'react-redux';
import {GetFoodService} from '../services';
import PostCard from '../components/Card';

const FoodDetails = ({navigation, route}) => {
  const foodData = route.params.foodData;
  const {food} = useSelector(state => state.foods);
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
      headerRight: () => (
        <HomeButton onPress={() => navigation.navigate('Home')} />
      ),
    });
  }, [navigation]);

  useEffect(() => {
    dispatch(GetFoodService(foodData));
  }, []);

  console.log('foodtype', food);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{foodData?.foodtype}</Text>
      <FlatList
        data={food}
        keyExtractor={item => item._id}
        renderItem={({item}) => (
          <PostCard
            title={item?.foodname}
            description={item?.foodprice}
            onPress={() => navigation.navigate('Order', {foodItem: item})}
          />
        )}
      />
    </View>
  );
};

export default FoodDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    color: '#000',
    margin: 12,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 18,
  },
});
