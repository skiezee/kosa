import React from "react";
import { View, Text, SafeAreaView, StyleSheet, useColorScheme, ScrollView, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function PengenalanComponent(props){
    return (
      <View>
        <SafeAreaView style={{ margin: 24 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                borderWidth: 1,
                borderColor: "#F3F3F3",
                width: 48,
                height: 48,
                borderRadius: 48,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={props.press}
            >
              <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
            <View>
              <Text
                style={{
                  color: "black",
                  textAlign: "center",
                  fontSize: 18,
                  fontWeight: "500",
                }}
              >
                Teks Prosedur
              </Text>
              <Text
                style={{
                  color: "#A5A5A5",
                  textAlign: "center",
                  marginTop: 4,
                  fontSize: 12,
                  fontWeight: "400",
                }}
              >
                Pengenalan Tesk Prosedur
              </Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                borderWidth: 1,
                borderColor: "#F3F3F3",
                width: 48,
                height: 48,
                borderRadius: 48,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons name="notifications-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ marginTop: 24 }}
          >
            <View style={{ marginBottom: 128 }}>
              <Text
                style={{ color: "#131313", fontSize: 16, fontWeight: "600" }}
              >
                {props.titleone}
              </Text>
              <Text
                style={{
                  textAlign: "justify",
                  lineHeight: 21,
                  color: "#A5A5A5",
                  fontSize: 12,
                  fontWeight: "400",
                }}
              >
                Halo, teman-teman! Pernah nggak kamu iseng ngebaca-baca tulisan
                di bungkus mi atau makanan instan lainnya? Pada bagian
                belakangnya, pasti ada semacam petunjuk/instruksi tentang cara
                menyiapkan mi tersebut dengan benar, supaya benar-benar matang
                dan rasanya jadi enak. Nah, hal tersebut merupakan salah satu
                contoh teks prosedur. Teks ini digunakan sebagai arahan,
                khususnya bagi kamu yang mungkin belum tau cara menyelesaikan
                suatu tugas.
              </Text>
              <Text
                style={{
                  color: "#131313",
                  fontSize: 16,
                  fontWeight: "600",
                  marginTop: 32,
                }}
              >
                {props.titletwo}
              </Text>
              <Text
                style={{
                  textAlign: "justify",
                  lineHeight: 21,
                  color: "#A5A5A5",
                  fontSize: 12,
                  fontWeight: "400",
                  marginTop: 8,
                }}
              >
                Secara umum, pengertian teks prosedur adalah langkah - langkah
                suatu aktivitas atau kegiatan untuk menyelesaikan suatu
                pekerjaan. Teks prosedur ini dibutuhkan sebagai panduan bagi
                seseorang dalam membuat atau menyusun sesuatu.
              </Text>
              <Text
                style={{
                  color: "#131313",
                  fontSize: 16,
                  fontWeight: "600",
                  marginTop: 16,
                }}
              >
                Jenis-Jenis Teks Prosedur
              </Text>
              <Text
                style={{
                  textAlign: "justify",
                  lineHeight: 21,
                  color: "#A5A5A5",
                  fontSize: 12,
                  fontWeight: "400",
                  marginTop: 8,
                }}
              >
                Teks prosedur juga ternyata memiliki beberapa jenisnya, lho!
                Penasaran? Berikut jenis-jenis teks prosedur.
              </Text>
              <Text
                style={{
                  color: "#131313",
                  fontSize: 12,
                  fontWeight: "500",
                  marginTop: 16,
                }}
              >
                1. Teks Prosedur Sederhana
              </Text>
              <Text
                style={{
                  textAlign: "justify",
                  lineHeight: 21,
                  color: "#A5A5A5",
                  fontSize: 12,
                  fontWeight: "400",
                  marginTop: 8,
                }}
              >
                Teks prosedur sederhana hanya berisi dua atau tiga langkah saja.
                Contohnya prosedur untuk mengoperasikan setrika.
              </Text>
              <Text
                style={{
                  color: "#131313",
                  fontSize: 12,
                  fontWeight: "500",
                  marginTop: 16,
                }}
              >
                2. Teks Prosedur Kompleks
              </Text>
              <Text
                style={{
                  textAlign: "justify",
                  lineHeight: 21,
                  color: "#A5A5A5",
                  fontSize: 12,
                  fontWeight: "400",
                  marginTop: 8,
                }}
              >
                Teks prosedur kompleks terdiri atas banyak langkah dan jenjang
                untuk tiap tahapannya. Contohnya prosedur pembayaran tilang oleh
                polisi.
              </Text>
              <Text
                style={{
                  textAlign: "justify",
                  lineHeight: 21,
                  color: "#A5A5A5",
                  fontSize: 12,
                  fontWeight: "400",
                  marginTop: 32,
                }}
              >
                Jadi, teks prosedur adalah teks yang bertujuan untuk membantu
                memudahkan pembacanya melakukan langkah kerja secara berurutan
                untuk mencapai tujuan tertentu atau petunjuk penggunaan. Teks
                prosedur biasanya ditulis secara berurutan agar memudahkan
                pengguna mengikuti langkah-langkah secara berurutan.
              </Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
}
