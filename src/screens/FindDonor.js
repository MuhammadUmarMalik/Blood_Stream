import {View, Text, TouchableOpacity,FlatList,SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {style} from './style/style_FindDonor';
import DropDownPicker from 'react-native-dropdown-picker';
import PrimaryButton from '../helpers/components/PrimaryButton';
import { colors } from '../layout/systemLayout';
import aoxis from 'axois'

const FindDonor = () => {

  const [isOpenBloodGroup, setIsOpenBloodGroup] = useState(false);
  const [currentBloodGroup, setCurrentBloodGroup] = useState();
  
  const items={}
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
  //get data for database and display in flat list
  useEffect(() => {
   fetchData()
  }, [])
  
  const fetchData=async()=>{

    aoxis.get(apiURL).then(
      (response) =>{
        setData(response.data)
        
      }
    ).catch(error=>{
      console.error('Error fetching data',error)
    })
  }

  const renderItem=({Item})=>(
    <View style={style.request}>{Item.name}</View>
  )

  return (
    <View style={style.container}>
      <Text style={{fontSize:25,fontWeight:"bold",padding:10,backgroundColor:colors.primary,color:colors.Secondary,width:"100%"}}>Blood Group</Text>
     <View style={style.box}>
     <Text style={{textAlign:'left',fontSize:18,alignSelf:'flex-start',marginLeft:40,padding:10}}>Blood Group</Text>
     <DropDownPicker 
         items={BloodGroup}
         open={isOpenBloodGroup}
         setIsOpenBloodGroup={()=>{setIsOpenBloodGroup(!isOpenBloodGroup)}}
         value={currentBloodGroup}
         setValue={(value)=>{setCurrentBloodGroup(value)}}
         placeholder='Select your Blood Group'
         style={{width:'80%',alignSelf:'center', margin:10}}
       />
        
      <PrimaryButton primary title={'Find Donor'} onPress={()=>{Alert.alert('Finding')}}/>
     <View style={style.DonorList}>
      <Text style={style.heading}>Donors</Text>
      <SafeAreaView>
    
      <FlatList data={data} renderItem={()=>{renderItem}} keyExtractor={(Item)=>Item.id}/>
    
      </SafeAreaView>
     </View>
     </View>
    </View>
  );
};

export default FindDonor;
