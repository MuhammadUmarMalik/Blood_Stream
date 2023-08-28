import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
// Import your screen components
import Home from '../screens/Home'
import Notification from '../screens/Notification'
import Accounts from '../screens/Accounts';
import FindDonor from '../screens/FindDonor';
import { colors } from '../layout/systemLayout';

const Tab=createBottomTabNavigator()
  


const TabNavigator = () => {  
  // isLoggedIn=false;
  return (
    <NavigationContainer>
     <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
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
  
          return <Icon name={iconName} size={size} color={color ? colors.primary:'gray'} />;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: {
          display: "none", // Hide tab bar labels
        }, // Hide tab bar labels
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{headerShown:false}}/>
      <Tab.Screen name="FindDonor" component={FindDonor} options={{headerShown:false}}/>
      <Tab.Screen name="Notification" component={Notification} options={{headerShown:false}}/>
      <Tab.Screen name="Accounts" component={Accounts} options={{headerShown:false}}/>
    </Tab.Navigator>
  </NavigationContainer>
  );
}

export default TabNavigator;