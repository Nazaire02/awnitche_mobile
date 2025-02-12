import React, { useCallback, useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  pickupLocation: Yup.string().required('Lieu de prise en charge requis'),
  dropoffLocation: Yup.string().required('Lieu de déchargement requis'),
  typeCharge: Yup.string(),
  nbreVoyage: Yup.string().required('Spécifier le nombre de voyage'),
});

export default function Tricycle() {
  const [snapPoints, setSnapPoints] = useState(['50%', '50%']);
  const [nbreVoyage, setNbreVoyage] = useState(1);
  const [showSecondBottomSheet, setShowSecondBottomSheet] = useState(false); // État pour le 2e BottomSheet

  const bottomSheetRef = useRef<BottomSheet>(null);
  const secondBottomSheetRef = useRef<BottomSheet>(null); // Référence pour le 2e BottomSheet

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const handleInputFocus = () => {
    setSnapPoints(['90%', '90%']);
  };

  const handleInputBlur = () => {
    setSnapPoints(['50%', '50%']);
  };

  const handleNbreVoyageChange = (change: number) => {
    if (nbreVoyage + change >= 1) {
      setNbreVoyage(nbreVoyage + change);
    }
  };

  // Fonction pour afficher le deuxième BottomSheet
  const handleEnterPress = () => {
    bottomSheetRef.current?.close();
    setShowSecondBottomSheet(true);
  };

  return (
    <View style={styles.container}>
      <MapView showsUserLocation={true} style={StyleSheet.absoluteFillObject}>
        <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} title="Marker Title" description="Marker Description" />
      </MapView>

      {/* Premier BottomSheet */}
      <BottomSheet ref={bottomSheetRef} onChange={handleSheetChanges} style={styles.bottomSheet} snapPoints={snapPoints} enableDynamicSizing={false}>
        <Formik
          initialValues={{
            pickupLocation: 'Agban Village',
            dropoffLocation: 'Gare de bassam',
            typeCharge: '',
            nbreVoyage: nbreVoyage,
          }}
          validationSchema={validationSchema}
          onSubmit={() => handleEnterPress()}
        >
          {({ handleChange, handleSubmit, values }) => (
            <BottomSheetView style={styles.contentContainer}>
              <Text style={styles.label}>Tricycle: 7 800 FCFA</Text>
              <TextInput style={styles.input} value={values.pickupLocation} readOnly />
              <TextInput style={styles.input} value={values.dropoffLocation} readOnly />
              <TextInput style={styles.input} value={values.typeCharge} onChangeText={handleChange('typeCharge')} placeholder="Type de charge" onFocus={handleInputFocus} onBlur={handleInputBlur} />

              <View style={styles.quantityContainer}>
                <Text>Nombre de voyage</Text>
                <View style={styles.nbreButtonContainer}>
                  <TouchableOpacity style={styles.nbreButton} onPress={() => handleNbreVoyageChange(-1)}>
                    <Text>-</Text>
                  </TouchableOpacity>
                  <Text>{nbreVoyage}</Text>
                  <TouchableOpacity style={styles.nbreButton} onPress={() => handleNbreVoyageChange(1)}>
                    <Text>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.labelContainer}>
                <Text>Modalités de paiement</Text>
                <Text style={styles.btnPlus}>+</Text>
              </View>
              <View style={styles.labelContainer}>
                <Text>Destinataire détails</Text>
                <Text style={styles.btnPlus}>+</Text>
              </View>

              <TouchableOpacity style={styles.button} onPress={() =>handleSubmit()}>
                <Text style={styles.buttonText}>Commander</Text>
              </TouchableOpacity>
            </BottomSheetView>
          )}
        </Formik>
      </BottomSheet>

      {/* Deuxième BottomSheet */}
      {showSecondBottomSheet && (
        <BottomSheet ref={secondBottomSheetRef} onChange={handleSheetChanges} style={styles.bottomSheet} snapPoints={['50%', '70%']} enableDynamicSizing={false}>
          <BottomSheetView style={styles.contentContainer}>
            <Text style={styles.label}>Confirmation</Text>
            <Text>Votre commande est en cours de traitement.</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setShowSecondBottomSheet(false);
              }}
            >
              <Text style={styles.buttonText}>Fermer</Text>
            </TouchableOpacity>
          </BottomSheetView>
        </BottomSheet>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomSheet: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
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
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginBottom: 3,
  },
  button: {
    width: '100%',
    backgroundColor: '#FFA500',
    borderRadius: 20,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  nbreButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nbreButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: 4,
    marginHorizontal: 4,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 4,
  },
  btnPlus:{
    fontWeight:"bold",
    fontSize:17
  },
  labelContainer:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    marginVertical:7,
    width:"100%"
  }
});

