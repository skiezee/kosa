// import axios from "axios";
import React from "react";
import { View, Text, ScrollView, ImageBackground, Image, Dimensions, StyleSheet, SafeAreaView,  useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import InputSearch from "../components/SearchInput";
import CardMateri from "../components/CardMateri";
import CardHome from "../components/cardHome";
import ListMateri from "../components/ListMateri";
// const getData = async() => {
//     try {
//         const res = await axios.get('link api', {
//             params: {

//             }
//         })
//     } catch (error) {
//         alert(error.message)
//     }
// }

const {width, height} = Dimensions.get('window')

export default function DashboardScreen({navigation}){

  const colorScheme = useColorScheme();

  const themeContainerStyle =
  colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  const desc= 'Secara umum, pengertian teks prosedur adalah langkah-langkah suatu aktivitas atau . . .'
  const desc1= 'Sama halnya dengan teks yang lain, teks prosedur memiliki beberapa ciri dan juga . . .'
  const desc2= 'Untuk menyusun sebuah teks prosedur, diperlukan kaidah kebahasaan yang tepat . . .'

    return(
        <SafeAreaView style={[styles.container, themeContainerStyle]}>
            <ScrollView style={{margin: 24}} showsVerticalScrollIndicator={false}>
              {/* bagian atas teks dan icon notif */}
              <View style={styles.topPart}>
                <View>
                  <Text style={{color: '#131313', fontSize: 24, fontWeight: '500'}}>Teks Prosedur</Text>
                  <Text style={{color: '#A5A5A5', marginTop: 8}}>Mengenal Teks Prosedur</Text>
                </View>
                <Ionicons name="notifications-outline" size={24} color="black" style={{backgroundColor: 'white', borderColor: '#F3F3F3'}} />
              </View>
              {/* bagian atas teks dan icon notif */}

              {/* import component card quiz dan search */}
              <CardHome next="Selengkapnya" name="arrowright" press={() => navigation.navigate('Quiz')}/>
              <InputSearch/>
              {/* import component card quiz dan search */}

              {/* list materi teks prosedur */}
              <View style={{flexDirection: 'column', marginTop: 24}}>
                  <Text style={{color: '#131313', fontSize: 18, fontWeight: '500'}}>Teks Prosedur</Text>
                  <ScrollView style={{flexDirection: 'row', marginTop: 16,}}  horizontal={true} showsHorizontalScrollIndicator={false}>
                    <ListMateri text="Materi" press={() => navigation.navigate('Materi')}/>
                    <ListMateri text="Kuis" style={{marginLeft: 12}} press={() => navigation.navigate('Quiz')}/>
                    <ListMateri text="Pembahasan" style={{marginLeft: 12}}/>
                    <ListMateri text="Hasil Belajar" style={{marginLeft: 12}}/>
                  </ScrollView>
              </View>
              {/* list materi teks prosedur */}

              {/* materi teks prosedur */}
              <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 24}}>
                <Text style={{color: '#131313', fontSize: 18, fontWeight: '500'}} >Jelajah Popular</Text>
                <Text style={{color: '#5970E7', fontSize: 14, fontWeight: '600', marginTop: 6}} onPress={() => navigation.navigate('Materi')}>Lainnya</Text>
              </View>
              <View>
                <CardMateri title="Pengenalan Teks Prosedur" desc={desc} materi="1 Materi" jumlah="+ 500 Partisipan"/>
                <CardMateri title="Ciri & Struktur Teks Prosedur" desc={desc1} materi="2 Materi" jumlah="+ 750 Partisipan"/>
                <CardMateri title="Kebahasaan Teks Prosedur" desc={desc2} materi="1 Materi" jumlah="+ 400 Partisipan"/>
              </View>
               {/* materi teks prosedur */}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
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