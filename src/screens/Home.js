import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { create } from 'react-test-renderer'
import LinearGradient from 'react-native-linear-gradient'
import { colors } from '../layout/systemLayout'
export default function Home({name}) {
  return (
    <View style={styles.container}>
       <LinearGradient
        colors={[colors.primary,colors.Secondary]}
        style={styles.container}
        start={{ x: 1, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      >

       <View style={styles.menu}>
       <View style={styles.welcomeText}>
          <Text style={styles.heading}>
            Welcome
          </Text>
          <Text>
            Umar Malik
          </Text>
        </View>
       </View>
        </LinearGradient>
    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    flex:1,
  },
  welcomeText:{
    flexDirection:'row',
    display:'flex'
  },
  heading:{
    alignSelf:'flex-start',
    fontFamily:'Inter',
    fontWeight:'bold',
    fontSize:20
  }
})