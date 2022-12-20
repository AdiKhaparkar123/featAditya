import {Text} from 'react-native';
import React from 'react';
import styles from './styles';


const ModalText = ({...props}) => {
  return (
    <Text style={styles.textinput}>{props.text}{props.data}</Text>
  );
};

export default ModalText;
