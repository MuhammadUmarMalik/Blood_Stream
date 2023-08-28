import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import {colors,typography} from '../layout/systemLayout';
import Home from './Accounts'
const Splash = () => {
  useEffect(() => {
    // Simulate a delay or any other initialization logic
    // For example, you can navigate to another screen after a certain duration
    setTimeout(() => {
      // Navigate to the main app screen
      // Replace "MainScreen" with your actual main screen component
      // navigation.navigate("Login");
    }, 3000); // 3 seconds delay
  }, []);

  return (
    <View style={styles.container}>
       <LinearGradient
        colors={[colors.primary, colors.GradientSecondary]}
        style={styles.container}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
      >

        <Text style={styles.heading} >Blood Stream</Text>
        </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
  },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
  heading:{
  alignSelf:'center',
  color:colors.Secondary,
  fontFamily:'Inter',
  fontSize:30,
  fontStyle:'normal',
  fontWeight:'bold'
  }
 
});

export default Splash;
