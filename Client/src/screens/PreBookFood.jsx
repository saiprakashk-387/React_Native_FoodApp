import {FlatList, StyleSheet, Text, View, ImageBackground} from 'react-native';
import React, {useEffect, useLayoutEffect} from 'react';
import {BackButton, HomeButton} from '../components/IconButton';
import {useSelector, useDispatch} from 'react-redux';
import {GetAllFoodListService} from '../services';
import PostCard from '../components/Card';

const PreBookFood = ({navigation}) => {
  const {foodList} = useSelector(state => state.foods);
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
    dispatch(GetAllFoodListService());
  }, []);

  return (
    <ImageBackground
      style={styles.container}
      source={require('../assets/images/pre_background.jpg')}>
      <View style={styles.container}>
        <FlatList
          data={foodList}
          keyExtractor={item => item._id}
          renderItem={({item}) => (
            <PostCard
              title={item?.foodname}
              description={item?.foodprice}
              foodtype={item?.foodtype}
              onPress={() => navigation.navigate('Order', {foodItem: item})}
            />
          )}
        />
      </View>
    </ImageBackground>
  );
};

export default PreBookFood;

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
