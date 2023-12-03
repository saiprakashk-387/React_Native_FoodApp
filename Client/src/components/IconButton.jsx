import {StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import React from 'react';

const HomeButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <Image
        source={require('../assets/images/home.png')}
        style={styles.homeImg}
      />
    </TouchableOpacity>
  );
};

const RefrashButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <Image
        source={require('../assets/images/refrash.png')}
        style={styles.homeImg}
      />
    </TouchableOpacity>
  );
};

const BackButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <Image
        source={require('../assets/images/arrow_left.png')}
        style={styles.homeImg}
      />
    </TouchableOpacity>
  );
};

const TextIconButton = ({onPress, textStyle, title}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={styles.text_btn_container}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      <Image
        source={require('../assets/images/success.png')}
        style={styles.buttonImage}
      />
    </TouchableOpacity>
  );
};

const TextButton = ({onPress, textStyle, title, style}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[styles.text_btn_container, style]}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const DefaultButton = ({onPress, textStyle, title, style}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        styles.text_btn_container,
        {backgroundColor: '#0000', width: 120, borderColor: '#0000'},
      ]}>
      <Image
        source={require('../assets/images/success.png')}
        style={styles.buttonImage}
      />
      <Text style={[styles.buttonText, textStyle, {color: '#fff', marginLeft: 22}]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export {
  HomeButton,
  RefrashButton,
  TextIconButton,
  BackButton,
  TextButton,
  DefaultButton,
};

const styles = StyleSheet.create({
  homeImg: {
    width: 40,
    height: 40,
    borderRadius: 22,
  },
  button_container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 2,
    paddingHorizontal: 30,
    paddingVertical: 12,
    margin: 14,
    backgroundColor: '#BBBBBB',
  },
  text_btn_container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 2,
    width: 200,
    paddingVertical: 12,
    margin: 14,
    backgroundColor: '#BBBBBB',
  },
  buttonImage: {
    width: 26,
    height: 26,
    marginLeft: 12,
    marginRight: 'auto',
  },
  buttonText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
