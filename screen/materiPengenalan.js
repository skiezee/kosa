import React from "react";
import { View, Text, SafeAreaView, StyleSheet, useColorScheme, StatusBar } from "react-native";
import PengenalanComponent from "../components/PengenalanTeksProsedur";

export default function PengenalanPage({navigation}){

    const colorScheme = useColorScheme();

    const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

    return (
      <View style={[styles.container, themeContainerStyle]}>
        <SafeAreaView style={styles.AndroidSafeArea}>
          <StatusBar backgroundColor="#131313" barStyle="dark-content" />
          <PengenalanComponent
            titletwo="Pengertian Teks Prosedur"
            press={() => navigation.navigate("Materi")}
          />
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
      lightThemeText: {
        color: '#FFFFFF',
      },
      darkThemeText: {
        color: '#FFFFFF',
      },
});