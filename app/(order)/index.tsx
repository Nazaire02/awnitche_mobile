import React, { useCallback, useEffect, useRef } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import BottomSheet, { BottomSheetModal, BottomSheetModalProvider, BottomSheetView } from '@gorhom/bottom-sheet';
import Header from '@/components/Header';

const index = () => {
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);

    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);

    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);

    useEffect(() => {
        handlePresentModalPress();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <BottomSheetModalProvider>
                <View style={{ flex: 1, backgroundColor: "#FFF6F6" }}>
                    <BottomSheetModal
                        ref={bottomSheetModalRef}
                        onChange={handleSheetChanges}
                        style={{
                            borderTopLeftRadius: 40,
                            borderTopRightRadius: 40,
                        }}
                    >
                        <BottomSheetView style={styles.contentContainer}>
                            <Text style={styles.label}>Position</Text>
                            <TextInput style={styles.input} placeholder="Destination" />
                            <TextInput style={styles.input} placeholder="Rue 12 avenue 13 (depart)" />
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>Entrer</Text>
                            </TouchableOpacity>
                        </BottomSheetView>
                    </BottomSheetModal>
                </View>
            </BottomSheetModalProvider>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
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
});

export default index;
