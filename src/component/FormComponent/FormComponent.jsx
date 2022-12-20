import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {TextInput} from 'react-native-paper';
const FormContainer = ({...props}) => {
  return (
    <>
      <Text style={styles.userInputHeader}>{props.Text}</Text>
      <View style={styles.userDetails}>
        <TextInput {...props} />
      </View>
    </>
  );
};

export default FormContainer;
