import React from "react";
import { View, Text, SafeAreaView, useColorScheme } from "react-native";

export default function PengenalanComponent(){

    const colorScheme = useColorScheme();

    const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

    return(
        <View style={[styles.container, themeContainerStyle]}>
            <SafeAreaView style={styles.AndroidSafeArea}>
                <Text>page materi struktur dan ciri </Text>
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
      
    });