import { Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function index() {
    const chauffeurs = [
        {
            id: 1,
            firstName: "Traoré",
            lastName: "Hassan",
            tel: "0709090909",
            vehicleOccupied: "AHB01HEH"
        },
        {
            id: 2,
            firstName: "Traoré",
            lastName: "Hassan",
            tel: "0709090909",
            vehicleOccupied: "AHB01HEH"
        },
        {
            id: 3,
            firstName: "Traoré",
            lastName: "Hassan",
            tel: "0709090909",
            vehicleOccupied: "AHB01HEH"
        },
        {
            id: 4,
            firstName: "Traoré",
            lastName: "Hassan",
            tel: "0709090909",
            vehicleOccupied: "AHB01HEH"
        },
        {
            id: 4,
            firstName: "Traoré",
            lastName: "Hassan",
            tel: "0709090909",
            vehicleOccupied: "AHB01HEH"
        }
    ];
    return (
        <ScrollView style={styles.container} bounces={false}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Les chauffeurs</Text>
                <Pressable style={styles.buttonAdd}>
                    <Text style={{ color: "#FFF" }} onPress={() => (router.replace("/(proprietaire)/chauffeurs/add"))}>Ajouter un chauffeur</Text>
                </Pressable>
            </View>
            {chauffeurs.map((chauffeur, index) => (
                <View key={index} style={styles.cardContainer}>
                    <View style={styles.profilePicture}>
                    </View>
                    <View style={styles.cardDetails}>
                        <View>
                            <Text>Nom: {chauffeur.firstName}</Text>
                            <Text>Prénom: {chauffeur.lastName}</Text>
                            <Text>Numéro tel: {chauffeur.tel}</Text>
                            <Text>Vehicule: {chauffeur.vehicleOccupied}</Text>
                        </View>
                    </View>
                    <View style={styles.actions}>
                        <TouchableOpacity style={styles.iconEdit}>
                            <MaterialIcons name="edit" size={24} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconDelete}>
                            <MaterialIcons name="delete" size={24} color="black" />
                        </TouchableOpacity>
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
        height: 90,
        width: 90,
        backgroundColor: "grey",
        borderRadius: 80
    },
    actions: {
        position: "absolute",
        bottom: "70%",
        right: 4
    },
    iconEdit: {
        marginBottom: 4
    },
    iconDelete: {
    }
})