import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Login from './Login';
import CreateAccout from './CreateAccout';
import ForgotPassword from "./ForgotPassword";

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="Login" component={Login}/>
        <RootStack.Screen name="CreateAccout" component={CreateAccout}/>
        <RootStack.Screen name="ForgotPassword" component={ForgotPassword}/>
    </RootStack.Navigator>
);

export default RootStackScreen;