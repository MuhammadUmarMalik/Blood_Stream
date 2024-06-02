import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import {colors,typography} from '../layout/systemLayout';

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
        <Image source={require('../assets/bloodStream_logo.png')} style={styles.logo}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
    
  },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
  logo:{
    width:112,
    height:182.737,
    flexShrink:0,
  }
 
});

export default Splash;
