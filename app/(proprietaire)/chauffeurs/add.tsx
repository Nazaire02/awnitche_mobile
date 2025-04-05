import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Platform } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import React, { useState } from 'react'

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
          <KeyboardAwareScrollView
            style={styles.container}
            contentContainerStyle={{ paddingBottom: 40 }}
            enableOnAndroid={true}
            extraScrollHeight={Platform.OS === 'ios' ? 20 : 80}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
      <Text style={styles.headerTitle}>Ajout d'un chauffeur</Text>
              <TouchableOpacity onPress={pickImage} style={styles.imagePicker}>
                {image ? (
                  <Image source={{ uri: image }} style={styles.profileImage} />
                ) : (
                  <View style={styles.placeholderImage}>
                    <Text style={{ color: "#999" }}>Ajouter une photo</Text>
                  </View>
                )}
              </TouchableOpacity>
      <View style={{ paddingHorizontal: 12 }}>
        <View>
          <Text style={styles.label}>Nom*</Text>
          <TextInput
            style={styles.textInput}
            placeholder=''
          />
        </View>
        <View>
          <Text style={styles.label}>Prénoms*</Text>
          <TextInput
            style={styles.textInput}
            placeholder=''
          />
        </View>
        <View>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.textInput}
            placeholder=''
          />
        </View>
        <View>
          <Text style={styles.label}>Mot de passe*</Text>
          <TextInput
            style={styles.textInput}
            placeholder=''
            secureTextEntry={true}
          />
        </View>
        <View>
          <Text style={styles.label}>Confirmé mot de passe*</Text>
          <TextInput
            style={styles.textInput}
            placeholder=''
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity style={styles.buttonSave}>
          <Text>Enregistrer</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView >
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