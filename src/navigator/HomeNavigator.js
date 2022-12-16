import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import SecondScreen from '../screens/SecondScreen/SecondScreen';
import ThirdScreen from '../screens/ThirdScreen/UserInput';
import FourthScreen from '../screens/FourthScreen/FourthScreen';
import FifthScreen from '../screens/FifthScreen.js/FifthScreen';

const HomeNavigator = () => {
  const HomeStack = createNativeStackNavigator();

  return (
    <HomeStack.Navigator>
       <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="SecondScreen"
        component={SecondScreen}
        options={{headerShown: false}}
      /> 
      <HomeStack.Screen
        name="ThirdScreen"
        component={ThirdScreen}
        options={{headerShown: false}}
      /> 
      <HomeStack.Screen
        name="FourthScreen"
        component={FourthScreen}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="FifthScreen"
        component={FifthScreen}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
