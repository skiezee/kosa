import React, { useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { BackHandler } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  Image,
  useColorScheme,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import InputTextAuth from "../components/InputTextAuth";
import CustomBtnAuth from "../components/ButtonAuth";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import Spinner from "react-native-loading-spinner-overlay";

export default function LoginScreen({ navigation }) {
  const colorScheme = useColorScheme();

  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  const textDesc =
    "Akses materi, latihan soal, dan beragam fitur menarik lainnya sekarang";
  const textDaftar = "Yuk, daftar di KOSA. Gratis!";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading, login } = useContext(AuthContext);

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };
  const handleLogin = () => {
    login(email, password)
      .then((userInfo) => {
        console.log(userInfo);
        navigation.reset({
          index: 0,
          routes: [{ name: "Dashboard" }],
        });
      })
      .catch((error) => {
        console.log(error);
        // menampilkan pesan kesalahan
      });
  };

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        return true;
      };
      BackHandler.addEventListener("hardwareBackPress", onBackPress);
      return () =>
      BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    }, [])
  );

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
            <Text style={styles.textdaftar}>{textDaftar}</Text>
            <Text style={styles.textdesc}>{textDesc}</Text>
            <Image
              source={require("../assets/login.png")}
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

              <CustomBtnAuth nav={handleLogin} txt="Sign in" />

              <View style={{ flexDirection: "row", marginTop: 8 }}>
                <Text>Belum punya akun?</Text>
                <Text
                  style={{ color: "blue", marginLeft: 4 }}
                  onPress={() => {
                    navigation.reset({
                      index: 0,
                      routes: [{ name: "Register" }],
                    });
                  }}
                >
                  Register
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
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 24,
  },
  textdaftar: {
    color: "#3C3C43",
    fontWeight: "500",
    fontSize: 16,
  },
  textdesc: {
    marginTop: 8,
    textAlign: "center",
    maxWidth: 300,
    color: "#3C3C43",
    fontSize: 13,
    fontWeight: "400",
  },
  textacc: {
    textAlign: "center",
    color: "#3C3C43",
    marginTop: 20,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  lightContainer: {
    backgroundColor: "#FFFFFF",
  },
  darkContainer: {
    backgroundColor: "#FFFFFF",
  },
});
