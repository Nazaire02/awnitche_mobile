import { Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function index() {
  const notifications = [
    {
      id: 1,
      chauffeur: 'Traoré Hassan',
      Numero: '0709090909',
      vehiculeType: 'Fourgon',
      vehiculeMatricule: '12ZJDJDDJDD',
      montant: '1UENDN',
      depart: 'Adjamé',
      destination: 'Trechville',
      status:'complete'
    },
    {
      id: 2,
      chauffeur: 'Traoré Hassan',
      Numero: '0709090909',
      vehiculeType: 'Fourgon',
      vehiculeMatricule: '12ZJDJDDJDD',
      montant: '1UENDN',
      depart: 'Adjamé',
      destination: 'Trechville',
      status:'complete'
    },
    {
      id: 3,
      chauffeur: 'Traoré Hassan',
      Numero: '0709090909',
      vehiculeType: 'Fourgon',
      vehiculeMatricule: '12ZJDJDDJDD',
      montant: '1UENDN',
      depart: 'Adjamé',
      destination: 'Trechville',
      status:'complete'
    },
    {
      id: 4,
      chauffeur: 'Traoré Hassan',
      Numero: '0709090909',
      vehiculeType: 'Fourgon',
      vehiculeMatricule: '12ZJDJDDJDD',
      montant: '1UENDN',
      depart: 'Adjamé',
      destination: 'Trechville',
      status:'complete'
    },
    {
      id: 5,
      chauffeur: 'Traoré Hassan',
      Numero: '0709090909',
      vehiculeType: 'Fourgon',
      vehiculeMatricule: '12ZJDJDDJDD',
      montant: '1UENDN',
      depart: 'Adjamé',
      destination: 'Trechville',
      status:'complete'
    },
    {
      id: 6,
      chauffeur: 'Traoré Hassan',
      Numero: '0709090909',
      vehiculeType: 'Fourgon',
      vehiculeMatricule: '12ZJDJDDJDD',
      montant: '1UENDN',
      depart: 'Adjamé',
      destination: 'Trechville',
      status:'complete'
    },
    {
      id: 7,
      chauffeur: 'Traoré Hassan',
      Numero: '0709090909',
      vehiculeType: 'Fourgon',
      vehiculeMatricule: '12ZJDJDDJDD',
      montant: '1UENDN',
      depart: 'Adjamé',
      destination: 'Trechville',
      status:'complete'
    },
  ];
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Notifications</Text>
        </View>
        {notifications.map((notification, index) => (
          <View key={index} style={styles.cardContainer}>
            <Text style={styles.courseStatus}>Course {notification.status === "complete" ? 'terminée' : 'en cours'}</Text>
            <View style={styles.cardDetails}>
              <Text>Chauffeur: {notification.chauffeur}</Text>
              <Text>Numéro: {notification.Numero}</Text>
              <Text>Type véhicule: {notification.vehiculeType}</Text>
              <Text>Matricule véhicule: {notification.vehiculeMatricule}</Text>
              <Text>Montant: {notification.montant}</Text>
              <Text>Itinéraire: {notification.depart} - {notification.destination}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.floatingContainer}>
        <TouchableOpacity style={styles.floatingButton} onPress={() => {router.replace("/(proprietaire)/vehicules")}}>
          <MaterialIcons name="directions-car" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.floatingButton, styles.buttonSpacing]} onPress={() => {router.replace("/(proprietaire)/chauffeurs")}}>
          <MaterialIcons name="person-add" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
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
    borderWidth: 1,
    borderColor: "green",
    paddingHorizontal: 12,
    paddingVertical: 8,
    margin: 8,
  },
  cardDetails: {
    flex: 1,
  },
  cardImage: {
    width: "40%"
  },
  courseStatus: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 15,
  },
  icon: {
    position: "absolute",
    bottom: "90%",
    right: 0,
  },
  floatingContainer: {
    position: "absolute",
    bottom: 20,
    right: 20,
    alignItems: "center",
  },
  floatingButton: {
    backgroundColor: Colors.light.mainColor,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
  },
  buttonSpacing: {
    marginTop: 15,
  }
})