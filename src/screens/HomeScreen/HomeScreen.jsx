import {Text, SafeAreaView, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import ButtonItem from '../../component/ButtonComponent/ButtonComponent';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {addUserdepartment} from '../../redux/action/Action';
import staticstyles from '../../constant/styles';

const HomeScreen = () => {
  const navigation = useNavigation();
  dispatch = useDispatch();

  const handleappDevelopment = () => {
    dispatch(addUserdepartment('App Development')),
      navigation.navigate('DepartmentScreen');
  };
  const handlewebDevelopment = () => {
    dispatch(addUserdepartment('Web Development')),
      navigation.navigate('DepartmentScreen');
  };
  const handlebackednDevelopment = () => {
    dispatch(addUserdepartment('Backedn Development')),
      navigation.navigate('DepartmentScreen');
  };

  return (
    <SafeAreaView>
      <View style={staticstyles.greenbar} />
      <Text style={styles.heading}>Welcome! What are you looking for ?</Text>
      <ButtonItem text="APP DEVELOPMENT" onPress={handleappDevelopment} />
      <ButtonItem text="WEB DEVELOPMENT" onPress={handlewebDevelopment} />
      <ButtonItem
        text="BACKEND DEVELOPMENT"
        onPress={handlebackednDevelopment}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
