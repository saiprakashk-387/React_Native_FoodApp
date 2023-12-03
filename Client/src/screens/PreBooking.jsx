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
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {
  DefaultButton,
  HomeButton,
  TextButton,
  TextIconButton,
} from '../components/IconButton';
import {SmallButton} from '../components/Button';
import {useDispatch, useSelector} from 'react-redux';
import {DeleteFoodService, GetOrderFoodService} from '../services';

const PreBooking = ({navigation}) => {
  const {order} = useSelector(state => state.foods);
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HomeButton onPress={() => navigation.navigate('Home')} />
      ),
    });
  }, [navigation]);

  useEffect(() => {
    dispatch(GetOrderFoodService());
  }, []);

  const orderCancel = async id => {
    await dispatch(DeleteFoodService(id));
  };

  return (
    <ImageBackground
      style={styles.container}
      source={require('../assets/images/pre_background.jpg')}>
      {order.length > 0 ? (
        <ScrollView>
          <Text style={styles.text}>
            Booking Date {'  '} {order[0]?.availabledate}
          </Text>
          <View style={styles.section}>
            {order &&
              order?.map((orderItem, i) => (
                <View style={styles.viewRow} key={i}>
                  <TextIconButton title={orderItem?.foodtype} />
                  <SmallButton
                    title={'cancel'}
                    onPress={() => orderCancel(orderItem?._id)}
                  />
                </View>
              ))}

            <Text style={[styles.text, {marginRight: 'auto', marginLeft: 100}]}>
              (Or)
            </Text>
            <View style={styles.viewRow}>
              <TextButton title={'Dinner'} style={styles.button} />
            </View>

            <Text style={styles.text}>
              Your Food Pre-Booking for {''} {order[0]?.availabledate}
            </Text>
            {order &&
              order.map((orderItem, i) => (
                <View style={[styles.viewRow, {marginLeft: 12}]} key={i}>
                  <DefaultButton title={orderItem?.foodtype} />
                  <SmallButton title={'cancel'} style={{marginLeft: 22}} />
                </View>
              ))}
          </View>
        </ScrollView>
      ) : (
        <View style={styles.section}>
          <Text style={styles.error}> No Data Found. </Text>
        </View>
      )}
    </ImageBackground>
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
  error: {
    fontSize: 24,
    color: 'red',
    backgroundColor: '#fff',
    fontWeight: 'bold'
  },
});
