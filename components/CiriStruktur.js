import React from "react";
import { View, Text, SafeAreaView, StyleSheet, useColorScheme, ScrollView, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function CiriComponent(props){
    return(
        <View>
            <SafeAreaView style={{margin: 24}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <TouchableOpacity style={{backgroundColor: 'white', borderWidth: 1, borderColor: "#F3F3F3", width: 48, height: 48, borderRadius: 48, alignItems: 'center', justifyContent: 'center'}} onPress={props.press}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                  </TouchableOpacity>
                  <View>
                    <Text style={{color: 'black', textAlign: 'center', fontSize: 18, fontWeight: '500'}}>Teks Prosedur</Text>
                    <Text style={{color: '#A5A5A5', textAlign: 'center', marginTop: 4, fontSize: 12, fontWeight: '400'}}>Ciri & Struktur Tesk Prosedur</Text>
                  </View>
                  <TouchableOpacity style={{backgroundColor: 'white', borderWidth: 1, borderColor: "#F3F3F3", width: 48, height: 48, borderRadius: 48, alignItems: 'center', justifyContent: 'center'}}>
                    <Ionicons name="notifications-outline" size={24} color="black" />
                  </TouchableOpacity>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={{marginTop: 24}}>
                  <View style={{marginBottom: 128}}>
                    <Text style={{color: '#131313', fontSize: 16, fontWeight: '600', marginTop: 24}}>Ciri - ciri Teks Prosedur</Text>
                    <Text style={{textAlign: 'justify', lineHeight: 21, color: '#A5A5A5', fontSize: 12, fontWeight: '400'}}>Sama halnya dengan teks yang lain, teks prosedur memiliki beberapa ciri antara lain:</Text>
                    <Text style={{color: '#131313', fontSize: 12, fontWeight: '500', marginTop: 16}}>1. Menggunakan Kata Kerja Aktif</Text>
                    <Text style={{textAlign: 'justify', lineHeight: 21, color: '#A5A5A5', fontSize: 12, fontWeight: '400', marginTop: 8}}>Kalimat pada teks prosedur umumnya menggunakan kata kerja aktif yang memberikan sebuah tindakan kepada objeknya misalnya membungkus, memotong, mengaduk, menyiram, melempar dan lain sebagainya.</Text>
                    <Text style={{color: '#131313', fontSize: 12, fontWeight: '500', marginTop: 16}}>2. Menggunakan Pola Kalimat Imperatif atau Perintah</Text>
                    <Text style={{textAlign: 'justify', lineHeight: 21, color: '#A5A5A5', fontSize: 12, fontWeight: '400', marginTop: 8}}>Kata kerja imperatif dalam teks prosedur merupakan ciri utama pada panduan penggunaan sebuah produk. Kalimat yang mengandung perintah dalam teks prosedur adalah kalimat berisikan kata kerja imperatif atau kalimat perintah. Sebisa mungkin mengandung makna meminta atau memerintahkan seseorang untuk melakukan sesuatu. Contoh kalimat perintah dalam teks prosedur:{"\n"}
                      - Tambahkan gula kemudian aduklah sampai rata{"\n"}
                      - Bilas dengan air hangat sampai bersih{"\n"}
                      - Aduklah adonan kue hingga kalis{"\n"}
                      - Potonglah wortel dengan bentuk bulat dan tipis
                    </Text>
                    <Text style={{color: '#131313', fontSize: 12, fontWeight: '500', marginTop: 16}}>3. Menggunakan Kata Keterangan</Text>
                    <Text style={{textAlign: 'justify', lineHeight: 21, color: '#A5A5A5', fontSize: 12, fontWeight: '400', marginTop: 8}}>Menggunakan kata keterangan dengan tujuan untuk menyatakan rinci tempat, waktu dan cara-cara atau langkah-langkah yang akurat. Fungsi dari kata keterangan dalam teks ini adalah untuk memberikan keterangan terhadap kata lain. Contohnya:{"\n"}
                    - Gunakan krim ini hanya pada malam hari sebelum tidur{"\n"}
                    - Jauhkan dari jangkauan anak-anak berusia di bawah 3 tahun
                    </Text>
                    <Text style={{color: '#131313', fontSize: 12, fontWeight: '500', marginTop: 16}}>4. Terdapat Kalimat Larangan atau Saran</Text>
                    <Text style={{textAlign: 'justify', lineHeight: 21, color: '#A5A5A5', fontSize: 12, fontWeight: '400', marginTop: 8}}>Teks prosedur biasanya menggunakan kalimat yang bersifat larangan atau memberikan saran kepada pendengar atau pembaca. Contohnya, jangan menaruh garam terlalu banyak, sebaiknya tidak menggunakan air panas.</Text>
                    
                    <Text style={{color: '#131313', fontSize: 12, fontWeight: '500', marginTop: 16}}>5. Menggunakan Konjungsi</Text>
                    <Text style={{textAlign: 'justify', lineHeight: 21, color: '#A5A5A5', fontSize: 12, fontWeight: '400', marginTop: 8}}>Konjungsi dalam teks prosedur berfungsi sebagai penghubung atau mengkonjugasikan urutan langkah atau kegiatan yang kronologis. Contoh: Selanjutnya, kemudian, lalu, setelah itu, berikutnya dll.</Text>

                    <Text style={{color: '#131313', fontSize: 16, fontWeight: '600', marginTop: 32}}>Struktur Teks Prosedur</Text>
                    <Text style={{textAlign: 'justify', lineHeight: 21, color: '#A5A5A5', fontSize: 12, fontWeight: '400'}}>Dalam penyusunannya, struktur teks prosedur terdiri dari 4 bagian. Penjelasan lengkapnya sebagai berikut:</Text>
                    <Text style={{color: '#131313', fontSize: 12, fontWeight: '500', marginTop: 16}}>1. Tujuan</Text>
                    <Text style={{textAlign: 'justify', lineHeight: 21, color: '#A5A5A5', fontSize: 12, fontWeight: '400', marginTop: 8}}>Dalam menulis teks prosedur harus terdapat tujuan yang berisi tentang hasil akhir yang hendak dicapai setelah melakukan beberapa tahapan yang dijelaskan dalam teks itu. Dengan adanya tujuan maka akan membantu si penulis untuk bisa menyampaikan langkah-langkah kepada pembaca dengan rapi dan terstruktur.</Text>
                    <Text style={{color: '#131313', fontSize: 12, fontWeight: '500', marginTop: 16}}>2. Material atau Bahan-bahan</Text>
                    <Text style={{textAlign: 'justify', lineHeight: 21, color: '#A5A5A5', fontSize: 12, fontWeight: '400', marginTop: 8}}>Setelah tujuan maka yang selanjutnya adalah bagian material atau bahan-bahan. Pada bagian ini penulis akan menjelaskan tentang bahan apa saja yang digunakan, alat, maupun material lainnya yang diperlukan dalam melakukan langkah-langkahnya.</Text>
                    <Text style={{color: '#131313', fontSize: 12, fontWeight: '500', marginTop: 16}}>3. Langkah-langkah</Text>
                    <Text style={{textAlign: 'justify', lineHeight: 21, color: '#A5A5A5', fontSize: 12, fontWeight: '400', marginTop: 8}}>Pada bagian langkah-langkah ini penulis akan mulai menuliskan atau menjelaskan secara runtut langkah yang diperlukan dalam membuat sesuatu asal hasil yang diharapkan sesuai dengan tujuan dari teks prosedur tersebut. Pada tahap ini semua langkah harus dituliskan secara lengkap dan urut tidak boleh secara acak.</Text>
                    <Text style={{color: '#131313', fontSize: 12, fontWeight: '500', marginTop: 16}}>4. Penutup</Text>
                    <Text style={{textAlign: 'justify', lineHeight: 21, color: '#A5A5A5', fontSize: 12, fontWeight: '400', marginTop: 8}}>Pada bagian ini biasanya berisi tentang ucapan selamat mencoba dan penekanan pada keuntungan dalam menerapkan prosedur-prosedur tersebut.{"\n"}
                    Kalau kamu ingin menyusun teks prosedur, pastikan menggunakan struktur tersebut ya. Karena struktur teks prosedur yang lengkap, akan membuat arahannya menjadi jelas, dan bisa membantu pembaca dalam memahaminya.
                    </Text>

                  </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}
