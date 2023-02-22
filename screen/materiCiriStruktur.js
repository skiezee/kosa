import React from "react";
import { View, Text, SafeAreaView, StyleSheet, useColorScheme } from "react-native";
import CiriComponent from "../components/CiriStruktur";

export default function CiriPage({navigation}){

    const colorScheme = useColorScheme();

    const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

    return(
        <View style={[styles.container, themeContainerStyle]}>
            <SafeAreaView style={styles.AndroidSafeArea}>
                <CiriComponent titletwo="Pengertian Teks Prosedur" press={() => navigation.navigate('Materi')}/>
            </SafeAreaView>
        </View>
    )
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