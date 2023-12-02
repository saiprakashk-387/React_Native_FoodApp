/* eslint-disable react/no-unstable-nested-components */
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {HomeButton} from '../components/IconButton';
import {Button} from '../components/Button';

const CanteenMenu = ({navigation}) => {
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

  return (
    <ImageBackground
      style={styles.container}
      source={require('../assets/images/menu_background.jpg')}>
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
          <Text style={styles.DateText}>
            {selectedDate
              ? selectedDate.toLocaleDateString()
              : 'No date selected'}
          </Text>
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
        onPress={() => navigation.navigate('FoodDetails')}
      />
      <Button title={'Lunch'} />
      <Button title={'Diet Lunch'} />
      <Button title={'Dinner'} />
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
    padding: 10,
    margin: 30,
  },
  highText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
  },
});
