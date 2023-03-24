import React from "react";
import { View, SafeAreaView, StyleSheet, useColorScheme } from "react-native";
import ContohTeksProsedurComponent from "../components/ContohTeksProsedur";

export default function ContohPage({ navigation }) {
  const colorScheme = useColorScheme();

  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  return (
    <View style={[styles.container, themeContainerStyle]}>
      <SafeAreaView style={styles.AndroidSafeArea}>
        <ContohTeksProsedurComponent press={() => navigation.navigate("Materi")} />
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
  lightThemeText: {
    color: "#FFFFFF",
  },
  darkThemeText: {
    color: "#FFFFFF",
  },
});
