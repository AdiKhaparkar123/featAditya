import {Text, SafeAreaView, Button, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import ButtonItem from '../../component/ButtonComponent/ButtonComponent';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Text style={styles.heading}>Welcome! What are you looking for ?</Text>
        <ButtonItem text="APP DEVELOPMENT"  onPress={() => navigation.navigate('SecondScreen')}/>
        <ButtonItem text="WEB DEVELOPMENT"  onPress={() => navigation.navigate('SecondScreen')}/>
        <ButtonItem text="BACKEND DEVELOPMENT"  onPress={() => navigation.navigate('SecondScreen')}/>
    </SafeAreaView>
  );
};

export default HomeScreen;

