import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import FormContainer from '../../component/FormComponent/FormComponent';
import {addUserName} from '../../redux/action/Action';
import staticstyles from '../../constant/styles';
const UserNameScreen = () => {
  const navigation = useNavigation();
  const [name, setFame] = useState('');
  const [surname, setSurname] = useState('');
  const dispatch = useDispatch();

  const handleNavigation = () => {
    navigation.navigate('DemoFinalScreen');
  };

  const dispatchData = () => {
    dispatch(addUserName(name, surname)), handleNavigation();
  };
  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        <TouchableOpacity onPress={navigation.goBack}>
          <Image
            source={require('../../Asset/left.png')}
            style={staticstyles.arrow}
          />
        </TouchableOpacity>
        <View style={staticstyles.greenbar}></View>

        <Text style={styles.heading}>
          Could you tell us a bit more about yourself?
        </Text>

        <FormContainer
          autoCapitalize="words"
          keyboardType="email-address"
          value={name}
          onChangeText={text => setFame(text)}
          mode="outlined"
          label="First Name"
        />

        <FormContainer
          Icon="key"
          onChangeText={text => setSurname(text)}
          value={surname}
          maxLength={15}
          mode="outlined"
          label="Last Name"
        />

        <TouchableOpacity
          onPress={dispatchData}
          style={styles.loginButtonContainer}>
          <Text style={styles.button}>Next</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default UserNameScreen;
