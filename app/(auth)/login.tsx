import React, { useState } from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
  Text,
  TextInput,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
  SafeAreaView,
} from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { router, useLocalSearchParams } from "expo-router";
import { Colors } from "@/constants/Colors";
import Header from "@/components/Header";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isError, setIsError] = useState(false);
  const { userType } = useLocalSearchParams();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = async () => {
    if (!validateEmail(email)) {
      Alert.alert("Erreur", "Veuillez entrer un email valide.");
      return;
    }
    else if (password.length < 6) {
      Alert.alert(
        "Erreur",
        "Le mot de passe doit comporter au moins 6 caractères."
      );
      return;
    }
    else {
      try {
        if (userType === "owner") {
          router.navigate("/(proprietaire)");
        } else {
          
        }
      }
      catch (error: any) {
        console.log(error.response?.data)
        const errorMessage =
          error.response?.data?.error === "Unauthorized"
            ? "Identifiants incorrects, veuillez réessayer"
            : "Problème de connexion";
        Alert.alert(
          "Erreur",
          errorMessage
        );
      }
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
      <Header />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.innerContainer}>
            <StatusBar style="dark" />
            <View style={styles.cardContainer}>
              <View style={styles.inputWrapper}>
                <MaterialIcons name="email" size={24} color="grey" />
                <TextInput
                  placeholder="Email"
                  keyboardType="email-address"
                  value={email}
                  onChangeText={setEmail}
                  style={styles.input}
                />
              </View>
              <View style={styles.inputWrapper}>
                <MaterialIcons name="lock" size={24} color="grey" />
                <TextInput
                  placeholder="Mot de passe"
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={setPassword}
                  style={styles.input}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                  <MaterialIcons
                    name={showPassword ? "visibility" : "visibility-off"}
                    size={24}
                    color="grey"
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Se connecter</Text>
              </TouchableOpacity>
              <Text style={{ marginTop: 10, color: "#0089C7" }} onPress={() => router.navigate("/(auth)/register")}>S'inscrire ?</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <TouchableOpacity onPress={() => router.replace("/")} style={{paddingHorizontal: 20}}>
        <Ionicons name="chevron-back-circle-outline" size={40} color="orange" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#FFF",
  },
  innerContainer: {
    alignItems: "center",
  },
  logoContainer: {
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "black",
    marginTop: 10,
    margin: 0
  },
  cardContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    width: "100%",

    // iOS shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,

    // Android shadow
    elevation: 5,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: "black",
    marginLeft: 10,
  },
  button: {
    backgroundColor: "green",
    borderRadius: 8,
    paddingVertical: 12,
    marginTop: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  }
});

export default LoginScreen;
