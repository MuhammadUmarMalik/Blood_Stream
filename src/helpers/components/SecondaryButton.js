import { StyleSheet, TouchableOpacity, Text,Image } from "react-native";
import React from "react";
import { colors, typography } from "../../layout/systemLayout";
import Icon from 'react-native-vector-icons/Ionicons';
/***
 *
 * primary : ( full bg  , with primary color, no border)
 * outline : ( no bg, border with primary, border 1 )
 */
function SecondaryButton({ primary, outline, title, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        primary === true
          ? styles.primaryButton
          : outline === true
          ? styles.outlineButton
          : styles.outlineButton
      }
    >
     
      <Text
        style={
          primary
            ? styles.btnText
            : outline
            ? styles.outlineText
            : styles.btnText
        }
      >
        {title}
      </Text>
      
    </TouchableOpacity>
  );
}



const styles = StyleSheet.create({

  primaryButton: {
  backgroundColor: colors.primary,
  borderRadius: 10,
  width: "100%",
  marginVertical: 10,
  marginHorizontal:10,
  padding:10,
  color: colors.Secondary,
  justifyContent:'center',
  alignItems:'center',
    
  },
  btnText: {
    color: colors.Secondary,
    fontSize:16,
    fontWeight:'bold',
    textAlign:'right',
    
  },
  outlineButton: {
    // ...base,
    //  backgroundColor: colors.Secondary,
    borderWidth:1,
    borderRadius:10,
    borderColor:colors.Accsent,
    width: "80%",
    padding:10,
  },
  outlineText: {
    color: colors.primary,
    fontSize:18,
    fontWeight:'bold',
    paddingLeft:100
  },
});

export default SecondaryButton ;