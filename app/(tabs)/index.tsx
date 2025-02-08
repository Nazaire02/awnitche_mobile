import React, { useCallback, useRef, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import { router } from 'expo-router';
import { Colors } from '@/constants/Colors';
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet';

const vehicles = [
  { label: null, image: require('../../assets/images/courseTaxi.png') },
  { label: null, image: require('../../assets/images/livraison.png') },
  { label: null, image: require('../../assets/images/demenagement.png') },
];

const specificVehicles = [
  { label: 'Tricycle', image: require('../../assets/images/fourgon.png') },
  { label: 'Fourgon', image: require('../../assets/images/bache.png') },
];

import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  pickupLocation: Yup.string().required('Lieu de prise en charge requis'),
  dropoffLocation: Yup.string().required('Lieu de déchargement requis'),
});

export default function Compte() {
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

  const renderVehicles = (data: any, type: string) =>
    data.map((item: any, index: number) => (
      <TouchableOpacity
        key={index}
        style={type === 'row' ? styles.rowTypeVehicule : styles.rowTypeVehicule2}
        onPress={() => router.navigate('/(order)')}
      >
        {item.label && <Text style={styles.vehicleLabel}>{item.label}</Text>}
        <Image style={styles.vehicleImage} source={item.image} />
      </TouchableOpacity>
    ));

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.typeVehicule} onPress={() => router.navigate('/(order)')}>
        <Image style={styles.vehicleImage} source={require('../../assets/images/demenagement.png')} />
      </TouchableOpacity>

      <Text style={styles.specificText}>
        Transportez vos colis ou marchandises, des véhicules à votre disposition!
      </Text>

      <View style={styles.rowContainer}>{renderVehicles(specificVehicles.slice(0, 2), 'specific')}</View>

      <View style={{ marginTop: 30, paddingHorizontal: 10 }}>
        <TouchableOpacity style={styles.button} onPress={() => bottomSheetRef.current?.expand()}>
          <Text style={styles.buttonText}>Choisir positions</Text>
        </TouchableOpacity>
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        style={{
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        }}
        snapPoints={snapPoints}
        enableDynamicSizing={false}
        backdropComponent={(backdropProps) => (
          <BottomSheetBackdrop
            {...backdropProps}
            disappearsOnIndex={-1}
            opacity={0.3}
          />
        )}
      >
        <Formik
          initialValues={{ pickupLocation: '', dropoffLocation: '' }}
          validationSchema={validationSchema}
          onSubmit={(values) => 
            bottomSheetRef.current?.close()
          }
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <BottomSheetView style={styles.contentContainer}>
              <Text style={styles.label}>Positions</Text>

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Lieu de prise en charge ou chargement"
                  onFocus={handleInputFocus}
                  onBlur={(e) => {
                    handleInputBlur();
                    handleBlur('pickupLocation')(e);
                  }}
                  onChangeText={handleChange('pickupLocation')}
                  value={values.pickupLocation}
                />
                {touched.pickupLocation && errors.pickupLocation && <Text style={styles.errorText}>{errors.pickupLocation}</Text>}
              </View>
              <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Lieu de déchargement ou livraison"
                onFocus={handleInputFocus}
                onBlur={(e) => {
                  handleInputBlur();
                  handleBlur('dropoffLocation')(e);
                }}
                onChangeText={handleChange('dropoffLocation')}
                value={values.dropoffLocation}
              />
              {touched.dropoffLocation && errors.dropoffLocation && <Text style={styles.errorText}>{errors.dropoffLocation}</Text>}
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
    backgroundColor: '#FFF6F6',
  },
  addressText: {
    marginHorizontal: 7,
    marginTop: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  typeVehicule: {
    backgroundColor: '#FFF',
    borderColor: Colors.light.mainColor,
    borderRadius: 10,
    borderWidth: 1,
    height: 70,
    margin: 7,
    marginTop: 40,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  rowTypeVehicule: {
    backgroundColor: '#FFF',
    borderColor: Colors.light.mainColor,
    borderRadius: 10,
    borderWidth: 1,
    height: 70,
    flex: 1,
    margin: 7,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  rowTypeVehicule2: {
    backgroundColor: '#FFF',
    borderColor: Colors.light.mainColor,
    borderRadius: 10,
    borderWidth: 1,
    flex: 1,
    margin: 7,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  specificText: {
    textAlign: 'center',
    marginVertical: 17,
  },
  vehicleLabel: {
    marginLeft: 20,
    marginBottom: 5,
  },
  vehicleImage: {
    width: '100%',
    height: "10%",
    flexGrow: 1,
    borderRadius: 10,
    objectFit: "fill"
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
