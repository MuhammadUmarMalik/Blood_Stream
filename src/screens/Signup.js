import {View, TextInput, Alert, Image} from 'react-native';
import {React, useState} from 'react';
import {style} from './style/style_Singup';
import PrimaryButton from '../helpers/components/PrimaryButton';

const Signup = ({navigation}) => {
  
  // state management
  const [name, setName] = useState('');
  const [address, setAdress] = useState('');
  const [city, setCity] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [bloodgroup, setBloodgroup] = useState('');
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  const onContinue = () => {
    if (name === '') {
      Alert.alert('Name is missing');
    }
    if (address === '') {
      Alert.alert('Adress is missing');
    }
    if (city === '') {
      Alert.alert('City is missing');
    }
    if (phoneNo === '') {
      Alert.alert('Phone No# is missing');
    }
    if (bloodgroup === '') {
      Alert.alert('Blood Group is missing');
    }
     setIsLoggedIn(true)
    };
  return (
    <View style={style.container}>
      <View style={style.section}>
        <TextInput
          placeholder="Enter Your Name"
          value={name}
          onChangeText={setName}
          style={style.inputField}
          onSubmitEditing={this.handleEditComplete}
        />
        <TextInput
          placeholder="Enter Your Address"
          value={address}
          onChangeText={setAdress}
          style={style.inputField}
        />
        <TextInput
          placeholder="Select your City"
          value={city}
          onChangeText={setCity}
          style={style.inputField}
        />
        <TextInput
          placeholder="+923171600808"
          value={phoneNo}
          onChangeText={setPhoneNo}
          style={style.inputField}
        />
        <TextInput
          placeholder="Blood Group"
          value={bloodgroup}
          onChangeText={setBloodgroup}
          style={style.inputField}
        />
        <PrimaryButton
          primary
          title="Continue"
          onPress={()=>{navigation.navigate('HomeSCreen')}}
          style={style.button}
        />
      </View>
    </View>
  );
};

export default Signup;
