import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import {Button} from '../components/Button';

const Home = ({navigation}) => {
  // Get the current time
  const currentTime = new Date();

  // Define the start and end time for the icon to be enabled
  const startTime = new Date();
  startTime.setHours(13, 0, 0); // 1:00 PM

  const endTime = new Date();
  endTime.setHours(16, 30, 0); // 4:30 PM

  // Check if the current time is within the specified range
  const isTimeInRange = currentTime >= startTime && currentTime <= endTime;
  return (
    <ScrollView>
      {!isTimeInRange ? (
        <Text style={styles.heading}>Pre booking window has been closed</Text>
      ) : (
        <Text style={styles.heading}>
          Pre-Book your food for next day before 4 PM
        </Text>
      )}
      <Button
        title={'Food Menu'}
        onPress={() => navigation.navigate('CanteenMenu')}
      />
      <Button
        title={'Feedback'}
        onPress={() => navigation.navigate('Feedback')}
      />
      <Button
        title={'Pre Book Food'}
        onPress={() => navigation.navigate('Orderfood')}
        disabled={isTimeInRange ? false : true}
      />
      <Button
        title={'Pre Book Summary'}
        onPress={() => navigation.navigate('PreBooking')}
      />

      <Image
        source={require('../assets/images/Danfoss.jpg')}
        style={styles.bannerImg}
      />
      <Text style={styles.footer}>Digitalized by GCS</Text>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  heading: {
    color: '#B31312',
    fontSize: 20,
    textAlign: 'center',
    margin: 14,
  },
  footer: {
    color: '#B31312',
    fontSize: 20,
    textAlign: 'right',
    margin: 14,
  },
  bannerImg: {
    width: '100%',

    height: 80,
    marginTop: 40,
    marginBottom: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
