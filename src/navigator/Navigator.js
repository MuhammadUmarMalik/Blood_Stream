import {View, Text} from 'react-native';
import {React, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { colors } from '../layout/systemLayout';
import Icon from 'react-native-vector-icons/Ionicons';
// Import your screen components
import Signup from '../screens/Signup';
import Signin from '../screens/Signin';
import Home from '../screens/Home'
import Notification from '../screens/Notification'
import Accounts from '../screens/Accounts';
import FindDonor from '../screens/FindDonor';




const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function HomeScreen({props:any}) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'FindDonor') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'Notification') {
            iconName = focused ? 'notifications' : 'notifications-outline';
          } else if (route.name === 'Accounts') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
         tabBarActiveTintColor: colors.primary,
         tabBarInactiveTintColor: 'gray',
         tabBarHideOnKeyboard: true,
        tabBarLabelStyle: {
          display: "none", // Hide tab bar labels
        },
      })}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false , tabBarHideOnKeyboard: true,}} />
      <Tab.Screen
        name="FindDonor"
        component={FindDonor}
        options={{headerShown: false , tabBarHideOnKeyboard: true,}}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{headerShown: false , tabBarHideOnKeyboard: true,}}
      />
      <Tab.Screen
        name="Accounts"
        component={Accounts}
        options={{headerShown: false , tabBarHideOnKeyboard: true,}}
      />
    </Tab.Navigator>
  );
}
const Navigator = ({props:any}) => {
  const isLoggedIn = true;
  return (
    <NavigationContainer>
      <Stack.Navigator>
            {/* <Stack.Screen name="Signin" component={Signin} options={{headerShown:false}}/> */}
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
