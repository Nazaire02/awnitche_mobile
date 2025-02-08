import React, { useCallback, useEffect, useRef, useState } from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet';
import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  pickupLocation: Yup.string().required('Lieu de prise en charge requis'),
  dropoffLocation: Yup.string().required('Lieu de déchargement requis'),
  typeCharge:Yup.string().required('Spécifié le type de charge'),
  nbreVoyage:Yup.string().required('Spécifié le nombre de voyage'),
});

export default function Tricycle() {
  const [currentlocation, setCurrentLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [snapPoints, setSnapPoints] = useState(['34%', '34%']);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const handleInputFocus = () => {
    setSnapPoints(['90%', '90%']);
  };
  const handleInputBlur = () => {
    setSnapPoints(['34%', '34%']);
  };

  useEffect(() => {
    async function getCurrentLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
    }
    getCurrentLocation();
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
      <BottomSheet
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        style={{
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        }}
        snapPoints={snapPoints}
        enableDynamicSizing={false}
      >
        <Formik
          initialValues={{ 
            pickupLocation: 'Agban Village', 
            dropoffLocation: 'Gare de bassam' 
        }}
          validationSchema={validationSchema}
          onSubmit={(values) => 
            bottomSheetRef.current?.close()
          }
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <BottomSheetView style={styles.contentContainer}>
              <Text style={styles.label}>Tricyle: 7 800 FCFA</Text>
                <View style={{borderBottomColor:"gray", borderBottomWidth:2, width:"100%", marginBottom:7, paddingVertical:3}}>
                    <Text>Distance estimée: 4.1km | 10min</Text>
                </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  value={values.pickupLocation}
                  readOnly={true}
                />
              </View>
              <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={values.dropoffLocation}
                readOnly={true}
              />
              </View>
              <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
                <Text style={styles.buttonText}>Entrer</Text>
              </TouchableOpacity>
            </BottomSheetView>
          )}
        </Formik>
      </BottomSheet>
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
  contentContainer: {
    padding: 16,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  inputContainer:{
    width: '100%',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginBottom:3
  },
  button: {
    width: '100%',
    backgroundColor: '#FFA500',
    borderRadius: 20,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom:40
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  errorText: { color: 'red', fontSize: 12 },
});
