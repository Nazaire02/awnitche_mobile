import React, { useEffect, useState } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { router } from 'expo-router';

export default function Compte() {
  const [currentlocation, setCurrentLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

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
  }, []);
  return (
    <View style={styles.container}>
      <MapView
        showsUserLocation={true}
        style={styles.map}
      >
        <Marker
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          title="Marker Title"
          description="Marker Description"
        />
      </MapView>
      <View style={styles.searchLocation}>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  searchLocation:{
    position:"absolute",
    borderColor:"black",
    borderWidth:2,
    bottom:30,
    width:"94%",
    left:12,
    height:100,
    borderRadius:10,
    elevation:1000,
    backgroundColor:"white"
  }
});