import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import DepartmentScreen from '../screens/DepartmentScreen/DepartmentScreen';
import UserContactScreen from '../screens/UserContactScreen/UserContactScreen';
import DemoFinalScreen from '../screens/DemoFinalScreen/DemoFinalScreen';
import UserNameScreen from '../screens/UserNameScreen/UserNameScreen';

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
        name="DepartmentScreen"
        component={DepartmentScreen}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="UserContactScreen"
        component={UserContactScreen}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="UserNameScreen"
        component={UserNameScreen}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="DemoFinalScreen"
        component={DemoFinalScreen}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
