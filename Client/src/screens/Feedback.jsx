/* eslint-disable react/no-unstable-nested-components */
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useLayoutEffect, useRef, useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import DocumentPicker from 'react-native-document-picker';
import RNFS from 'react-native-fs';
import {HomeButton, RefrashButton} from '../components/IconButton';
import {Button} from '../components/Button';

const Feedback = ({navigation}) => {
  const [selectedFile, setSelectedFile] = useState();
  const [inputValues, setInputValues] = useState({
    area: '',
    building: '',
    category: '',
    request: '',
    description: '',
  });
  const pickerRef = useRef();

  const handleInputChange = (inputName, text) => {
    console.log('inputName', inputName);
    console.log('text', text);
    setInputValues({
      ...inputValues,
      [inputName]: text,
    });
  };

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
  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      console.log(
        result[0].fileCopyUri || result[0].uri,
        result[0].type, // mime type
        result[0].name,
        result[0].size,
      );
      const uri = result[0]?.uri || result[0]?.fileCopyUri;

      if (uri) {
        const fileContent = await RNFS.readFile(uri, 'base64');
        setSelectedFile(fileContent);
        console.log('Base64 string:', fileContent);
      } else {
        console.error('File URI is undefined');
      }
    } catch (err) {
      console.error('Error picking document:', err);
    }
  };
  const getFeedback = () => {
    const FeedbackForm = {
      area: inputValues.area,
      building: inputValues.building,
      category: inputValues.category,
      request: inputValues.request,
      description: inputValues.description,
      fileurl: inputValues.selectedFile,
    };
    console.log('FeedbackForm', FeedbackForm);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{margin: 14}}>
          <Text style={styles.label}>Area *</Text>
          <TouchableHighlight style={styles.selectedContainer}>
            <Picker
              ref={pickerRef}
              selectedValue={inputValues.area}
              mode="dropdown"
              dropdownIconRippleColor="#000"
              onValueChange={(itemValue, itemIndex) =>
                handleInputChange('area', itemValue)
              }>
              <Picker.Item label="Select Area" value="" />
              <Picker.Item label="Chennai" value="chennai" />
              <Picker.Item label="Banglore" value="banglore" />
            </Picker>
          </TouchableHighlight>

          <Text style={styles.label}>Building *</Text>
          <TouchableHighlight style={styles.selectedContainer}>
            <Picker
              ref={pickerRef}
              selectedValue={inputValues.building}
              mode="dropdown"
              dropdownIconRippleColor="#000"
              onValueChange={(itemValue, itemIndex) =>
                handleInputChange('building', itemValue)
              }>
              <Picker.Item label="Select building" value="" />
              <Picker.Item label="VS Mall" value="vs_mall" />
              <Picker.Item label="Forum Mall" value="forum_mall" />
            </Picker>
          </TouchableHighlight>

          <Text style={styles.label}>Category *</Text>
          <TouchableHighlight style={styles.selectedContainer}>
            <Picker
              ref={pickerRef}
              selectedValue={inputValues.category}
              mode="dropdown"
              dropdownIconRippleColor="#000"
              onValueChange={(itemValue, itemIndex) =>
                handleInputChange('category', itemValue)
              }>
              <Picker.Item label="Select Category" value="" />
              <Picker.Item label="Maintenance" value="maintenance" />
              <Picker.Item label="Wifi" value="wifi" />
            </Picker>
          </TouchableHighlight>

          <Text style={styles.label}>Issue / Request *</Text>
          <TouchableHighlight style={styles.selectedContainer}>
            <Picker
              ref={pickerRef}
              selectedValue={inputValues.request}
              mode="dropdown"
              dropdownIconRippleColor="#000"
              onValueChange={(itemValue, itemIndex) =>
                handleInputChange('request', itemValue)
              }>
              <Picker.Item label="Select Request" value="" />
              <Picker.Item label="Access" value="accesss" />
              <Picker.Item label="Entry" value="entry" />
            </Picker>
          </TouchableHighlight>

          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.selectedContainer}
            value={inputValues.description}
            name="description"
            onChangeText={text => handleInputChange('description', text)}
            placeholder="Enter your Description"
          />

          <TouchableOpacity onPress={pickDocument} style={styles.buttonn}>
            <Text style={styles.buttonText}>Choose Document</Text>
          </TouchableOpacity>

          <Button
            title={'Submit'}
            style={styles.button}
            onPress={getFeedback}
          />
        </View>
      </View>
    </ScrollView>
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
  buttonn: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
});
