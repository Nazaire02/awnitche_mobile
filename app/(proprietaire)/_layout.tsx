import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Alert, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { DrawerContentScrollView, DrawerItemList, DrawerNavigationProp } from '@react-navigation/drawer';

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
        objectFit: "contain"
      }}
      source={require("../../assets/images/icon.png")}
    />
    <TouchableOpacity style={styles.iconContainer}>
      <MaterialIcons name="person" size={24} color="grey" />
    </TouchableOpacity>
  </SafeAreaView>
);

const CustomDrawerContent = (props: any) => {
  const handleLogout = () => {
    Alert.alert(
      "Déconnexion",
      "Êtes-vous sûr de vouloir vous déconnecter ?",
      [
        {
          text: "Oui",
          style: "cancel",
        },
        {
          text: "Non",
          onPress: () => {
            console.log("User logged out");
          },
          style: "destructive",
        },
      ]
    );
  };

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }} bounces={false}>
      <DrawerItemList {...props} />
      <View style={styles.footer}>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <MaterialIcons name="logout" size={24} color="white" />
          <Text style={styles.logoutText}>Déconnexion</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};


const TabLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          header: ({ options, navigation }) => (
            <CustomHeader title={options.title || 'Default Title'} navigation={navigation} />
          ),
          drawerStyle: {
            backgroundColor: "#E38D3D",
            width: 300,
          },
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: 'Mon compte',
            title: 'Home',
            drawerActiveTintColor: "green"
          }}
        />
        <Drawer.Screen
          name="vehicules"
          options={{
            drawerLabel: 'Les véhicules',
            title: 'vehicule',
            drawerActiveTintColor: "green"
          }}
        />
        <Drawer.Screen
          name="chauffeurs"
          options={{
            drawerLabel: 'Les chauffeurs',
            title: 'chauffeur',
            drawerActiveTintColor: "green"
          }}
        />
        <Drawer.Screen
          name="assignCarToDriver"
          options={{
            drawerLabel: 'Assignation Chauff-Vehicule',
            title: 'info',
            drawerActiveTintColor: "green"
          }}
        />
        <Drawer.Screen
          name="reservationHistory"
          options={{
            drawerLabel: 'Historique des réservations',
            title: 'reservationHistory',
            drawerActiveTintColor: "green"
          }}
        />
        <Drawer.Screen
          name="map"
          options={{
            drawerLabel: 'Map',
            title: 'aide',
            drawerActiveTintColor: "green",
            drawerItemStyle: { display: 'none' }
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
    borderBottomWidth: 1,
    borderBottomColor: "#E38D3D"
  },
  iconContainer: {
    padding: 8,
  },
  headerTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 'auto', 
    padding: 20,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DC3545',
    padding: 10,
    borderRadius: 5,
  },
  logoutText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
  },
});
