import { StyleSheet, TouchableOpacity, Text,Image } from "react-native";
import React from "react";
import { colors, typography } from "../../layout/systemLayout";
import Icon from 'react-native-vector-icons/Ionicons';
/***
 *
 * primary : ( full bg  , with primary color, no border)
 * outline : ( no bg, border with primary, border 1 )
 */
function Button({ primary, outline, title, onPress,name,size,color }) {
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
      <Icon name={name} size={size} color={color}/>
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
  width: "80%",
  marginVertical: 15,
  padding:15,
  color: colors.Secondary,
  display:'flex',
  flexDirection:'row',
  justifyContent:"space-between",
  alignItems:'center'
  },
  btnText: {
    color: colors.Secondary,
    fontSize:21,
    fontWeight:'bold',
    textAlign:'right'
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

export default Button ;