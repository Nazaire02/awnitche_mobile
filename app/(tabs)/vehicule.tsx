import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

export default function vehicule() {
    return (
        <ScrollView style={styles.container} bounces={false}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Les véhicules</Text>
                <Pressable style={styles.buttonAdd}>
                    <Text style={{color:"#FFF"}}>Ajouter un véhicule</Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    header:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:12,
        borderBottomWidth:1,
        borderBottomColor:Colors.light.mainColor,
        paddingVertical:12
    },
    headerTitle:{
        fontWeight:"bold",
        fontSize:20
    },
    buttonAdd:{
        backgroundColor:Colors.light.mainColor,
        padding:12,
        borderRadius:10
    }
})