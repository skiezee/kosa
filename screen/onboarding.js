import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet, useColorScheme} from "react-native";
import { StatusBar } from 'expo-status-bar';

export default function OnboardingScreen({navigation}){

    const colorScheme = useColorScheme();

    const themeContainerStyle =
      colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

    const textWelcome = "Welcome to KOSA!"
    const textDesc = "Akses materi, latihan soal, dan beragam fitur menarik lainnya sekarang"

    return(
        <View style={[styles.container, themeContainerStyle]}>
        <StatusBar />

        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: '#FFFF'}}>
            <Image source={require('../assets/onboarding.png')}/>
            <Text style={styles.welcome}>{textWelcome}</Text>
            <Text style={styles.desc}>{textDesc}</Text>

            <View style={{marginTop: 40, alignItems: 'center'}}>
                <TouchableOpacity style={styles.btnsignin} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.textsignin}>Sign in</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnsignup} onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.textsignup}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>
        </View>
    )
}
const styles = StyleSheet.create({
    welcome: {
        color: '#3C3C43',
        fontSize: 16,
        fontWeight: '700'
    },
    desc: {
        textAlign: 'center', 
        maxWidth: 300,
        fontSize: 12, 
        fontWeight: '400', 
        color: '#3C3C43'
    },
    btnsignin: {
        backgroundColor: '#3D5CFF', 
        width: 350, 
        height: 48, 
        borderRadius: 8, 
        justifyContent: 'center'
    },
    textsignin: {
        color: '#FFFFFF', 
        textAlign: 'center', 
        fontSize: 14, 
        fontWeight: '700'
    },
    btnsignup: {
        backgroundColor: '#FFFFF', 
        width: 350, 
        height: 48, 
        borderRadius: 8, 
        borderColor:'#3D5CFF', 
        borderWidth: 1, 
        justifyContent: 'center', 
        marginTop: 14
    },
    textsignup: {
        color: '#3D5CFF', 
        textAlign: 'center', 
        fontSize: 14, 
        fontWeight: '700'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      lightContainer: {
        backgroundColor: '#FFFFFF',
      },
      darkContainer: {
        backgroundColor: '#FFFFFF',
      },
  });