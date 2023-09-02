import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Alert,
  SafeAreaView,
  Image
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {style} from './style/style_FindDonor';
import DropDownPicker from 'react-native-dropdown-picker';
import PrimaryButton from '../helpers/components/PrimaryButton';
import {colors} from '../layout/systemLayout';
import SecondaryButton from '../helpers/components/SecondaryButton';


const FindDonor = () => {
  const [isOpenBloodGroup, setIsOpenBloodGroup] = useState(false);
  const [currentBloodGroup, setCurrentBloodGroup] = useState();
  const [data, setData] = useState([]);

  const BloodGroup = [
    {label: 'A+', value: 'A_POS'},
    {label: 'A-', value: 'A_NEG'},
    {label: 'B+', value: 'B_POS'},
    {label: 'B-', value: 'B_NEG'},
    {label: 'AB+', value: 'AB_POS'},
    {label: 'AB-', value: 'AB_NEG'},
    {label: 'O+', value: 'O_POS'},
    {label: 'O-', value: 'O_NEG'},
  ];
  const bloodGroup = setCurrentBloodGroup
  //get data for database and display in flat list
  
  const fetchData =  () => {
    
      if (!currentBloodGroup) {
        Alert.alert('Please select a blood group');
        return;
      }

    fetch(`http://172.17.160.1:3333/api/users/${currentBloodGroup}`)
    .then(response => response.json())
    .then(jsonResponse => setData(jsonResponse))
    .catch(error => console.log(error))
  };

  const renderItem = ({item}) => (
   
    <View style={style.Donor}>
      
      <Image source={{ uri: item.profile_picture }} style={style.profile}/>
      <View>
     
        <Text style={style.userName}>{item.name}</Text>
      </View> 
      <View style={style.button}>
        <SecondaryButton primary title={'Accept'} onPress={()=>{Alert.alert('Your request is sent.')}}/>
        <SecondaryButton primary title={'Decline'} onPress={()=>{Alert.alert('reject')}}/>
      </View>
      </View>

  );

  // on continue

  return (
    <View style={style.container}>
      <Text
        style={{
          fontSize: 25,
          fontWeight: 'bold',
          padding: 10,
          backgroundColor: colors.primary,
          color: colors.Secondary,
          width: '100%',
        }}>
        Blood Group
      </Text>
      <View style={style.box}>
        <Text
          style={{
            textAlign: 'left',
            fontSize: 18,
            alignSelf: 'flex-start',
            marginLeft: 40,
            padding: 10,
          }}>
          Blood Group
        </Text>
        <DropDownPicker
          items={BloodGroup}
          open={isOpenBloodGroup}
          setOpen={() => {
            setIsOpenBloodGroup(!isOpenBloodGroup);
          }}
          value={currentBloodGroup}
          setValue={value => {
            setCurrentBloodGroup(value);
          }}
          placeholder="Select your Blood Group"
          style={{width: '80%', alignSelf: 'center', margin: 10}}
        />

        <PrimaryButton
          primary
          title={'Find Donor'}
          onPress={fetchData}
        />
        <View style={style.DonorList}>
          <Text style={style.heading}>Donors</Text>
          <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={data}
        // renderItem={renderItem}
        renderItem={renderItem}
        keyExtractor={(item,index) => index.toString()}
      />
        </View>
      </View>
    </View>
  );
};

export default FindDonor;
