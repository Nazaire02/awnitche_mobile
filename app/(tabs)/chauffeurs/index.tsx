import { Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function index() {
    const chauffeurs = [
        {
            id: 1,
            firstName:"Traoré",
            lastName:"Hassan",
            firstTel:"0709090909",
            secondTel:"0109090909",
            vehicleOccupied:"AHB01HEH"
        },
        {
            id: 2,
            firstName:"Traoré",
            lastName:"Hassan",
            firstTel:"0709090909",
            secondTel:"0109090909",
            vehicleOccupied:"AHB01HEH"
        },
        {
            id: 3,
            firstName:"Traoré",
            lastName:"Hassan",
            firstTel:"0709090909",
            secondTel:"0109090909",
            vehicleOccupied:"AHB01HEH"
        },
        {
            id: 4,
            firstName:"Traoré",
            lastName:"Hassan",
            firstTel:"0709090909",
            secondTel:"0109090909",
            vehicleOccupied:"AHB01HEH"
        },
        {
            id: 4,
            firstName:"Traoré",
            lastName:"Hassan",
            firstTel:"0709090909",
            secondTel:"0109090909",
            vehicleOccupied:"AHB01HEH"
        }
    ];
    return (
        <ScrollView style={styles.container} bounces={false}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Les chauffeurs</Text>
                <Pressable style={styles.buttonAdd}>
                    <Text style={{ color: "#FFF" }} onPress={()=>(router.navigate("/(tabs)/chauffeurs/add"))}>Ajouter un chauffeur</Text>
                </Pressable>
            </View>
            {chauffeurs.map((chauffeur, index) => (
                <View key={index} style={styles.cardContainer}>
                    <View style={styles.profilePicture}>
                    </View>
                    <View style={styles.cardDetails}>
                        <TouchableOpacity style={styles.icon}>
                            <MaterialIcons name="edit" size={24} color="#E38D3D" />
                        </TouchableOpacity>
                        <View>
                            <Text>Nom: {chauffeur.firstName}</Text>
                            <Text>Prénom: {chauffeur.lastName}</Text>
                            <Text>Numéro tel 1: {chauffeur.firstTel}</Text>
                            <Text>Numéro tel 2: {chauffeur.secondTel}</Text>
                            <Text>Vehicule occupé: {chauffeur.vehicleOccupied}</Text>
                        </View>
                    </View>
                </View>
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
    },
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: Colors.light.mainColor,
    },
    headerTitle: {
        fontWeight: "bold",
        fontSize: 20
    },
    buttonAdd: {
        backgroundColor: Colors.light.mainColor,
        padding: 12,
        borderRadius: 10
    },
    buttonPost: {
        backgroundColor: "green",
        paddingVertical: 8,
        borderRadius: 4,
        paddingHorizontal: "20%",
        marginTop: 20
    },
    cardContainer: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.light.mainColor,
        padding: 12,
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    cardDetails: {
        flex: 1,
        alignItems: "center",
    },
    profilePicture: {
        height:90,
        width: 90,
        backgroundColor:"grey",
        borderRadius:80
    },
    icon: {
        position: "absolute",
        bottom:"80%",
        right: 0,
    }
})