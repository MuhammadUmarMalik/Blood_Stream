import {View, Text, StyleSheet, Image,Alert, SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import {colors} from '../layout/systemLayout';
import  Button  from '../helpers/components/Button';
import Signup from './Signup';
import Icon from 'react-native-vector-icons/Ionicons';
import {style} from './style/style_Login'

const Signin = ({navigation}) => {

  return (
   
    <LinearGradient
      colors={[colors.primary, colors.Secondary]}
      style={style.container}
      start={{x: 1, y: 0}}
      end={{x: 0.5, y: 1}}>
       <Icon name="arrow-back" size={30} color={colors.Secondary} style={style.backbutton} onPress={()=>{navigation.goBack()}}/>
      <View style={style.section}> 
        <Image
          style={style.headerImage}
          source={require('../assets/blood-donation.png')}
        />
        <Text style={style.subText}>Donate your blood and save a life</Text>
        <Text style={style.heading}>Login to Your Account</Text>
        <Text style={style.subHeading}>Continue with your social network</Text>
        <Button primary title="Continue with Google" onPress={()=>{ navigation.navigate('UserDetailsForm')}} style={style.button} name='logo-google' size={30} color={colors.Secondary}/>
    
      </View>      
    </LinearGradient>
  );
};

export default Signin;
