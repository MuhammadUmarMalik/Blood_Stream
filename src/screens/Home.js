import { View, Text, StyleSheet ,Image} from 'react-native'
import React from 'react'
import { create } from 'react-test-renderer'
import LinearGradient from 'react-native-linear-gradient'
import { colors } from '../layout/systemLayout'
import { style } from './style/style_Home'
export default function Home(s) {
  return (
    <View style={style.container}>
       <LinearGradient
        colors={[colors.GradientSecondary,colors.primary]}
        style={style.container}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
      >

       <View style={style.menu}>
     
        <View style={style.welcomeText}>
        <Text style={style.heading}>
            Welcome
          </Text>
          <Text style={style.infoName}>
            Umar Malik
          </Text>
        </View>
        <Image
          style={style.headerImage}
          source={require('../assets/User.png')}
        />
       </View>
       <View style={style.userDetails}>
          <Text style={style.userHeading}>USER DETAILS</Text>
       
          {/* user details */}
        <View style={style.detailsBox}>
         <View style={style.userBloodGroup}>
         <Text>Your Blood Group 🩸</Text>
            <Text sytle={style.bloodGroup}>A+</Text>
         </View>
         <View style={style.Donation}>
         <Text>Last Time Donation</Text>
            <Text>01-08-2023</Text>
         </View>
         <View style={style.TotalDonation}>
         <Text>Total Donation</Text>
            <Text>2</Text>
         </View>
         
        </View>
       
       </View>
        </LinearGradient>
    </View>
  )
}
