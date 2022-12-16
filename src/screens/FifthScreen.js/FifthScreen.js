import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  Button,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import FormContainer from '../../component/FormComponent/FormComponent';
import {addUser} from '../../redux/action/Action';

const FifthScreen = () => {
  const navigation = useNavigation();
  const [companyName, setCompanyName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const dispatch = useDispatch();
  const [isModalVisible, setisModalVisible] = useState(false);
  const userData = useSelector(state => state.userInfo.UserData);
  const DispatchData = () => {
    dispatch(addUser(companyName, jobTitle))
    setisModalVisible(true);
  };
  const Modalclose = ()=>{
    setisModalVisible(false)
  }
  return (
    <SafeAreaView>
      <Text style={styles.heading}>
        Thanks! Just a few more details and we are done!
      </Text>

      <FormContainer
        Text="Company Name"
        placeholder="Company Name"
        // onBlur={() => validateEmail()}
        autoCapitalize="words"
        value={companyName}
        onChangeText={text => setCompanyName(text)}
      />

      <FormContainer
        Text="Job Title"
        Icon="key"
        onChangeText={text => setJobTitle(text)}
        value={jobTitle}
        placeholder="Job Title"
        // onBlur={() => validatePassword()}
        maxLength={15}
      />
<View style={styles.container}>
    <Modal animationType="fade" visible={isModalVisible} >
        <Text style={styles.textinput}>{userData.registeremail}</Text>
        <Text style={styles.textinput}>{userData.phone}</Text>
        <Text style={styles.textinput}>{userData.name}</Text>
        <Text style={styles.textinput}>{userData.surname}</Text>
        <Text style={styles.textinput}>{userData.companyName}</Text>
        <Button title={'Cancell'} onPress={Modalclose} /> 
      </Modal>
</View>

      <TouchableOpacity
        onPress={DispatchData}
        style={styles.loginButtonContainer}>
        <Text style={styles.button}>Request Demo</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default FifthScreen;
