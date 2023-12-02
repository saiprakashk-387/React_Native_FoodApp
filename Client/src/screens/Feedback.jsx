/* eslint-disable react/no-unstable-nested-components */
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TextInput,
} from 'react-native';
import React, {useLayoutEffect, useRef, useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {HomeButton, RefrashButton} from '../components/IconButton';
import {Button} from '../components/Button';

const Feedback = ({navigation}) => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HomeButton onPress={() => navigation.navigate('Home')} />
      ),
      headerRight: () => (
        <RefrashButton onPress={() => console.log('refrash')} />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={{margin: 14}}>
        <Text style={styles.label}>Area *</Text>
        <TouchableHighlight style={styles.selectedContainer}>
          <Picker
            ref={pickerRef}
            selectedValue={selectedLanguage}
            mode="dropdown"
            dropdownIconRippleColor="#000"
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </TouchableHighlight>

        <Text style={styles.label}>Building *</Text>
        <TouchableHighlight style={styles.selectedContainer}>
          <Picker
            ref={pickerRef}
            selectedValue={selectedLanguage}
            mode="dropdown"
            dropdownIconRippleColor="#000"
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </TouchableHighlight>

        <Text style={styles.label}>Category *</Text>
        <TouchableHighlight style={styles.selectedContainer}>
          <Picker
            ref={pickerRef}
            selectedValue={selectedLanguage}
            mode="dropdown"
            dropdownIconRippleColor="#000"
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </TouchableHighlight>

        <Text style={styles.label}>Issue / Request *</Text>
        <TouchableHighlight style={styles.selectedContainer}>
          <Picker
            ref={pickerRef}
            selectedValue={selectedLanguage}
            mode="dropdown"
            dropdownIconRippleColor="#000"
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </TouchableHighlight>

        <Text style={styles.label}>Description</Text>
        <TextInput style={styles.selectedContainer} />

        <Button title={'Submit'} style={styles.button} />
      </View>
    </View>
  );
};

export default Feedback;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 12,
  },
  selectedContainer: {
    borderColor: '#000',
    borderWidth: 1,
  },
  button: {
    borderRadius: 30,
    paddingVertical: 8,
  },
});
