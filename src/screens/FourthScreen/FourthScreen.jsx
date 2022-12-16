import {Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import FormContainer from '../../component/FormComponent/FormComponent';
import {addUser} from '../../redux/action/Action';
const FourthScreen = () => {
  const navigation = useNavigation();
  const [name, setFame] = useState('');
  const [surname, setSurname] = useState('');
  const dispatch = useDispatch();

const Navigation =()=>{
  navigation.navigate('FifthScreen');
}

  const DispatchData = () => {
    dispatch(addUser(surname, name)),
    Navigation()
  };
  return (
    <SafeAreaView>
      <Text style={styles.heading}>
        Could you tell us a bit more about yourself?
      </Text>

      <FormContainer
        Text="First Name"
        placeholder="First Name"
        // onBlur={() => validateEmail()}
        autoCapitalize="words"
        keyboardType="email-address"
        value={name}
        onChangeText={text => setFame(text)}
      />

      <FormContainer
        Text="Last Name"
        Icon="key"
        onChangeText={text => setSurname(text)}
        value={surname}
        placeholder="Last Name"
        // onBlur={() => validatePassword()}
        maxLength={15}
      />

      <TouchableOpacity
        onPress={DispatchData()}
        style={styles.loginButtonContainer}>
        <Text style={styles.button}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default FourthScreen;
