import React from "react";
import { View, Text, SafeAreaView, StyleSheet, useColorScheme, ScrollView } from "react-native";

export default function KebahasaanComponent(){

    const colorScheme = useColorScheme();

    const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

    return(
        <View style={[styles.container, themeContainerStyle]}>
            <SafeAreaView style={styles.AndroidSafeArea}>
                <View>

                </View>
                <ScrollView>
                    <Text>page materi</Text>

                </ScrollView>
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