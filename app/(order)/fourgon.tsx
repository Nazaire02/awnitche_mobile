import React, { useCallback, useRef, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { MaterialIcons } from "@expo/vector-icons";


const validationSchema = Yup.object().shape({
  pickupLocation: Yup.string().required('Lieu de prise en charge requis'),
  dropoffLocation: Yup.string().required('Lieu de déchargement requis'),
  typeCharge: Yup.string(),
  nbreVoyage: Yup.string().required('Spécifier le nombre de voyage'),
});

export default function Fourgon() {
  const [snapPoints, setSnapPoints] = useState(['50%', '50%']);
  const [nbreVoyage, setNbreVoyage] = useState(1);
  const [typeCharge, setTypeCharge] = useState('');
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

  const handleEnterPress = (values: any) => {
    setTypeCharge(values.typeCharge)
    bottomSheetRef.current?.close();
    setShowSecondBottomSheet(true);
  };

  return (
    <View style={styles.container}>
      <MapView showsUserLocation={true} style={StyleSheet.absoluteFillObject}>
        <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} title="Marker Title" description="Marker Description" />
      </MapView>

      {/* Premier BottomSheet */}
      {!showSecondBottomSheet && (
        <BottomSheet ref={bottomSheetRef} onChange={handleSheetChanges} style={styles.bottomSheet} snapPoints={snapPoints} enableDynamicSizing={false}>
          <Formik
            initialValues={{
              pickupLocation: 'Agban Village',
              dropoffLocation: 'Gare de bassam',
              typeCharge: typeCharge,
              nbreVoyage: nbreVoyage,
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => handleEnterPress(values)}
          >
            {({ handleChange, handleSubmit, values }) => (
              <BottomSheetView style={styles.contentContainerFirstBottomSheet}>
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

                <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
                  <Text style={styles.buttonText}>Commander</Text>
                </TouchableOpacity>
              </BottomSheetView>
            )}
          </Formik>
        </BottomSheet>
      )}

      {/* Deuxième BottomSheet */}
      {showSecondBottomSheet && (
        <BottomSheet ref={secondBottomSheetRef} onChange={handleSheetChanges} style={styles.bottomSheet} snapPoints={['50%', '70%']} enableDynamicSizing={false}>
          <BottomSheetView style={styles.contentContainerSecondBottomSheet}>
            <Text style={styles.label}>7 000FCFA</Text>
            <Text
              style={styles.subtitle}
            >
              La moto arrive dans 3min - 700m
            </Text>
            <View style={styles.detailsDriverContainer}>
              <Text>Vehicule couleur et détails</Text>
              <View style={styles.detailsDriverContent}>
                <View style={styles.circle}>
                  <MaterialIcons name="account-circle" size={40} color="black" />
                </View>
                <View style={styles.circle}>
                  <MaterialIcons name="phone" size={40} color="black" />
                </View>
                <View style={styles.circle}>
                  <MaterialIcons name="directions-car" size={40} color="black" />
                </View>
                <View style={styles.circle}>
                  <MaterialIcons name="reply" size={40} color="black" style={{ transform: [{ scaleX: -1 }] }} />
                </View>
              </View>
            </View>
            <View style={{ paddingHorizontal: 7 }}>
              <View style={styles.labelContainer}>
                <Text>Votre trajet</Text>
                <MaterialIcons name="navigation" size={20} color="black" />
              </View>
              <View style={styles.labelContainer}>
                <Text>Détails de la commande</Text>
                <Text style={styles.btnPlus}>+</Text>
              </View>
              <View style={styles.labelContainer}>
                <Text>Personne à contacter à la livraison</Text>
                <Text style={styles.btnPlus}>+</Text>
              </View>
              <View style={styles.labelContainer}>
                <Text>Modalités de paiement</Text>
                <Text style={styles.btnPlus}>+</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.buttonCross}
              onPress={() => {
                bottomSheetRef.current?.close();
                setShowSecondBottomSheet(false);
              }}
            >
              <MaterialIcons name="close" size={30} color="black" />
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
  contentContainerFirstBottomSheet: {
    padding: 16,
    alignItems: 'center',
  },
  contentContainerSecondBottomSheet: {
    paddingVertical: 16,
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
  btnPlus: {
    fontWeight: "bold",
    fontSize: 17
  },
  labelContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 7,
    width: "100%"
  },
  detailsDriverContainer: {
    alignSelf: "flex-start",
    paddingHorizontal: 7,
    paddingVertical: 4,
    borderBottomColor: "#d3d3d3",
    borderBottomWidth: 3,
    width: "100%"
  },
  detailsDriverContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 7
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#d3d3d3",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonCross: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20
  },
  subtitle: {
    alignSelf: "flex-start",
    borderBottomColor: "#d3d3d3",
    borderBottomWidth: 3,
    width: "100%",
    paddingLeft: 7,
    paddingBottom: 2
  }
});

