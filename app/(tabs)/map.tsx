import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';

export default function Compte() {
  const [currentlocation, setCurrentLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  const vehicules = [
    { id: 1, immatriculation: "CA12223030", name: "Mercedes Benz" },
    { id: 2, immatriculation: "CB12223030", name: "Toyota" },
    { id: 3, immatriculation: "CC12223030", name: "Camion Suzuki" },
  ];

  const filteredVehicules = vehicules.filter(vehicule =>
    vehicule.immatriculation.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    async function getCurrentLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setCurrentLocation(location);
    }
    getCurrentLocation();

    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => setKeyboardVisible(true));
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => setKeyboardVisible(false));

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        showsUserLocation={true}
        style={StyleSheet.absoluteFillObject} // Ensures the map covers the entire screen
      >
        <Marker
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          title="Marker Title"
          description="Marker Description"
        />
      </MapView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.overlayContainer}
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
      >
        <ScrollView
          contentContainerStyle={styles.searchLocation}
          keyboardShouldPersistTaps="handled"
        >
          <View>
            <Text style={{ marginBottom: 4, fontWeight: "bold" }}>Localiser mes véhicules</Text>
            <View style={styles.searchBar}>
              <MaterialIcons name="search" size={24} color="#6c757d" style={styles.searchIcon} />
              <TextInput
                style={styles.searchInput}
                placeholder="Rechercher un véhicule"
                value={searchQuery}
                onChangeText={setSearchQuery}
              />
            </View>
            {filteredVehicules.length > 0 ? (
              filteredVehicules.map((item, index) => (
                <TouchableOpacity style={styles.vehicule} key={index}>
                  <Text>{item.name}, {item.immatriculation}</Text>
                </TouchableOpacity>
              ))
            ) : (
              <Text style={styles.noData}>Aucune donnée n'est disponible pour la requête de recherche donnée.</Text>
            )}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlayContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  searchLocation: {
    position: "absolute",
    bottom: "10%",
    left: "3%",
    width: "94%",
    borderRadius: 10,
    backgroundColor: "white",
    padding: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 8,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  vehicule: {
    borderBottomColor: "gray",
    borderBottomWidth: 0.3,
    paddingVertical: 13,
  },
  noData: {
    color: '#333',
    textAlign: 'center',
    marginVertical: 16,
  },
});
