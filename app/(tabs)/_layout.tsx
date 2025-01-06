import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { Colors } from '@/constants/Colors';

type CustomHeaderProps = {
  title: string;
  navigation: DrawerNavigationProp<Record<string, object | undefined>>;
};

const CustomHeader = ({ title, navigation }: CustomHeaderProps) => (
  <SafeAreaView style={styles.header}>
    <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.openDrawer()}>
      <MaterialIcons name="menu" size={24} color="#E38D3D" />
    </TouchableOpacity>
    <Image
        style={{
          height: 200,
          width: 200,
          objectFit:"contain"
        }}
        source={require("../../assets/images/icon.png")}
      />
    <TouchableOpacity style={styles.iconContainer}>
      <MaterialIcons name="person" size={24} color="grey" />
    </TouchableOpacity>
  </SafeAreaView>
);

const TabLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          header: ({ options, navigation }) => (
            <CustomHeader title={options.title || 'Default Title'} navigation={navigation} />
          ),
          drawerStyle:{
            backgroundColor:"#E38D3D",
            width: 300,
          }
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: 'Mon compte',
            title: 'Home',
            drawerActiveTintColor:"green"
          }}
        />
        <Drawer.Screen
          name="vehicule"
          options={{
            drawerLabel: 'Les véhicules',
            title: 'vehicule',
            drawerActiveTintColor:"green"
          }}
        />
        <Drawer.Screen
          name="chauffeur"
          options={{
            drawerLabel: 'Les chauffeurs',
            title: 'chauffeur',
            drawerActiveTintColor:"green"
          }}
        />
        <Drawer.Screen
          name="reservationHistory"
          options={{
            drawerLabel: 'Historique des réservations',
            title: 'reservationHistory',
            drawerActiveTintColor:"green"
          }}
        />
        <Drawer.Screen
          name="info"
          options={{
            drawerLabel: 'Infos',
            title: 'info',
            drawerActiveTintColor:"green"
          }}
        />
        <Drawer.Screen
          name="aide"
          options={{
            drawerLabel: 'Aide?',
            title: 'aide',
            drawerActiveTintColor:"green"
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default TabLayout;

const styles = StyleSheet.create({
  header: {
    height: 110,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth:1,
    borderBottomColor:"#E38D3D"
  },
  iconContainer: {
    padding: 8,
  },
  headerTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
