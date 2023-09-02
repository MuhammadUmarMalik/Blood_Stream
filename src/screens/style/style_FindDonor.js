import { StyleSheet } from "react-native";
import {colors} from '../../layout/systemLayout';

const style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#F1F1F1',
      justifyContent:'center',
    },
    box:{
    flex:1,
    },
    card:{
      width:"100%",
      // height:'60%',
      borderRadius:10,
      backgroundColor:colors.highlight,
      justifyContent:'space-between',
      paddingHorizontal:10,
      padding:10,
      
    },
   
    // DonorList:{
    //   flex:1,
    //   // justifyContent: 'center',
    //   // alignItems:'center',
    //   // width:'100%',
    
    //   backgroundColor:'#F8F8F8',
     
    // },
    Donor:{
        flex:1,
        padding:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:colors.Secondary

    },
    heading:{
        fontSize:24,
        fontWeight:'bold',
        padding: 10,
        alignSelf:'flex-start'
    },

   
    userName:{
        fontSize:20,
        fontWeight:'bold',
        alignSelf:'flex-start',
        textAlign:'left',
        fon
    },
    profile:{width:80,height:80,borderRadius:50,resizeMode:'cover'},
   button:{
    width:'20%',
    flexDirection:"column",
    // alignSelf:'flex-end'
    
    

   }
  });
  
  export { style};