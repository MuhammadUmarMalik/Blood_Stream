import {View, Text, StyleSheet, Image,Alert, SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React ,{useEffect,useState}from 'react';
import {colors} from '../layout/systemLayout';
import  Button  from '../helpers/components/Button';
import Signup from './Signup';
import Icon from 'react-native-vector-icons/Ionicons';
import {style} from './style/style_Login'
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-community/google-signin';
// import AsyncStorage from '@react-native-community/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signin = ({navigation}) => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    GoogleSignin.configure({
      // scopes: ['email'], // Add any additional scopes you need
      webClientId: '740334485082-rnj0ljq5qpfsh1sehabt3dih2l8j1u5k.apps.googleusercontent.com', // Replace with your Web Client ID from the Google Developer Console
      offlineAccess: false
    });
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUserInfo(userInfo);
      console.log(setUserInfo(userInfo))

      // Store the user's ID token securely
      await AsyncStorage.setItem('userToken', userInfo.idToken);
      
      // You can also send this token to your backend for further authentication
      // Example API call to your backend:
      fetch(`http://192.168.43.101:3333/auth/google`)
      console.log(fetch(`http://192.168.43.101:3333/auth/google`))
      .then(response => response.json())
      .then(jsonResponse => setData(jsonResponse))
      .catch(error => console.log(error))
      // fetch('http://192.168.43.101:3333/auth/google', {
      //   method: 'GET',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ idToken: userInfo.idToken }),

      // });
      navigation.navigate("HomeScreen")
    } catch (error) {

      console.log(error)

      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // User cancelled the login process
        console.log(error.code)
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // Another login process is in progress
        console.log(error.code)
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // Play services are not available
        console.log(error.code)
      } else {
        // Other error
        console.error(error);
      }
    }
  };

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();

      setUserInfo(null);
      await AsyncStorage.removeItem('userToken');
    } catch (error) {
      console.error(error);
    }
  };

  // const handlelogin=()=>{
  //   signIn();
  //   navigation.navigate("HomeScreen")
  // }
 
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
        <Button primary title="Continue with Google" onPress={signIn} style={style.button} name='logo-google' size={30} color={colors.Secondary}/>
    
      </View>      
    </LinearGradient>
  );
};

export default Signin;
