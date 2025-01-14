import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

export default function Header() {
  return (
      <View style={styles.header}>
        <Image
          source={require("../assets/images/icon.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <TouchableOpacity>
          <Text style={styles.contactText}>NOUS CONTACTER</Text>
        </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 4,
        backgroundColor: '#fff',
        borderBlockColor: Colors.light.mainColor,
        borderBottomWidth: 1
      },
      contactText: {
        fontSize: 14,
      },
      logo: {
        width: 200,
      },
})