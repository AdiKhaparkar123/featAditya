import {
  Text,
  SafeAreaView,
  Button,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import ButtonItem from '../../component/ButtonComponent/ButtonComponent';
import {addUserfield} from '../../redux/action/Action';
import staticstyles from '../../constant/styles';
import styles from '../HomeScreen/styles';

const DepartmentScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleMarketing = () => {
    dispatch(addUserfield('Marketing'));
    navigation.navigate('UserContactScreen');
  };
  const handleSales = () => {
    dispatch(addUserfield('Sales'));
    navigation.navigate('UserContactScreen');
  };
  const handleDevelopment = () => {
    dispatch(addUserfield('Development'));
    navigation.navigate('UserContactScreen');
  };
  const userData = useSelector(state => state.userInfo);
  // console.log(userData);

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={navigation.goBack}>
        <Image
          source={require('../../Asset/left.png')}
          style={staticstyles.arrow}
        />
      </TouchableOpacity>
      <View style={staticstyles.greenbar}/>
      <Text style={styles.heading}>
        Great! What department do you work in ?
      </Text>
      <ButtonItem text="MARKETING" onPress={handleMarketing} />
      <ButtonItem text="SALES" onPress={handleSales} />
      <ButtonItem text="DEVELOPMENT" onPress={handleDevelopment} />
    </SafeAreaView>
  );
};

export default DepartmentScreen;
