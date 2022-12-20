import {Text, SafeAreaView, TouchableOpacity, Image, View} from 'react-native';
import React, {useState} from 'react';

import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import FormContainer from '../../component/FormComponent/FormComponent';
import {emailValidator, phoneNumberValidator} from '../../utils/Validation';
import {addUserContactData} from '../../redux/action/Action';
import {useDispatch} from 'react-redux';
import staticstyles from '../../constant/styles';

const UserContactScreen = () => {
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
  const handleNavigate = () => {
    navigation.navigate('UserNameScreen');
  };

  // const userData = useSelector(state => state.userInfo.userData);
  // const previousdata = {
  //   ...userData,
  //   registeremail: registeremail,
  //   phone: phone,
  // };
  const dispatchCredentials = () => {
    dispatch(addUserContactData(registeremail, phone)), handleNavigate();
  };
  return (
    <SafeAreaView styles={staticstyles.fullscreen}>
      <TouchableOpacity onPress={navigation.goBack}>
        <Image
          source={require('../../Asset/left.png')}
          style={staticstyles.arrow}
        />
      </TouchableOpacity>
      <View style={staticstyles.greenbar} />

      <Text style={styles.heading}>
        What is the email and phone number that we can reach you the best?
      </Text>

      <FormContainer
        onBlur={() => validateEmail()}
        keyboardType="email-address"
        value={registeremail}
        onChangeText={text => setRegisterEmail(text)}
        mode="outlined"
        label="Email Address"
      />
      <Text style={styles.errormsg}>{validation.emailError}</Text>
      <FormContainer
        Icon="key"
        onChangeText={text => setPhone(text)}
        value={phone}
        onBlur={() => validatePhone()}
        secureTextEntry={true}
        maxLength={12}
        keyboardType="number-pad"
        mode="outlined"
        label="Phone"
      />

      <Text style={styles.errormsg}>{validation.phoneError}</Text>

      <TouchableOpacity
        disabled={
          !emailValidator(registeremail) || !phoneNumberValidator(phone)
            ? true
            : false
        }
        onPress={dispatchCredentials}
        style={styles.ButtonContainer}>
        <Text style={styles.button}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default UserContactScreen;
