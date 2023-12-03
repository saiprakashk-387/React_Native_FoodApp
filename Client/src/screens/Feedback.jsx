/* eslint-disable react/no-unstable-nested-components */
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useLayoutEffect, useRef, useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {useDispatch} from 'react-redux';
import {HomeButton, RefrashButton} from '../components/IconButton';
import {Button} from '../components/Button';
import {fileUrl} from '../utils/base64';
import {PostFeedService} from '../services';

const Feedback = ({navigation}) => {
  const dispatch = useDispatch();
  const [area, setArea] = useState();
  const [building, setBuilding] = useState('');
  const [category, setCategory] = useState('');
  const [issue, setIssue] = useState('');
  const [description, setDescription] = useState('');

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

  const onSumit = async () => {
    var obj = {
      area: area,
      building: building,
      category: category,
      request: issue,
      description: description,
      fileurl: fileUrl,
    };
    console.log('obj', obj);
    await dispatch(PostFeedService(obj));
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{margin: 14}}>
          <Text style={styles.label}>Area *</Text>
          <TouchableHighlight style={styles.selectedContainer}>
            <Picker
              style={{color: '#000'}}
              selectedValue={area}
              mode="dropdown"
              dropdownIconColor={'#000'}
              dropdownIconRippleColor="#000"
              onValueChange={(itemValue, itemIndex) => setArea(itemValue)}>
              <Picker.Item label="Select ..." value="" />
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
          </TouchableHighlight>

          <Text style={styles.label}>Building *</Text>
          <TouchableHighlight style={styles.selectedContainer}>
            <Picker
              style={{color: '#000'}}
              selectedValue={building}
              mode="dropdown"
              dropdownIconColor={'#000'}
              dropdownIconRippleColor="#000"
              onValueChange={(itemValue, itemIndex) => setBuilding(itemValue)}>
              <Picker.Item label="Select ..." value="" />
              <Picker.Item label="Nato" value="nato" />
              <Picker.Item label="Warsaw" value="warsaw" />
            </Picker>
          </TouchableHighlight>

          <Text style={styles.label}>Category *</Text>
          <TouchableHighlight style={styles.selectedContainer}>
            <Picker
              style={{color: '#000'}}
              selectedValue={category}
              mode="dropdown"
              dropdownIconColor={'#000'}
              dropdownIconRippleColor="#000"
              onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}>
              <Picker.Item label="Select ..." value="" />
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
          </TouchableHighlight>

          <Text style={styles.label}>Issue / Request *</Text>
          <TouchableHighlight style={styles.selectedContainer}>
            <Picker
              style={{color: '#000'}}
              selectedValue={issue}
              mode="dropdown"
              dropdownIconColor={'#000'}
              dropdownIconRippleColor="#000"
              onValueChange={(itemValue, itemIndex) => setIssue(itemValue)}>
              <Picker.Item label="Select ..." value="" />
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
          </TouchableHighlight>

          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.selectedContainer}
            value={description}
            onChangeText={event => setDescription(event)}
          />

          <Button title={'Submit'} style={styles.button} onPress={onSumit} />
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
});
