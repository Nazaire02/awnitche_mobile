import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { router } from 'expo-router';
import { Colors } from '@/constants/Colors';

const vehicles = [
  { label: null, image: require('../../assets/images/courseTaxi.png') },
  { label: null, image: require('../../assets/images/livraison.png') },
  { label: null, image: require('../../assets/images/demenagement.png') },
];

const specificVehicles = [
  { label: 'Fourgon', image: require('../../assets/images/fourgon.png') },
  { label: 'Baché', image: require('../../assets/images/bache.png') },
  { label: 'Plateau', image: require('../../assets/images/plateau.png') },
  { label: 'Citerne', image: require('../../assets/images/citerne.png') },
  { label: 'Carrosserie', image: require('../../assets/images/carrosserie.png') },
  { label: 'Benne', image: require('../../assets/images/benne.png') },
];

export default function Compte() {
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
      <Text style={styles.addressText}>Rue 12, avenue 13</Text>

      <View style={styles.rowContainer}>{renderVehicles(vehicles.slice(0, 2), 'row')}</View>

      <TouchableOpacity style={styles.typeVehicule} onPress={() => router.navigate('/(order)')}>
        <Image style={styles.vehicleImage} source={vehicles[2].image} />
      </TouchableOpacity>

      <Text style={styles.specificText}>
        Besoin plus spécifique? trouver un véhicule adapté!
      </Text>

      <View style={styles.rowContainer}>{renderVehicles(specificVehicles.slice(0, 2), 'specific')}</View>
      <View style={styles.rowContainer}>{renderVehicles(specificVehicles.slice(2, 4), 'specific')}</View>
      <View style={styles.rowContainer}>{renderVehicles(specificVehicles.slice(4, 6), 'specific')}</View>
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
    marginTop: 14,
  },
  vehicleLabel: {
    marginLeft: 20,
    marginBottom: 5,
  },
  vehicleImage: {
    width: '100%',
    height:"10%",
    flexGrow:1,
    borderRadius: 10,
    objectFit:"fill"
  },
});
