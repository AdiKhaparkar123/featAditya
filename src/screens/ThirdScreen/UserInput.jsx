import {Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import FormContainer from '../../component/FormComponent/FormComponent';
import {emailValidator, phoneNumberValidator} from '../../utils/Validation';
import {addUser} from '../../redux/action/Action';
import FourthScreen from '../FourthScreen/FourthScreen';
import {useDispatch} from 'react-redux';

const ThirdScreen = () => {
  const navigation = useNavigation();
  const [registeremail, setRegisterEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [validation, setValidation] = useState({
    emailError: '',
    phoneError: '',
  });
  const dispatch = useDispatch();
  const validateEmail = () => {
    registeremail === '' || !emailValidator(registeremail)
      ? setValidation({
          ...validation,
          emailError: 'Invalid email address',
        })
      : setValidation({emailError: ''});
  };

  const validatePhone = () => {
    phone === '' || !phoneNumberValidator(phone)
      ? setValidation({
          ...validation,
          phoneError: 'Invalid Phone Number',
        })
      : setValidation({phoneError: ''});
  };
  const Navigation=()=>{
    navigation.navigate('FourthScreen');
  }
  const dispatchCredentials = () => {
    dispatch(addUser(registeremail, phone));
    Navigation()
  };
  return (
    <SafeAreaView>
      <Text style={styles.heading}>
        What is the email and phone number that we can reach you the best?
      </Text>

      <FormContainer
        Text="Email Address"
        placeholder="Email Address"
        onBlur={() => validateEmail()}
        keyboardType="email-address"
        value={registeremail}
        onChangeText={text => setRegisterEmail(text)}
      />
      <Text style={styles.errormsg}>{validation.emailError}</Text>
      <FormContainer
        Text="PhoneNumber"
        Icon="key"
        onChangeText={text => setPhone(text)}
        value={phone}
        placeholder="Phone"
        onBlur={() => validatePhone()}
        secureTextEntry={true}
        maxLength={15}
      />

      <Text style={styles.errormsg}>{validation.phoneError}</Text>

      <TouchableOpacity
        disabled={
          !emailValidator(registeremail) || !phoneNumberValidator(phone)
            ? true
            : false
        }
        onPress={dispatchCredentials()}
        style={styles.ButtonContainer}>
        <Text style={styles.button}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ThirdScreen;
