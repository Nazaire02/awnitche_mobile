import { Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function vehicule() {
    const vehicles = [
        {
            id: 1,
            name: 'Fourgon',
            chauffeur: 'Traoré Hassan',
            matricule: '12ZJDJDDJDD',
            tonnage: '1UENDN',
            taille: '100',
            image: require('../../../assets/images/fourgon.jpeg'),
            categorie: "",
            ville: "Abidjan"
        },
        {
            id: 2,
            name: 'Camion',
            chauffeur: 'Kouadio Alpha',
            matricule: '34KLJFD234',
            tonnage: '2VNDG7',
            taille: '120',
            image: require('../../../assets/images/fourgon.jpeg'),
            categorie: "",
            ville: "Abidjan"
        },
        {
            id: 3,
            name: 'Camion',
            chauffeur: 'Kouadio Alpha',
            matricule: '34KLJFD234',
            tonnage: '2VNDG7',
            taille: '120',
            image: require('../../../assets/images/fourgon.jpeg'),
            categorie: "",
            ville: "Abidjan"
        },
        {
            id: 4,
            name: 'Camion',
            chauffeur: 'Kouadio Alpha',
            matricule: '34KLJFD234',
            tonnage: '2VNDG7',
            taille: '120',
            image: require('../../../assets/images/fourgon.jpeg'),
            categorie: "",
            ville: "Abidjan"
        },
        {
            id: 4,
            name: 'Camion',
            chauffeur: 'Kouadio Alpha',
            matricule: '34KLJFD234',
            tonnage: '2VNDG7',
            taille: '120',
            image: require('../../../assets/images/fourgon.jpeg'),
            categorie: "",
            ville: "Abidjan"
        },
        {
            id: 4,
            name: 'Camion',
            chauffeur: 'Kouadio Alpha',
            matricule: '34KLJFD234',
            tonnage: '2VNDG7',
            taille: '120',
            image: require('../../../assets/images/fourgon.jpeg'),
            categorie: "",
            ville: "Abidjan"
        },
        {
            id: 4,
            name: 'Camion',
            chauffeur: 'Kouadio Alpha',
            matricule: '34KLJFD234',
            tonnage: '2VNDG7',
            taille: '120',
            image: require('../../../assets/images/fourgon.jpeg'),
            categorie: "",
            ville: "Abidjan"
        },
    ];
    return (
        <ScrollView style={styles.container} bounces={false}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Les véhicules</Text>
                <Pressable style={styles.buttonAdd}>
                    <Text style={{ color: "#FFF" }} onPress={() => (router.navigate("/(proprietaire)/vehicules/add"))}>Ajouter un véhicule</Text>
                </Pressable>
            </View>
            {vehicles.map((vehicle, index) => (
                <View key={index} style={styles.cardContainer}>
                    <View style={styles.cardImage}>
                        <Image
                            style={{
                                height: 100,
                                width: "100%",
                                objectFit: "contain"
                            }}
                            source={vehicle.image}
                        />
                    </View>
                    <View style={styles.cardDetails}>
                        <Text style={{ fontWeight: "bold" }}>{vehicle.name}</Text>
                        <View>
                            <Text>Matricule: {vehicle.matricule}</Text>
                            <Text>Tonnage: {vehicle.tonnage}</Text>
                            <Text>Taille: {vehicle.taille}</Text>
                            <Text>Catégorie: {vehicle.categorie}</Text>
                            <Text>Ville: {vehicle.ville}</Text>
                            <Text>Chauffeur: {vehicle.chauffeur}</Text>
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
    cardImage: {
        width: "40%"
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
        // position: "absolute",
        // bottom:"78%",
        // right: 0,
    }
})