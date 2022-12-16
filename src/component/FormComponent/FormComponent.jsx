import React from 'react';
import {TextInput, Text, View} from 'react-native';
import styles from './styles';

const FormContainer = ({...props}) => {
  return (
    <>
      <Text style={styles.userInputHeader}>{props.Text}</Text>
      <View style={styles.userDetails}>
        <TextInput {...props}/>
      </View>
      
    </>
  );
};

export default FormContainer;
