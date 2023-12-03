// In App.js in a new project

import React from 'react';
import {Image} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CanteenMenu from './src/screens/CanteenMenu';
import Home from './src/screens/Home';
import {HomeButton} from './src/components/IconButton';
import Feedback from './src/screens/Feedback';
import FoodDetails from './src/screens/FoodDetails';
import PreBooking from './src/screens/PreBooking';
import store from './src/features';
import Order from './src/screens/Order';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerStyle: {backgroundColor: '#B31312'},
                headerTitleStyle: {color: 'white'},
                headerTitleAlign: 'center',
                headerTitle: 'Canteen',
              }}
            />
            <Stack.Screen
              name="CanteenMenu"
              component={CanteenMenu}
              options={{
                headerStyle: {backgroundColor: '#B31312'},
                headerTitleStyle: {color: 'white'},
                headerTitleAlign: 'center',
                headerTitle: 'Canteen Menu',
              }}
            />
            <Stack.Screen
              name="Feedback"
              component={Feedback}
              options={{
                headerStyle: {backgroundColor: '#B31312'},
                headerTitleStyle: {color: 'white'},
                headerTitleAlign: 'center',
                headerTitle: 'Feedback',
              }}
            />
            <Stack.Screen
              name="FoodDetails"
              component={FoodDetails}
              options={{
                headerStyle: {backgroundColor: '#B31312'},
                headerTitleStyle: {color: 'white'},
                headerTitleAlign: 'center',
                headerTitle: 'Canteen Menu',
              }}
            />
            <Stack.Screen
              name="PreBooking"
              component={PreBooking}
              options={{
                headerStyle: {backgroundColor: '#B31312'},
                headerTitleStyle: {color: 'white'},
                headerTitleAlign: 'center',
                headerTitle: 'Pre-Booking',
              }}
            />
            <Stack.Screen
              name="Order"
              component={Order}
              options={{
                headerStyle: {backgroundColor: '#B31312'},
                headerTitleStyle: {color: 'white'},
                headerTitleAlign: 'center',
                headerTitle: 'Confirm Booking',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

export default App;
