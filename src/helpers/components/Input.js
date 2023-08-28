import { View, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../layout/systemLayout'

const Input = ({placeholder}) => {
    const [input,SetInput]=useState('')
  return (
    <View>
      <TextInput
        style={style.input}
        onChangeText={SetInput}
        placeholder={placeholder}
      />
    </View>
  )
}

export default Input

const style=StyleSheet.create({
    input:{
        borderBottomWidth:1,
        borderColor:colors.Accsent,
        padding:10,
        margin:10,
        width:"80%",alignSelf:'center'
    }
})