import {FlatList, ImageBackground, StyleSheet, Text, View} from 'react-native';
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
      headerTitle: foodData.foodtype + ' ' + 'Menu',
    });
  }, [navigation]);

  useEffect(() => {
    dispatch(GetFoodService(foodData));
  }, []);
  return (
    <ImageBackground
      style={styles.container}
      source={require('../assets/images/pre_background.jpg')}>
      <View style={styles.container}>
        {/* <Text style={styles.heading}>{foodData?.foodtype}</Text> */}
        {food && food?.length >= 1 ? (
          <FlatList
            data={food}
            keyExtractor={item => item._id}
            renderItem={({item}) => (
              <PostCard
                title={item?.foodname}
                description={item?.foodprice}
                foodtype={null}
                // onPress={() => navigation.navigate('Order', {foodItem: item})}
              />
            )}
          />
        ) : (
          <View style={styles.section}>
            <Text style={styles.error}> No Data Found. </Text>
          </View>
        )}
      </View>
    </ImageBackground>
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
  error: {
    fontSize: 24,
    color: 'red',
    backgroundColor: '#fff',
    fontWeight: 'bold',
  },
  section: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
