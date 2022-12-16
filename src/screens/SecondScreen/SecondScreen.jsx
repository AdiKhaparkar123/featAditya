import {Text, SafeAreaView, Button, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../HomeScreen/styles';
import ButtonItem from '../../component/ButtonComponent/ButtonComponent';
import { useNavigation } from '@react-navigation/native';
import { addUser } from '../../redux/action/Action';


const SecondScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Text style={styles.heading}>Great! What department do you work in ?</Text>
        <ButtonItem text="MARKETING" onPress={() => navigation.navigate('ThirdScreen')  }/> 
        <ButtonItem text="SALES" onPress={() => navigation.navigate('ThirdScreen')       }/> 
        <ButtonItem text="DEVELOPMENT" onPress={() => navigation.navigate('ThirdScreen') }/> 
    </SafeAreaView>
  );
};

export default SecondScreen;