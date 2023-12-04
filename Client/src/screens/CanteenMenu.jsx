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
import {useSelector, useDispatch} from 'react-redux';
import React, {useLayoutEffect, useState, useEffect} from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {HomeButton} from '../components/IconButton';
import {Button} from '../components/Button';
import {DateTime} from '../utils/Dateformate';
import {GetFoodService} from '../services';
import axios from 'axios';

const CanteenMenu = ({navigation}) => {
  const food = useSelector(state => state.foods);
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleConfirm = date => {
    setSelectedDate(date);
    hideDatePicker();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HomeButton onPress={() => navigation.navigate('Home')} />
      ),
    });
  }, [navigation]);

  const foodClick = async val => {
    const obj = {
      foodtype: val,
      availabledate: '03-12-2023',
    };
    await dispatch(GetFoodService(obj));
    navigation.navigate('FoodDetails', {foodData: obj});
  };

  console.log('food', selectedDate);
  return (
    <ImageBackground
      style={styles.container}
      source={require('../assets/images/menu_background.jpg')}>
      <ScrollView>
        <View style={styles.viewRow}>
          <TouchableHighlight
            style={styles.highContainer}
            onPress={showDatePicker}>
            <Text style={styles.highText}>Date</Text>
          </TouchableHighlight>
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.DateContainer}
            onPress={showDatePicker}>
            <Text style={styles.DateText}>{DateTime(selectedDate)}</Text>
          </TouchableOpacity>
          <DateTimePickerModal
            date={selectedDate}
            isVisible={datePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
            onHide={hideDatePicker}
          />
        </View>
        <Button
          title={'Breakfast'}
          onPress={() => {
            foodClick('BreakFast');
          }}
        />
        <Button
          title={'Lunch'}
          onPress={() => {
            foodClick('lunch');
          }}
        />
        <Button
          title={'Diet Lunch'}
          onPress={() => {
            foodClick('diet_lunch');
          }}
        />
        <Button
          title={'Dinner'}
          onPress={() => {
            foodClick('dinner');
          }}
        />
      </ScrollView>
    </ImageBackground>
  );
};

export default CanteenMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewRow: {
    flexDirection: 'row',
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
  DateText: {
    color: '#000',
    fontSize: 18,
  },
  highContainer: {
    backgroundColor: '#393E46',
    width: '40%',
    // padding: 10,
    margin: 30,
    height: 50,
  },
  highText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 8,
  },
});
