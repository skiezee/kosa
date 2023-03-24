import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function MembuatTeksProsedurComponent(props) {
  return (
    <SafeAreaView style={{ margin: 24 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
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
            Membuat Tesk Prosedur
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
            style={{
              color: "#131313",
              fontSize: 16,
              fontWeight: "600",
              marginTop: 24,
            }}
          >
            Bagaimana membuat teks prosedur yang baik dan menarik?
          </Text>
          <Text
            style={{
              color: "#131313",
              fontSize: 12,
              fontWeight: "500",
              marginTop: 16,
            }}
          >
            1. Menentukan Topik
          </Text>
          <Text
            style={{
              textAlign: "justify",
              lineHeight: 21,
              color: "#A5A5A5",
              fontSize: 12,
              fontWeight: "400",
              marginTop: 4,
            }}
          >
            Langkah pertama yang harus kamu lakukan untuk membuat teks prosedur
            adalah menentukan topik atau tema. Pilih kira-kira topik apa yang
            bisa kamu bahas. Jika kamu mendapatkan tugas dari sekolah atau
            kampus dan topiknya sudah ditentukan, maka kamu bisa lanjut ke
            langkah berikutnya.
          </Text>
          <Text
            style={{
              color: "#131313",
              fontSize: 12,
              fontWeight: "500",
              marginTop: 16,
            }}
          >
            2. Mengumpulkan Sumber Informasi
          </Text>
          <Text
            style={{
              textAlign: "justify",
              lineHeight: 21,
              color: "#A5A5A5",
              fontSize: 12,
              fontWeight: "400",
              marginTop: 4,
            }}
          >
            Setelah mengetahui topik apa yang ingin kamu bahas, kumpulkan
            informasi yang berkaitan dengan topik tersebut. Misalnya, kamu ingin
            membuat teks prosedur tentang cara membeli barang secara online di
            e-commerce. Maka kamu bisa coba mencari informasi tentang hal
            tersebut, seperti browsing di internet, tanya ke orang yang pernah
            melakukan, atau langsung praktek sendiri. Catat apa saja poin-poin
            penting yang berkaitan dengan topik yang sudah kamu pilih.
          </Text>
          <Text
            style={{
              color: "#131313",
              fontSize: 12,
              fontWeight: "500",
              marginTop: 16,
            }}
          >
            3. Membuat Kerangka
          </Text>
          <Text
            style={{
              textAlign: "justify",
              lineHeight: 21,
              color: "#A5A5A5",
              fontSize: 12,
              fontWeight: "400",
              marginTop: 4,
            }}
          >
            Selanjutnya, susunlah poin-poin penting yang sudah kamu catat pada
            langkah sebelumnya menjadi sebuah kerangka teks prosedur. Kerangka
            yang dimaksud di sini adalah menuliskan secara garis besar apa saja
            langkah-langkah yang harus dilakukan pada topik tersebut.
          </Text>
          <Text
            style={{
              color: "#131313",
              fontSize: 12,
              fontWeight: "500",
              marginTop: 16,
            }}
          >
            4. Mengembangkan Paragraf
          </Text>
          <Text
            style={{
              textAlign: "justify",
              lineHeight: 21,
              color: "#A5A5A5",
              fontSize: 12,
              fontWeight: "400",
              marginTop: 4,
            }}
          >
            Setelah membuat kerangka, langkah selanjutnya yang harus kamu
            lakukan adalah mengembangkannya menjadi sebuah paragraf yang utuh.
            Tuliskan secara detail langkah-langkah pada topik yang kamu pilih
            hingga bisa dipahami dengan mudah dan jelas.
          </Text>
          <Text
            style={{
              color: "#131313",
              fontSize: 12,
              fontWeight: "500",
              marginTop: 16,
            }}
          >
            5. Menyusun Teks Prosedur
          </Text>
          <Text
            style={{
              textAlign: "justify",
              lineHeight: 21,
              color: "#A5A5A5",
              fontSize: 12,
              fontWeight: "400",
              marginTop: 4,
            }}
          >
            Terakhir, susunlah semua yang sudah kamu tuliskan pada
            langkah-langkah di atas secara urut agar sesuai dengan struktur teks
            prosedur.
          </Text>          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 24,
  },
  container: {
    flex: 1,
  },
  lightContainer: {
    backgroundColor: "#FFFFFF",
  },
  darkContainer: {
    backgroundColor: "#FFFFFF",
  },
  lightThemeText: {
    color: "#FFFFFF",
  },
  darkThemeText: {
    color: "#FFFFFF",
  },
});
