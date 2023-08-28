import { StyleSheet } from "react-native";
import {colors} from '../../layout/systemLayout';

const style = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:"center",
      backgroundColor:'#F1F1F1'
      
    },
    section:{
     marginVertical:10,
     width:'100%',
     height:'60%',
     justifyContent: "center", alignItems: "center"
    },
    profieImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
    },
  
    inputField:{
       backgroundColor:"#ffff",
      borderWidth:1,
      borderColor:'black',
      padding:10,
      margin:10,
      width:"80%",
      alignSelf:'center',
      borderRadius:10
      
    },
    button:{
     
    }

  });
  
  export { style};