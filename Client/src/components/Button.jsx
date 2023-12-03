import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({onPress, title, disabled, style}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {opacity: disabled ? 0.8 : 1}, style]}
      disabled={disabled}
      activeOpacity={0.8}
      onPress={onPress}>
      <Text style={[styles.btnTitle, style]}>{title}</Text>
    </TouchableOpacity>
  );
};

const SmallButton = ({onPress, title, disabled, style, textStyle}) => {
  return (
    <TouchableOpacity
      style={[styles.small_button, style]}
      disabled={disabled}
      activeOpacity={0.8}
      onPress={onPress}>
      <Text style={[styles.small_text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export {Button, SmallButton};

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    backgroundColor: '#B31312',
    paddingHorizontal: 50,
    paddingVertical: 12,
    margin: 22,
    borderColor: '#61677A',
    borderWidth: 3,
  },
  btnTitle: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Poppins-Regular',
  },
  small_button: {
    borderRadius: 12,
    backgroundColor: 'red',
    paddingHorizontal: 14,
    paddingVertical: 4,
    height: 30,
    marginTop: 30,
    marginLeft: 6,
  },
  small_text: {
    fontSize: 14,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
});
