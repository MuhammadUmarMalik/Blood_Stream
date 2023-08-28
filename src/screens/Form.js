import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Form = () => {
  return (
    <View style={style.container}>
      <View  style={style.form}>
      <Text style={{justifyContent:"center"}}>Create Your Account</Text>
      </View>
    </View>
  )
}

export default Form

const style=StyleSheet.create({
    container:{
       flex:1,
       justifyContent:'center',
       alignItems:'center'
    },

})
