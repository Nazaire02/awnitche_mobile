import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '@/constants/Colors';

export default function Compte() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{marginHorizontal:7, marginTop:10}}>Rue 12, avenue 13</Text>
      </View>
      <View style={styles.rowTypeVehiculeContainer}>
        <View style={styles.rowTypeVehicule}></View>
        <View style={styles.rowTypeVehicule}></View>
      </View>
      <View style={styles.typeVehicule}></View>
      <View>
        <Text style={{textAlign:"center", marginTop:14}}>Besoin plus spécifique? trouver un véhicule adapté!</Text>
      </View>
      <View style={styles.rowTypeVehiculeContainer}>
        <View style={styles.rowTypeVehicule}></View>
        <View style={styles.rowTypeVehicule}></View>
      </View>
      <View style={styles.rowTypeVehiculeContainer}>
        <View style={styles.rowTypeVehicule}></View>
        <View style={styles.rowTypeVehicule}></View>
      </View>
      <View style={styles.rowTypeVehiculeContainer}>
        <View style={styles.rowTypeVehicule}></View>
        <View style={styles.rowTypeVehicule}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#FFF6F6"
  },
  typeVehicule:{
    backgroundColor:"#FFF",
    borderColor:Colors.light.mainColor,
    borderRadius:10,
    borderWidth:1,
    height:70,
    margin:7
  },
  rowTypeVehicule:{
    backgroundColor:"#FFF",
    borderColor:Colors.light.mainColor,
    borderRadius:10,
    borderWidth:1,
    height:70,
    flex:1,
    margin:7
  },
  rowTypeVehiculeContainer:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
  }
});
