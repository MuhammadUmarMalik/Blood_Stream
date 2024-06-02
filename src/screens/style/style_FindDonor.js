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
      marginBottom:10
      
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
        backgroundColor:colors.GradientSecondary,
        padding:10,
        marginBottom:10
    },
    heading:{
        fontSize:24, 
        fontWeight:'bold',
        padding: 10,
        alignSelf:'flex-start'
    },
  
   infoDetails:{
      flex:1,
      flexDirection:'row',
      width:"100%",
      flexDirection:'column',
      padding:10,
      marginLeft:10
   },
    userName:{
        fontSize:20,
        fontWeight:'bold',
        alignSelf:'flex-start',
        textAlign:'left',
        marginLeft:10,
        
    },
    profile:{width:80,height:80,borderRadius:50,resizeMode:'cover'},
   button:{
    width:'40%',
    flexDirection:"row",
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:10

    // alignSelf:'flex-end'
    
    

   }
  });
  
  export { style};