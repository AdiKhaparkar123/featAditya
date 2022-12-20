import {Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

const ButtonItem = ({onPress, ...props}) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.buttons} onPress={onPress}>
        <Text style={styles.buttonText}>{props.text}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ButtonItem;
