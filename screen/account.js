import React from "react";
import { 
  View, 
  Text, 
  SafeAreaView, 
  useColorScheme, 
  StyleSheet, 
  Platform, 
  StatusBar,
  TouchableHighlight
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";



export default function AccScreen(){

    const colorScheme = useColorScheme();

    const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;
    
   

    return(
      <View style={[styles.container, themeContainerStyle]}>
        <SafeAreaView style={styles.AndroidSafeArea}>
            <View style={{margin: 24}}>
                <View style={{alignItems: 'center'}}>
                  
                </View>
            </View>
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