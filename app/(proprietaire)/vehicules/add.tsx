import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker';

export default function add() {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerTitle}>Ajout d'un véhicule</Text>
      <TouchableOpacity onPress={pickImage} style={styles.imagePicker}>
        {image ? (
          <Image source={{ uri: image }} style={styles.profileImage} />
        ) : (
          <View style={styles.placeholderImage}>
            <Text style={{ color: "#999" }}>Ajouter une photo</Text>
          </View>
        )}
      </TouchableOpacity>
      <View style={{paddingHorizontal:12}}>
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
          <Text style={styles.label}>Catégorie</Text>
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
    textAlign:"center",
    marginBottom:10
  },
  textInput: {
    padding: 10,
    borderWidth:1,
    borderColor:"green",
    borderRadius:7
  },
  label:{
    marginBottom:3,
    marginTop:7
  },
  buttonSave:{
    backgroundColor:"green",
    height:40,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:4,
    marginVertical:14
  },
  imagePicker: {
    alignItems: 'center',
    marginBottom: 20
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 1,
    borderColor: "green"
  },
  placeholderImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 2,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0"
  },
})