import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  Button,
  View,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
import FormContainer from '../../component/FormComponent/FormComponent';
import {addUserCompanyData} from '../../redux/action/Action';
import staticstyles from '../../constant/styles';
import ModalText from '../../component/ModalText/ModalText';

const DemoFinalScreen = () => {
  const navigation = useNavigation();
  const [companyName, setCompanyName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const dispatch = useDispatch();
  const [isModalVisible, setisModalVisible] = useState(false);
  const userData = useSelector(state => state.userInfo);

  const dispatchUserData = () => {
    dispatch(addUserCompanyData(companyName, jobTitle));
    setisModalVisible(true);
  };
  const modalClose = () => {
    setisModalVisible(false);
    setCompanyName({companyName: ''}), setJobTitle({jobTitle: ''});
    navigation.navigate('HomeScreen');
  };
  return (
    <SafeAreaView styles={staticstyles.fullscreen}>
      <TouchableOpacity onPress={navigation.goBack}>
        <Image
          source={require('../../Asset/left.png')}
          style={staticstyles.arrow}
        />
      </TouchableOpacity>
      <View style={staticstyles.greenbar}></View>

      <Text style={styles.heading}>
        Thanks! Just a few more details and we are done!
      </Text>

      <FormContainer
        autoCapitalize="words"
        value={companyName}
        onChangeText={text => setCompanyName(text)}
        mode="outlined"
        label="Company Name"
      />

      <FormContainer
        Icon="key"
        onChangeText={text => setJobTitle(text)}
        value={jobTitle}
        maxLength={15}
        mode="outlined"
        label="Job Title"
      />

      <Modal animationType="fade" visible={isModalVisible} transparent={true}>
        <View style={styles.modalcontainer}>
          <View style={styles.modal}>
            <ModalText text="Product:-" data={userData.department} />
            <ModalText text="Department:-" data={userData.field} />
            <ModalText
              text="Email:-"
              data={userData.userContactData.registeremail}
            />
            <ModalText text="Phone:-" data={userData.userContactData.phone} />
            <ModalText text="Name:-" data={userData.addUserName.name} />
            <ModalText
              text="Company Name:-"
              data={userData.addUserCompanyData.companyName}
            />
            <ModalText
              text="Job Title:-"
              data={userData.addUserCompanyData.jobTitle}
            />
            <Button title={'Cancell'} onPress={modalClose} />
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        onPress={dispatchUserData}
        style={styles.ButtonContainer}>
        <Text style={styles.button}>Request Demo</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default DemoFinalScreen;
