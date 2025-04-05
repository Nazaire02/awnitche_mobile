import { StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

export default function add() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerTitle}>Ajouter un chauffeur</Text>
      <View style={styles.photoContainer}>
        <Image
          //source={require("./assets/avatar-placeholder.png")}
          style={styles.photo}
        />
        <Text style={styles.photoText}>Photo</Text>
      </View>
      <View style={{ paddingHorizontal: 12 }}>
        <View>
          <Text style={styles.label}>Type de véhicule</Text>
          <TextInput
            style={styles.textInput}
            placeholder=''
          />
        </View>
        <View>
          <Text style={styles.label}>Matricule</Text>
          <TextInput
            style={styles.textInput}
            placeholder=''
          />
        </View>
        <View>
          <Text style={styles.label}>Pays</Text>
          <TextInput
            style={styles.textInput}
            placeholder=''
          />
        </View>
        <View>
          <Text style={styles.label}>Ville</Text>
          <TextInput
            style={styles.textInput}
            placeholder=''
          />
        </View>
        <View>
          <Text style={styles.label}>Taille</Text>
          <TextInput
            style={styles.textInput}
            placeholder=''
          />
        </View>
        <View>
          <Text style={styles.label}>Tonnage</Text>
          <TextInput
            style={styles.textInput}
            placeholder=''
          />
        </View>
        <View>
          <Text style={styles.label}>Images</Text>
          <TextInput
            style={styles.textInput}
            placeholder=''
          />
        </View>
        <View>
          <Text style={styles.label}>Assigner un chauffeur</Text>
          <TextInput
            style={styles.textInput}
            placeholder=''
          />
        </View>
        <TouchableOpacity style={styles.buttonSave}>
          <Text>Enregistrer</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 12
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign:"center"
  },
  textInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 7
  },
  label: {
    marginBottom: 3,
    marginTop: 7
  },
  buttonSave: {
    backgroundColor: "green",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    marginTop: 10
  },
  photoContainer: {
    alignItems: "center",
    marginBottom: 15,
  },
  photo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#DDD",
  },
  photoText: {
    marginTop: 5,
    color: "#777",
  },
})