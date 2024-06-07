import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native'
import React from 'react'
// import Button from '../helpers/components/Button'
import Signin from './Signin'
import { colors } from '../layout/systemLayout'
import Signup from './Signup'
const Intro = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/bloodStream_logo.png')}
        style={styles.logo}></Image>

      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => {
            navigation.navigate('Signin');
          }}>
          <Text style={styles.loginTxt}>LOG IN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.SignupBtn}
          onPress={() => {
            navigation.navigate(Signup);
          }}>
          <Text style={styles.CreateTxt}>CREATE ACCOUNT</Text>
        </TouchableOpacity>
      </View>

      <Image
        source={require('../assets/waves.png')}
        style={styles.waves}></Image>
    </View>
  );
};

export default Intro

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'

    },
    logo: {
        width: 112,
        height: 182.737,
        flexShrink: 0,
        marginTop: 69
    },
    buttons:{
        marginTop:109.29,
        justifyContent:'space-between',
        alignItems:'center',
    },
    loginBtn: {
        borderRadius: 50,
        width: 244,
        height: 58,
        flexShrink: 0,
        borderWidth:2,
        borderColor:"#D9224C",
        // alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
        margin:10,
        color:colors.OutlineColor,
    },
    loginTxt:{
        fontFamily:'Poppins',
        fontSize:22,
        fontWeight:'700',
        color:colors.PRIMARYCOLOR,
    },
    SignupBtn: {
        borderRadius: 50,
        width: 244,
        height: 58,
        flexShrink: 0,
        alignItems:'center',
        justifyContent:'center',
        margin:10,
        backgroundColor:colors.PRIMARYCOLOR,
    },
    CreateTxt:{
        fontFamily:'Poppins',
        fontSize:20,
        fontWeight:'700',
        color:colors.BackgroundColor,
    },
  
    waves:{
        width:796.012,
        height:229.135,
        flexShrink:0,
       alignItems:'flex-end',
        marginTop:143
    }
});