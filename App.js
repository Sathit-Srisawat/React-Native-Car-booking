import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

import Home from "./screens/Home";
import ContactUs from "./screens/ContactUs";
import TimeTable from "./screens/TimeTable";
import Profile from "./screens/Profile";
import Statistic from "./screens/Statistic";




const Tab = createBottomTabNavigator();

Entypo.loadFont();

function Blank(){
  return(
    <View></View>
  );
}
export default function App() {

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

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={screenOptions}
        tabBarOptions={{
          activeTintColor: '#3282b8',
          inactiveTintColor: '#464962',
        }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="TimeTable" component={TimeTable} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Statistic" component={Statistic} />
        <Tab.Screen name="ContactUs" component={ContactUs} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}