import React, {useState} from "react";
import { StyleSheet, Text, View, Image, useColorScheme, SafeAreaView, Platform, StatusBar } from "react-native";
import InputTextAuth from "../components/InputTextAuth";
import CustomBtnAuth from "../components/ButtonAuth";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Spinner from "react-native-loading-spinner-overlay/lib";

export default function RegisterScreen({ navigation }) {
  const colorScheme = useColorScheme();

  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  const textDesc =
    "Akses materi, latihan soal, dan beragam fitur menarik lainnya sekarang";
  const textDaftar = "Yuk, daftar di KOSA. Gratis!";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading, register } = useContext(AuthContext);

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  return (
    <View style={[styles.container, themeContainerStyle]}>
      <Spinner visible={isLoading} />
      <SafeAreaView style={styles.AndroidSafeArea}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            backgroundColor: "white",
            margin: 24,
          }}
        >
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text style={{ color: "#3C3C43", fontWeight: "500", fontSize: 16 }}>
              {textDaftar}
            </Text>
            <Text
              style={{
                marginTop: 8,
                textAlign: "center",
                maxWidth: 300,
                color: "#3C3C43",
                fontSize: 13,
                fontWeight: "400",
              }}
            >
              {textDesc}
            </Text>
            <Image
              source={require("../assets/signup.png")}
              style={{ marginTop: 48 }}
            />

            <View style={{ marginTop: 24 }}>
              <InputTextAuth
                plch="Masukan email"
                secure={false}
                value={email}
                onChangeText={handleEmailChange}
              />
              <InputTextAuth
                plch="Password"
                secure={true}
                value={password}
                onChangeText={handlePasswordChange}
              />

              <CustomBtnAuth
                txt="Sign up"
                nav={() => {
                  register(email, password);
                }}
              />
              <View style={{ flexDirection: "row", marginTop: 8 }}>
                <Text>Sudah punya akun?</Text>
                <Text
                  style={{ color: "blue", marginLeft: 4 }}
                  onPress={() => {
                    navigation.reset({
                      index: 0,
                      routes: [{ name: "Login" }],
                    });
                  }}
                >
                  Login
                </Text>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 24
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightContainer: {
    backgroundColor: '#FFFFFF',
  },
  darkContainer: {
    backgroundColor: '#FFFFFF',
  },
  lightThemeText: {
    color: '#FFFFFF',
  },
  darkThemeText: {
    color: '#FFFFFF',
  },
});