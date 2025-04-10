import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { Colors } from '@/constants/Colors';
import Header from '@/components/Header';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Header />
            <Image
                source={require("../../assets/images/fourgon.jpeg")}
                style={styles.image}
                resizeMode="cover"
            />
            <Text style={styles.description}>
                AwnitchéTransport, trouver des clients c'est facile!
            </Text>
            <LinearGradient
                colors={['#FFF', '#fdf2e9']}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={styles.buttonContainer}
            >
                <TouchableOpacity style={styles.button} onPress={() => router.navigate({pathname: "/login", params:{userType: 'owner'}})}>
                    <Text style={styles.buttonText}>Propriétaire de véhicules</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => router.navigate({pathname: "/login", params:{userType: 'driver'}})}>
                    <Text style={styles.buttonText}>Chauffeur de véhicule</Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingTop: 50
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 4,
        backgroundColor: '#fff',
        borderBlockColor: Colors.light.mainColor,
        borderBottomWidth: 1
    },
    contactText: {
        fontSize: 14,
    },
    logo: {
        width: 200,
    },
    image: {
        width: "100%",
        height: "50%",
    },
    description: {
        fontSize: 16,
        paddingHorizontal: 16,
        color: '#FFF',
        position: "absolute",
        top: "57%",
        fontWeight: "bold"
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: "",
    },
    button: {
        backgroundColor: '#28a745',
        paddingVertical: 14,
        paddingHorizontal: 3,
        borderRadius: 27,
        marginVertical: 20,
        width: '57%',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default HomeScreen;
