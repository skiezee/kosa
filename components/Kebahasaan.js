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

export default function KebahasaanComponent(props) {
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
            Kaidah Tesk Prosedur
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
            Kaidah Kebahasaan Teks Prosedur
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
            Untuk menyusun sebuah teks prosedur, diperlukan kaidah kebahasaan
            yang tepat agar sesuai dengan fungsinya. Berikut adalah kaidah
            kebahasaan yang umum digunakan dalam penulisan teks jenis prosedur:
          </Text>
          <Text
            style={{
              color: "#131313",
              fontSize: 12,
              fontWeight: "500",
              marginTop: 16,
            }}
          >
            1. Kalimat
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
            Pada teks prosedur, kalimat-kalimat yang digunakan dapat
            dikategorikan dalam 3 bagian. Kalimat tersebut adalah:
          </Text>
          <Text
            style={{
              color: "#131313",
              fontSize: 12,
              fontWeight: "500",
              marginTop: 16,
            }}
          >
            a. Kalimat Imperatif
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
            Merupakan kalimat yang mengandung perintah. Kalimat imperatif
            ditandai dengan adanya hal yang harus dikerjakan merujuk pada
            perintah dalam kalimat. Pada jenis kalimat ini, tanda seru (!)
            digunakan untuk mengakhiri ungkapan atau pernyataan.
          </Text>
          <Text
            style={{
              color: "#131313",
              fontSize: 12,
              fontWeight: "500",
              marginTop: 16,
            }}
          >
            b. Kalimat Deklaratif
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
            Kalimat ini dikenal sebagai kalimat yang sifatnya lebih memberikan
            informasi, dan sering juga disebut sebagai kalimat pernyataan. Pada
            kalimat ini, tanda baca titik (.) digunakan untuk mengakhiri kalimat
            tersebut.
          </Text>
          <Text
            style={{
              color: "#131313",
              fontSize: 12,
              fontWeight: "500",
              marginTop: 16,
            }}
          >
            c. Kalimat Interogratif
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
            Kalimat ini digunakan untuk mencari informasi dengan memberi
            pertanyaan. Oleh karena itu, di akhir kalimat interogatif, diberikan
            tanda baca tanda tanya (?).
          </Text>
          <Text
            style={{
              color: "#131313",
              fontSize: 12,
              fontWeight: "500",
              marginTop: 32,
            }}
          >
            3. Numeralia
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
            Numeralia dalam teks prosedur merupakan pilihan yang bisa digunakan
            selain menggunakan konjungsi. Numeralia merupakan kata bilangan yang
            digunakan untuk mengurutkan langkah-langkah dalam teks prosedur.
            Misalkan pertama, kedua, ketiga, dan seterusnya.
          </Text>
          <Text
            style={{
              color: "#131313",
              fontSize: 12,
              fontWeight: "500",
              marginTop: 32,
            }}
          >
            4. Pronomina
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
            Pronomina atau kata ganti, digunakan untuk menggantikan orang atau
            benda. Berdasarkan fungsinya yang menggantikan orang atau benda,
            pronomina dibagi menjadi dua macam:
          </Text>
          <Text
            style={{
              color: "#131313",
              fontSize: 12,
              fontWeight: "500",
              marginTop: 16,
            }}
          >
            a. Pronomina Penunjuk
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
            Kata ganti untuk menggantikan benda. Contohnya ini, itu, tersebut.
          </Text>
          <Text
            style={{
              color: "#131313",
              fontSize: 12,
              fontWeight: "500",
              marginTop: 16,
            }}
          >
            b. Pronomina Persona
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
            Kata ganti untuk menggantikan orang. Pada pronomina persona, bagi
            kata ganti untuk orang tunggal, contohnya anda, saya, kamu.
            Sedangkan untuk orang jamak, contohnya kita, kalian.
          </Text>
          <Text
            style={{
              color: "#131313",
              fontSize: 12,
              fontWeight: "500",
              marginTop: 32,
            }}
          >
            5. Verba
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
            Kaidah kebahasaan terakhir dalam teks prosedur, adalah verba atau
            kata kerja. Verba dalam teks prosedur terbagi menjadi dua macam,
            yakni:
          </Text>
          <Text
            style={{
              color: "#131313",
              fontSize: 12,
              fontWeight: "500",
              marginTop: 16,
            }}
          >
            a. Verba Material
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
            Kata kerja berimbuhan yang mengacu pada sebuah tindakan atau
            perbuatan yang dilakukan secara fisik. Contohnya mengupas, mengiris,
            memaku, memotong, dan lain sebagainya.
          </Text>
          <Text
            style={{
              color: "#131313",
              fontSize: 12,
              fontWeight: "500",
              marginTop: 16,
            }}
          >
            b. Verba Tingkah Laku
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
            Kata kerja yang ditunjukkan lewat ungkapan. Verba ini juga dipahami
            sebagai kata kerja yang tidak tampak aktivitasnya. Contohnya
            menyukai, berpikir, dan menyetujui.
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
