import { StyleSheet } from "react-native";
import {colors} from '../../layout/systemLayout';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
const style = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'flex-start',
      alignItems:"center",
    },
    section:{
      width:"100%",
      height:'80%',
      justifyContent:'center',
      alignItems:"center"
    },
    backbutton:{
      alignSelf:'flex-start',
      paddingLeft:20,
      paddingTop:10
    },
    headerImage:{
      marginTop:10,
      width:250,
      height:250
    },
    subText:{
      textAlign:'center',
      fontSize:20,
      fontWeight:'bold',
      marginVertical:10,
      paddingHorizontal:70,
      color:colors.Secondary
    },
    heading:{
      textAlign:'center',
      fontSize:30,
      fontWeight:'bold',
      marginVertical:5,
      color:colors.primary
    },
    subHeading:{
      textAlign:'center',
      fontSize:12,
      fontWeight:'bold',
      marginVertical:10,
      color:colors.primary
    },
  });
  
  export { style };