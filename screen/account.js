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
  Image
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import IsiProfile from "../components/IsiProfile";
import { AuthContext } from "./context/AuthContext";
import Spinner from "react-native-loading-spinner-overlay";
import { useNavigation } from '@react-navigation/native';


export default function AccScreen({ navigation }){

    const colorScheme = useColorScheme();

    const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

    const {userInfo, logout, isLoading} = useContext(AuthContext);
    

    return (
      <View style={[styles.container, themeContainerStyle]}>
        <Spinner visible={isLoading} />
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
                onPress={() => navigation.navigate("Home")}
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
                  Profile
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
                <Ionicons
                  name="notifications-outline"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            </View>

            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginTop: 24,
              }}
            >
              <Image source={require("../assets/account.png")} />
              <Text
                style={{
                  color: "#131313",
                  fontWeight: "500",
                  fontSize: 18,
                  marginTop: 16,
                }}
              >
                {userInfo.data.user.username}
              </Text>
              <Text
                style={{
                  color: "#A5A5A5",
                  fontWeight: "400",
                  fontSize: 12,
                }}
              >
                Manager di Ruang Guru
              </Text>
            </View>

            <View style={{ flexDirection: "col" }}>
              <IsiProfile />
            </View>
            <Text style={{textAlign: 'center'}} onPress={logout}>Logout</Text>
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
    },
    lightContainer: {
      backgroundColor: '#FFFFFF',
    },
    darkContainer: {
      backgroundColor: '#FFFFFF',
    },
});