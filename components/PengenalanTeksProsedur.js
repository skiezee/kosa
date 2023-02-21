import React from "react";
import { View, Text, SafeAreaView, StyleSheet, useColorScheme, ScrollView, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function PengenalanComponent(props){
    return(
        <View>
            <SafeAreaView style={{margin: 24}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <TouchableOpacity style={{backgroundColor: 'white', borderWidth: 1, borderColor: "#F3F3F3", width: 48, height: 48, borderRadius: 48, alignItems: 'center', justifyContent: 'center'}}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                  </TouchableOpacity>
                  <View>
                    <Text style={{color: 'black', textAlign: 'center'}}>Teks Prosedur</Text>
                    <Text style={{color: 'black', textAlign: 'center', marginTop: 2}}>Kaidah Tesk Prosedur</Text>
                  </View>
                  <TouchableOpacity style={{backgroundColor: 'white', borderWidth: 1, borderColor: "#F3F3F3", width: 48, height: 48, borderRadius: 48, alignItems: 'center', justifyContent: 'center'}}>
                    <Ionicons name="notifications-outline" size={24} color="black" />
                  </TouchableOpacity>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={{marginTop: 24}}>
                    <Text style={{color: '#131313', fontSize: 16, fontWeight: '600'}}>{props.titleone}</Text>
                    <Text style={{textAlign: 'justify', lineHeight: 21, color: '#A5A5A5', fontSize: 12, fontWeight: '400'}}>Halo, teman-teman! Pernah nggak kamu iseng ngebaca-baca tulisan di bungkus mi atau makanan instan lainnya? Pada bagian belakangnya, pasti ada semacam petunjuk/instruksi tentang cara menyiapkan mi tersebut dengan benar, supaya benar-benar matang dan rasanya jadi enak. Nah, hal tersebut merupakan salah satu contoh teks prosedur. Teks ini digunakan sebagai arahan, khususnya bagi kamu yang mungkin belum tau cara menyelesaikan suatu tugas.</Text>
                    <Text style={{color: '#131313', fontSize: 16, fontWeight: '600', marginTop: 32}}>{props.titletwo}</Text>
                    <Text style={{textAlign: 'justify', lineHeight: 21, color: '#A5A5A5', fontSize: 12, fontWeight: '400', marginTop: 8}}>Secara umum, pengertian teks prosedur adalah langkah - - langkah suatu aktivitas atau kegiatan untuk menyelesaikan suatu pekerjaan. Teks prosedur ini dibutuhkan sebagai panduan bagi seseorang dalam membuat atau menyusun sesuatu.</Text>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}
