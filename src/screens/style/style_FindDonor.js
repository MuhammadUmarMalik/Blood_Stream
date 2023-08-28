import { StyleSheet } from "react-native";
import {colors} from '../../layout/systemLayout';

const style = StyleSheet.create({
    container: {
      flex: 1,
    
      backgroundColor:'#F1F1F1'
      
    },
    box:{
    flex:1,

    },
    card:{
      width:"80%",
      borderRadius:10,
      alignSelf:'center'
    },
   
    DonorList:{
      backgroundColor:'#F8F8F8',
      width:"100%",
      height:"100%"
    },
    heading:{
        fontSize:24,
        fontWeight:'bold',
        padding: 10,
    }
  });
  
  export { style};