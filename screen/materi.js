import React from "react";
import { View, Text, SafeAreaView, StyleSheet, useColorScheme, ScrollView, StatusBar, Platform } from "react-native";
import CardMateri from "../components/CardMateri";
import CardHome from "../components/cardHome";
import InputSearch from "../components/SearchInput";

export default function MateriScreen({navigation}){

    const colorScheme = useColorScheme();

    const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

    const desc= 'Secara umum, pengertian teks prosedur adalah langkah-langkah suatu aktivitas atau . . .'
    const desc1= 'Sama halnya dengan teks yang lain, teks prosedur memiliki beberapa ciri dan juga . . .'
    const desc2= 'Untuk menyusun sebuah teks prosedur, diperlukan kaidah kebahasaan yang tepat . . .'

    return(
      <View style={[styles.container, themeContainerStyle]}>
        <SafeAreaView style={styles.AndroidSafeArea}>
            <ScrollView style={{margin: 24}} showsVerticalScrollIndicator={false}>
              {/* bagian atas teks dan icon notif */}
              <View style={styles.topPart}>                
                <View>
                  <Text style={{color: '#131313', fontSize: 24, fontWeight: '500'}}>Teks Prosedur</Text>
                  <Text style={{color: '#A5A5A5', marginTop: 8}}>Mengenal Teks Prosedur</Text>
                </View>                
              </View>
              {/* bagian atas teks dan icon notif */}

              {/* import component card quiz dan search */}
              <CardHome next="Selengkapnya" name="arrowright" press={() => navigation.navigate('Quiz')}/>
              <InputSearch/>              
              {/* import component card quiz dan search */}

              {/* daftar materi */}
              <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 24}}>
                <Text style={{color: '#131313', fontSize: 18, fontWeight: '500'}} >Materi</Text>              
              </View>
              <View>
                <CardMateri title="Pengenalan Teks Prosedur" desc={desc} materi="1 Materi" jumlah="+ 500 Partisipan"/>
                <CardMateri title="Ciri & Struktur Teks Prosedur" desc={desc1} materi="2 Materi" jumlah="+ 750 Partisipan"/>
                <CardMateri title="Kebahasaan Teks Prosedur" desc={desc2} materi="1 Materi" jumlah="+ 400 Partisipan"/>
                <CardMateri title="Membuat Teks Prosedur" desc={desc2} materi="1 Materi" jumlah="+ 600 Partisipan"/>
                <CardMateri title="Contoh Teks Prosedur" desc={desc2} materi="1 Materi" jumlah="+ 500 Partisipan"/>
              </View>
              {/* daftar materi */}
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
    topPart: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
  });