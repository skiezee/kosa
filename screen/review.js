import React, { useContext } from "react";
import {
  View,
  Text,
  SafeAreaView,
  useColorScheme,
  StyleSheet,
  Platform,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import IsiProfile from "../components/IsiProfile";
import { AuthContext } from "./context/AuthContext";
import Spinner from "react-native-loading-spinner-overlay";
import { useNavigation } from "@react-navigation/native";

export default function ReviewScreen({ navigation, route }) {
  const colorScheme = useColorScheme();

  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  const {numero} = route.params;

  return (
    <View style={[styles.container, themeContainerStyle]}>
      <SafeAreaView style={styles.AndroidSafeArea}>
        <StatusBar backgroundColor="#131313" barStyle="dark-content" />
        <View style={{ margin: 24 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                borderWidth: 1,
                borderColor: "#F3F3F3",
                width: 48,
                height: 48,
                borderRadius: 48,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => navigation.navigate("Dashboard")}
            >
              <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
            <View>
              <Text
                style={{
                  color: "black",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 12,
                  fontSize: 18,
                  fontWeight: "500",
                }}
              >
                Quiz 1 Teks Prosedur
              </Text>
              <Text
                style={{
                  color: "#A5A5A5",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 4,
                  fontSize: 12,
                  fontWeight: "400",
                }}
              >
                Pengenalan Tesk Prosedur
              </Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                borderWidth: 1,
                borderColor: "#F3F3F3",
                width: 48,
                height: 48,
                borderRadius: 48,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons name="notifications-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require("../assets/scrore.png")} />
          </View>
          <Text>{numero * 10}</Text>
        </View>
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 24,
  },
  container: {
    flex: 1,
  },
  lightContainer: {
    backgroundColor: "#FFFFFF",
  },
  darkContainer: {
    backgroundColor: "#FFFFFF",
  },
});
