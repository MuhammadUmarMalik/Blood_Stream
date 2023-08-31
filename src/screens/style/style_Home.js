import { StyleSheet } from "react-native";
import {colors} from '../../layout/systemLayout';

const style = StyleSheet.create({
    container:{
        flex:1,
      
      },
      menu:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20,
        padding:20
      },
      welcomeText:{
        display:'flex',
        flexDirection:'column', 
      },
      heading:{
        alignSelf:'flex-start',
        fontFamily:'Inter',
        fontWeight:'bold',
        fontSize:30,
       
        color:colors.Secondary
      },
      headerImage:{
        width:50,
        height:50
      },
      userDetails:{
        width:"90%",
        height:'30%',
        backgroundColor:colors.Secondary,
        alignSelf:'center',
        borderRadius:10,
        marginVertical:40
      },
      userHeading:{
        fontSize:24,
        fontWeight:"bold",
        padding:20,
        color:colors.SwipeBtn
      },
      detailsBox:{
        paddingLeft:20,
      },
      userBloodGroup:{
        flexDirection:"row",
        justifyContent:'space-around',
        
      },
      bloodGroup:{
        backgroundColor
      }
  });
  
  export { style};