import React, { useCallback, useRef, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    FlatList,
} from 'react-native';
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet';
import { Card } from "react-native-paper";
import { MaterialIcons } from '@expo/vector-icons';

const index = () => {
    const [snapPoints, setSnapPoints] = useState(['34%', '34%']);
    const bottomSheetRef = useRef<BottomSheet>(null);
    const vehicleTypes = [
        { id: "1", type: "Normal Car", icon: "directions-car" },
        { id: "2", type: "Fourgon", icon: "local-shipping" },
        { id: "3", type: "Baché", icon: "truck" },
        { id: "4", type: "Plateau Citerne", icon: "local-gas-station" },
        { id: "5", type: "Carosserie", icon: "directions-bus" },
        { id: "6", type: "Benne", icon: "truck" },
    ];
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);

    const handleInputFocus = () => {
        setSnapPoints(['90%', '90%']);
    };

    const handleInputBlur = () => {
        setSnapPoints(['34%', '34%']);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.carsContainer}>
                <FlatList
                    data={vehicleTypes}
                    numColumns={2} // Display in 2 columns
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.cardContainer}>
                            <Card style={styles.card}>
                                <MaterialIcons name={item.icon} size={50} color="#333" />
                            </Card>
                        </TouchableOpacity>
                    )}
                />
                <View style={{marginTop:30, paddingHorizontal:10}}>
                <TouchableOpacity style={styles.button} onPress={()=>bottomSheetRef.current?.expand()}>
                    <Text style={styles.buttonText}>Choisir positions</Text>
                </TouchableOpacity>
                </View>
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
                <BottomSheetView style={styles.contentContainer}>
                    <Text style={styles.label}>Position</Text>
                    <TextInput
                        style={styles.input} placeholder="Destination"
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Rue 12 avenue 13 (depart)"
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                    />
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Entrer</Text>
                    </TouchableOpacity>
                </BottomSheetView>
            </BottomSheet>
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF6F6',
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
        marginBottom: 16,
    },
    button: {
        width: '100%',
        backgroundColor: '#FFA500',
        borderRadius: 20,
        paddingVertical: 12,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
    },
    carsContainer: {
        justifyContent: "center",
        padding: 10,
        marginTop:40
    },
    cardContainer: {
        flex: 1,
        alignItems: "center",
        padding: 10,
    },
    card: {
        width: "100%",
        height: 120,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        elevation: 4,
        borderRadius: 10,
    },
});

export default index;
