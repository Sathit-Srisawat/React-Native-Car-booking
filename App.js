import * as React from 'react';
import { Text, View, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

import Home from "./screens/Home";
import Statistic from "./screens/Statistic";
import TimeTable from "./screens/TimeTable";
import Profile from "./screens/Profile";
import ContactUs from "./screens/ContactUs";
import Van_route from "./screens/Van_route";
import Root from "./screens/RootScreen";


const Tab = createBottomTabNavigator();

Entypo.loadFont();

function Blank(){
  return(
    <View></View>
  );
}

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name == 'Home') {
      iconName = 'home';
    }else if (route.name == 'ContactUs') {
      iconName = 'google-hangouts';
    }else if (route.name == 'TimeTable') {
      iconName = 'calendar';
    }else if (route.name == 'Profile') {
      iconName = 'user';
    }else if (route.name == 'Statistic') {
      iconName = 'pie-chart';
    }
    
    return <Entypo name={iconName} size={size} color={color} />;
  },
});

function HomeScreen() {
  return (
    <Tab.Navigator
    screenOptions={screenOptions}

      tabBarOptions={{
        activeTintColor: '#3282b8',
        inactiveTintColor: '#464962',
      }}
    >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="TimeTable" component={TimeTable} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Statistic" component={Statistic} />
    <Tab.Screen name="ContactUs" component={ContactUs} />
    </Tab.Navigator>
  );
}

export default function App() {

  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Van_route" component={Van_route} />
  </Drawer.Navigator>
    </NavigationContainer>
  );
}