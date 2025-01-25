import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Image } from 'react-native';

export default function Compte() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ marginHorizontal: 7, marginTop: 10 }}>Rue 12, avenue 13</Text>
      </View>
      <View style={styles.rowTypeVehiculeContainer}>
        <View style={styles.rowTypeVehicule}>
          <Image
            style={{
              width:"100%",
              height:"100%",
              borderRadius:10
            }}
            source={require("../../assets/images/courseTaxi.png")}
          />
        </View>
        <View style={styles.rowTypeVehicule}>
        <Image
            style={{
              width:"100%",
              height:"100%",
              borderRadius:10
            }}
            source={require("../../assets/images/livraison.png")}
          />
        </View>
      </View>
      <View style={styles.typeVehicule}>
      <Image
            style={{
              width:"100%",
              height:"100%",
              borderRadius:10
            }}
            source={require("../../assets/images/demenagement.png")}
          />
      </View>
      <View>
        <Text style={{ textAlign: "center", marginTop: 14 }}>Besoin plus spécifique? trouver un véhicule adapté!</Text>
      </View>
      <View style={styles.rowTypeVehiculeContainer}>
        <View style={styles.rowTypeVehicule2}>
        <Text style={{marginLeft:20}}>Fourgon</Text>
        <Image
            style={{
              width:"100%",
              borderRadius:10,
              flex:1
            }}
            source={require("../../assets/images/fourgon.png")}
          />
        </View>
        <View style={styles.rowTypeVehicule2}>
        <Text style={{marginLeft:20}}>Fourgon</Text>
        <Image
            style={{
              width:"100%",
              borderRadius:10,
              flex:1,
              objectFit:"scale-down"
            }}
            source={require("../../assets/images/bache.png")}
          />
        </View>
      </View>
      <View style={styles.rowTypeVehiculeContainer}>
        <View style={styles.rowTypeVehicule2}></View>
        <View style={styles.rowTypeVehicule2}></View>
      </View>
      <View style={styles.rowTypeVehiculeContainer}>
        <View style={styles.rowTypeVehicule2}></View>
        <View style={styles.rowTypeVehicule2}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF6F6"
  },
  typeVehicule: {
    backgroundColor: "#FFF",
    borderColor: Colors.light.mainColor,
    borderRadius: 10,
    borderWidth: 1,
    height: 70,
    margin: 7
  },
  rowTypeVehicule: {
    backgroundColor: "#FFF",
    borderColor: Colors.light.mainColor,
    borderRadius: 10,
    borderWidth: 1,
    height: 70,
    flex: 1,
    margin: 7,
    alignItems:"center"
  },
  rowTypeVehicule2: {
    backgroundColor: "#FFF",
    borderColor: Colors.light.mainColor,
    borderRadius: 10,
    borderWidth: 1,
    height: 74,
    flex: 1,
    margin: 7,
    display:"flex",
    flexDirection:"column",
    paddingBottom:3
  },
  rowTypeVehiculeContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  }
});
