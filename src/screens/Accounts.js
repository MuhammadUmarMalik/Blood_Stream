import {View, TextInput, Alert, Image,TouchableOpacity, Text} from 'react-native';
import {React, useState,useRef} from 'react';
import {style} from './style/style_Singup';
import PrimaryButton from '../helpers/components/PrimaryButton';

import {Picker} from '@react-native-picker/picker';
import { Dropdown } from 'react-native-element-dropdown';
import DropDownPicker from 'react-native-dropdown-picker';

const Accounts = ({navigation}) => {
  // state management
  const [name, setName] = useState('');
  const [address, setAdress] = useState('');
  const [city, setCity] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [bloodgroup, setBloodgroup] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState();
  const [isOpenBloodGroup, setIsOpenBloodGroup] = useState(false);
  const [currentBloodGroup, setCurrentBloodGroup] = useState();
  const onContinue = () => {
    setIsLoggedIn(true);
  };
  const cities=[
    {label:'Chowk Azam' , value:'chowk azam'},
    {label:'Layyah' , value:'layyah'},
    {label:'Choubara' , value:'choubara'},
    {label:'Fateh Pur' , value:'fateh pur'},
  ]
  const BloodGroup=[
    {label:'A+' , value:'A_POS'},
    {label:'A-' , value:'A_NEG'},
    {label:'B+' , value:'B_POS'},
    {label:'B-' , value:'B_NEG'},
    {label:'AB+' , value:'AB_POS'},
    {label:'AB-' , value:'AB_NEG'},
    {label:'O+' , value:'O_POS'},
    {label:'O-' , value:'O_NEG'},
  ]

  return (
    <View style={style.container}>
      <View style={style.section}>
        <TouchableOpacity></TouchableOpacity>
        <Text style={{textAlign:'left',fontSize:18,alignSelf:'flex-start',marginLeft:50}}>Name</Text>
        <TextInput
          placeholder="Enter Your Name"
          placeholderTextColor="#BABABA"
          value={name}
          onChangeText={setName}
          style={style.inputField}
          onSubmitEditing={this.handleEditComplete}
        />
          <Text style={{textAlign:'left',fontSize:18,alignSelf:'flex-start',marginLeft:50}}>Address</Text>
        <TextInput
          placeholder="Enter Your Address"
          placeholderTextColor="#BABA"
          value={address}
          onChangeText={setAdress}
          style={style.inputField}
        />
          <Text style={{textAlign:'left',fontSize:18,alignSelf:'flex-start',marginLeft:50}}>City</Text>
        <DropDownPicker 
         
          items={cities}
          open={isOpen}
          setOpen={()=>{setIsOpen(!isOpen)}}
          value={currentValue}
          setValue={(value)=>{setCurrentValue(value)}}
          placeholder='Select your City'
          style={{width:'80%',alignSelf:'center',margin:10}}
        />
          <Text style={{textAlign:'left',fontSize:18,alignSelf:'flex-start',marginLeft:50}}>Phone Number</Text>
        <TextInput
          placeholder="+923171600808"
          placeholderTextColor="#BABA"
          value={phoneNo}
          onChangeText={setPhoneNo}
          style={style.inputField}
        />
          <Text style={{textAlign:'left',fontSize:18,alignSelf:'flex-start',marginLeft:50}}>Blood Group</Text>
         <DropDownPicker 
         items={BloodGroup}
         open={isOpenBloodGroup}
         setIsOpenBloodGroup={()=>{setIsOpenBloodGroup(!isOpenBloodGroup)}}
         value={currentBloodGroup}
         setValue={(value)=>{setCurrentBloodGroup(value)}}
         placeholder='Select your Blood Group'
         style={{width:'80%',alignSelf:'center', margin:10}}
       />
        <PrimaryButton
          primary
          title="Save"
          onPress={() => {
            Alert.alert('Details updated');
          }}
          style={style.button}
        />
      </View>
    </View>
  );
};

export default Accounts;
