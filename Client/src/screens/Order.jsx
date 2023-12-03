import {StyleSheet, Text, View, Image, Alert} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {useDispatch} from 'react-redux';
import {BackButton, HomeButton} from '../components/IconButton';
import {Button} from '../components/Button';
import {OrderFoodService} from '../services';

const Order = ({navigation, route}) => {
  const dispatch = useDispatch();
  const {foodname, foodtype, foodprice, availabledate} = route.params.foodItem;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
      headerRight: () => (
        <HomeButton onPress={() => navigation.navigate('Home')} />
      ),
    });
  }, [navigation]);

  const onSubmit = async () => {
    var obj = {
      foodname: foodname,
      foodtype: foodtype,
      availabledate: availabledate,
      foodprice: foodprice,
      prebook: foodtype,
    };
    await dispatch(OrderFoodService(obj));
    Alert.alert(foodtype + ' Order Successfully !!!');
  };
  return (
    <View>
      <Image
        source={{
          uri: 'https://www.awesomecuisine.com/wp-content/uploads/2009/06/Plain-Dosa.jpg',
        }}
        style={styles.image}
      />
      <View style={styles.section}>
        <Text style={styles.title}>
          {foodname} - {`(${foodtype})`}
        </Text>
        <Text style={styles.desc}>{foodprice}</Text>
        <Text style={styles.dateText}>Available date: {availabledate}</Text>
        <Button title={'Place your order'} onPress={onSubmit} />
      </View>
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  section: {
    margin: 20,
  },
  title: {
    fontWeight: '600',
    fontSize: 18,
    color: '#000',
  },
  desc: {
    fontSize: 16,
    color: '#000',
    color: 'green',
  },
  dateText: {
    fontSize: 16,
    color: '#000',
    color: 'blue',
  },
});
