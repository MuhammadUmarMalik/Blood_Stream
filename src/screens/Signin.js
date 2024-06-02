import { View, Text, StyleSheet,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { style } from './style/style_Singup'
import { colors } from '../layout/systemLayout'

const Signin = ({navigation}) => {
  return (
    <View style={styles.container}> 
      <View style={styles.topNavigate}>
        <TouchableOpacity onPress={() => navigation.goBack({splash
        })}>
        <Image source={require('../assets/Left_Back_Btn.png')} style={styles.BackBtn}></Image>
        </TouchableOpacity>
        <Text style={styles.SigninText}>Sign In</Text>
      </View>
    </View>
  )
}

export default Signin

const styles=StyleSheet.create({
  container:{
    flex:1,
    
  },
  topNavigate:{
   
    flexDirection:'row',
    width: 203,
    height: 29,
    gap: 105,
    flexShrink: 0,
    marginTop:39
  },
  BackBtn:{
    marginLeft:35,
  },
  SigninText:{
    fontSize:20,
    fontWeight:'700',
    color:colors.PrimaryTextColor,
  }
})