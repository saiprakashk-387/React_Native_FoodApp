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
import {useDispatch} from 'react-redux';
import {HomeButton, RefrashButton} from '../components/IconButton';
import {Button} from '../components/Button';
import {PostFeedService} from '../services';

const Feedback = ({navigation}) => {
  const dispatch = useDispatch();
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
 
  const getFeedback = async () => {
    const FeedbackForm = {
      area: inputValues.area,
      building: inputValues.building,
      category: inputValues.category,
      request: inputValues.request,
      description: inputValues.description,
      fileurl: 'data:application/pdf;base64,' + selectedFile,
    };
    console.log('FeedbackForm', FeedbackForm);
    await dispatch(PostFeedService(FeedbackForm));
    alert("Thanks for feedback!!!")
    setInputValues([{}]);
    setSelectedFile(null);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{margin: 14}}>
          <Text style={styles.label}>Area *</Text>
          <TouchableHighlight style={styles.selectedContainer}>
            <Picker
              style={{color: '#000'}}
              ref={pickerRef}
              selectedValue={inputValues.area}
              mode="dropdown"
              dropdownIconColor={'#000'}
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
              style={{color: '#000'}}
              ref={pickerRef}
              selectedValue={inputValues.building}
              mode="dropdown"
              dropdownIconColor={'#000'}
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
              style={{color: '#000'}}
              ref={pickerRef}
              selectedValue={inputValues.category}
              mode="dropdown"
              dropdownIconColor={'#000'}
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
              style={{color: '#000'}}
              ref={pickerRef}
              selectedValue={inputValues.request}
              mode="dropdown"
              dropdownIconColor={'#000'}
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
          />

          <TouchableOpacity
            onPress={pickDocument}
            style={[
              styles.buttonn,
              {backgroundColor: selectedFile ? 'green' : '#007BFF'},
            ]}>
            <Text style={styles.buttonText}>
              {selectedFile ? 'Upload Successfully' : 'Attach File'}
            </Text>
          </TouchableOpacity>

          <Button
            title={'Submit'}
            style={styles.button}
            onPress={getFeedback}
            disabled={
              Object.values(inputValues).every(value => !!value) ? false : true
            }
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
    marginTop: 6,
    marginBottom: 12,
    color: '#000',
  },
  selectedContainer: {
    borderColor: '#000',
    borderWidth: 1,
    color: '#000',
  },
  button: {
    borderRadius: 30,
    paddingVertical: 8,
  },
  buttonn: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 12,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
