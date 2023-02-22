// import axios from "axios";
import React, {useState, useEffect} from "react";
import { 
  View,
  Text, 
  ScrollView, 
  Dimensions, 
  StyleSheet, 
  SafeAreaView, 
  useColorScheme, 
  StatusBar, 
  Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import InputSearch from "../components/SearchInput";
import CardMateri from "../components/CardMateri";
import CardHome from "../components/cardHome";
import ListMateri from "../components/ListMateri";
import { setStatusBarBackgroundColor } from "expo-status-bar";
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

  const [state, setState] = useState({
    search: '',
  });

  filterList = (list) => {
    return list.filter(
      (listItem) =>
        listItem.title
          .toLowerCase()
          .includes(state.search.toLowerCase())
    )
  }

  const list = [
    {title: 'Pengenalan Teks Prosedur', desc: 'Secara umum, pengertian teks prosedur adalah langkah-langkah suatu aktivitas atau . . .', materi: '1 Materi', jumlah: '+ 500 Partisipasi', navigasi:"Pengenalan"},
    {title: 'Ciri & Struktur Teks Prosedur', desc: 'Sama halnya dengan teks yang lain, teks prosedur memiliki beberapa ciri dan juga . . .', materi: '2 Materi', jumlah: '+ 750 Partisipasi',navigasi:"Ciri"},
    {title: 'Kebahasaan Teks Prosedur', desc: 'Untuk menyusun sebuah teks prosedur, diperlukan kaidah kebahasaan yang tepat . . .', materi: '1 Materi', jumlah: '+ 400 Partisipasi',navigasi:"Login"},
    
  ];

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
                <Ionicons name="notifications-outline" size={24} color="black" />
              </View>
              {/* bagian atas teks dan icon notif */}

              {/* import component card quiz dan search */}
              <CardHome next="Selengkapnya" name="arrowright" press={() => navigation.navigate('Quiz')}/>
              <InputSearch plch="Cari sesuatu" onChangeText={(search) => setState({search})}/>
              {/* import component card quiz dan search */}

              {/* list materi teks prosedur */}
              <View style={{flexDirection: 'column', marginTop: 24}}>
                  <Text style={{color: '#131313', fontSize: 18, fontWeight: '500'}}>Teks Prosedur</Text>
                  <ScrollView style={{flexDirection: 'row', marginTop: 16,}}  horizontal={true} showsHorizontalScrollIndicator={false}>
                    <ListMateri text="Materi" press={() => navigation.navigate('Materi')}/>
                    <ListMateri text="Kuis" style={{marginLeft: 12,}} press={() => navigation.navigate('Quiz')}/>
                    <ListMateri text="Pembahasan" style={{marginLeft: 12}}/>
                    <ListMateri text="Hasil Belajar" style={{marginLeft: 12}}/>
                  </ScrollView>
              </View>
              {/* list materi teks prosedur */}

              {/* materi teks prosedur */}
              <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 24}}>
                <Text style={{color: '#131313', fontSize: 18, fontWeight: '500'}} >Jelajah Popular</Text>
                <Text style={{color: '#5970E7', fontSize: 14, fontWeight: '600', marginTop: 2}} onPress={() => navigation.navigate('Materi')}>Lainnya</Text>
              </View>
              <View>
                {filterList(list).map((listItem, index) => (
                  <CardMateri key={index} title={listItem.title} desc={listItem.desc} materi={listItem.materi} jumlah={listItem.jumlah} nav={() => navigation.navigate(listItem.navigasi)}/>
                ))}
              </View>
               {/* materi teks prosedur */}
            </ScrollView>
        </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 24,
    backgroundColor: '#FFFFFF'
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
    topPart: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
  });