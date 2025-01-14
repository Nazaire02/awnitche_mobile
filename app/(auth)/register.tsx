import React from 'react';
import { KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Header from '@/components/Header';
import { MaterialIcons } from '@expo/vector-icons';

const ValidationSchema = Yup.object().shape({
    nom: Yup.string().required('Nom requis'),
    email: Yup.string().required('email requis'),
    password: Yup.string().required('Password requis'),
    mainTel: Yup.string().required('Tel requise'),
    secondTel: Yup.string(),
});

export default function register() {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <View style={{display:"flex", flexDirection:'column', alignItems:'center'}}>
            <Text style={styles.headerTitle}>Inscription</Text>
            <View style={styles.profileImage}>
                <MaterialIcons name="account-circle" size={100} color="gray" />
            </View>
            </View>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
                <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled" contentContainerStyle={{ flexGrow: 1 }}>
                    <Formik
                        initialValues={{
                            nom: '',
                            email: '',
                            password: '',
                            mainTel: '',
                            secondTel: '',
                        }}
                        validationSchema={ValidationSchema}
                        onSubmit={(values) => {
                            console.log('Form Data:', values);
                        }}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                            <View style={{ paddingHorizontal: 12 }}>
                                <View>
                                    <Text style={styles.label}>Nom</Text>
                                    <TextInput
                                        style={styles.textInput}
                                        onChangeText={handleChange('nom')}
                                        onBlur={handleBlur('nom')}
                                        value={values.nom}
                                        placeholder=""
                                    />
                                    {touched.nom && errors.nom && (
                                        <Text style={styles.error}>{errors.nom}</Text>
                                    )}
                                </View>

                                <View>
                                    <Text style={styles.label}>email</Text>
                                    <TextInput
                                        style={styles.textInput}
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        value={values.email}
                                        placeholder=""
                                    />
                                    {touched.email && errors.email && (
                                        <Text style={styles.error}>{errors.email}</Text>
                                    )}
                                </View>

                                <View>
                                    <Text style={styles.label}>Password</Text>
                                    <TextInput
                                        style={styles.textInput}
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        value={values.password}
                                        placeholder=""
                                    />
                                    {touched.password && errors.password && (
                                        <Text style={styles.error}>{errors.password}</Text>
                                    )}
                                </View>

                                <View>
                                    <Text style={styles.label}>Tel 1</Text>
                                    <TextInput
                                        style={styles.textInput}
                                        onChangeText={handleChange('mainTel')}
                                        onBlur={handleBlur('mainTel')}
                                        value={values.mainTel}
                                        placeholder=""
                                    />
                                    {touched.mainTel && errors.mainTel && (
                                        <Text style={styles.error}>{errors.mainTel}</Text>
                                    )}
                                </View>

                                <View>
                                    <Text style={styles.label}>Tel 2</Text>
                                    <TextInput
                                        style={styles.textInput}
                                        onChangeText={handleChange('secondTel')}
                                        onBlur={handleBlur('secondTel')}
                                        value={values.secondTel}
                                        placeholder=""
                                    />
                                </View>
                                <TouchableOpacity style={styles.buttonSave} onPress={() => handleSubmit()}>
                                    <Text style={{ color: '#FFF' }}>Enregistrer</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </Formik>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        padding: 12,
    },
    headerTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        justifyContent:"center",
        alignItems:'center'
    },
    textInput: {
        padding: 10,
        borderWidth: 1,
        borderColor: 'green',
        borderRadius: 7,
    },
    label: {
        marginBottom: 3,
        marginTop: 7,
    },
    buttonSave: {
        backgroundColor: 'green',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        marginTop: 10,
    },
    error: {
        color: 'red',
        fontSize: 12,
        marginTop: 2,
    },
});
