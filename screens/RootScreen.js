import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import login from './Login';
import CreateAccout from "./CreateAccout";

const RootStack = createStackNavigator();

const RootScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="Login" component={login}/>
        <RootStack.Screen name="CreateAccout" component={CreateAccout}/>
    </RootStack.Navigator>
);

export default RootScreen;