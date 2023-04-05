import React from "react";
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


export default function AccScreen({ navigation }){

    const colorScheme = useColorScheme();

    const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;
    
   

    return (
      <View style={[styles.container, themeContainerStyle]}>
        <SafeAreaView style={styles.AndroidSafeArea}>
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
                Nia Novela
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

            <View style={{flexDirection: 'col'}}>
              <IsiProfile/>
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
    },
    lightContainer: {
      backgroundColor: '#FFFFFF',
    },
    darkContainer: {
      backgroundColor: '#FFFFFF',
    },
});