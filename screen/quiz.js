import React, {useState, useEffect} from 'react';
import { View, Text, SafeAreaView, useColorScheme, ScrollView, StyleSheet, Platform, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CardHome from "../components/cardHome";
import InputSearch from "../components/SearchInput";
import CardQuiz from "../components/CardQuiz";

export default function QuizScreen({navigation}){

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
      {
        title: "Quiz 1 Teks Prosedur",
        desc: "Pengenalan Teks Prosedur",
        soal: "10 Soal",
        type: "Mudah",
        time: "20 Menit",
        navigasi: "QuizPengenalan",
        nav: "Review",
      },
      {
        title: "Quiz 2 Teks Prosedur",
        desc: "Ciri & Struktur Teks Prosedur",
        soal: "10 Soal",
        type: "Sedang",
        time: "20 Menit",
      },
      {
        title: "Quiz 3 Teks Prosedur",
        desc: "Kebahasaan Teks Prosedur",
        soal: "10 Soal",
        type: "Susah",
        time: "20 Menit",
      },
      {
        title: "Quiz 4 Teks Prosedur",
        desc: "Membuat Teks Prosedur",
        soal: "10 Soal",
        type: "Sedang",
        time: "20 Menit",
      },
    ];

    return (
      <View style={[styles.container, themeContainerStyle]}>
        <SafeAreaView style={styles.AndroidSafeArea}>
          <StatusBar backgroundColor="#131313" barStyle="dark-content" />
          <ScrollView
            style={{ margin: 24 }}
            showsVerticalScrollIndicator={false}
          >
            {/* bagian atas teks dan icon notif */}
            <View style={styles.topPart}>
              <View>
                <Text
                  style={{ color: "#131313", fontSize: 24, fontWeight: "500" }}
                >
                  Teks Prosedur
                </Text>
                <Text style={{ color: "#A5A5A5", marginTop: 8 }}>
                  Mengenal Teks Prosedur
                </Text>
              </View>
            </View>
            {/* bagian atas teks dan icon notif */}

            {/* import component card quiz dan search */}
            <CardHome press={() => navigation.navigate("Quiz")} />
            <InputSearch
              onChangeText={(search) => setState({ search })}
              plch="Cari quiz kuy!"
            />
            {/* import component card quiz dan search */}

            {/* materi teks prosedur */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 24,
              }}
            >
              <Text
                style={{ color: "#131313", fontSize: 18, fontWeight: "500" }}
              >
                Quiz Teks Prosedur
              </Text>
              <Text
                style={{
                  color: "#5970E7",
                  fontSize: 14,
                  fontWeight: "600",
                  marginTop: 2,
                }}
              >
                Lainnya
              </Text>
            </View>
            {filterList(list).map((listItem, index) => (
              <CardQuiz
                key={index}
                title={listItem.title}
                desc={listItem.desc}
                soal={listItem.soal}
                type={listItem.type}
                time={listItem.time}
                nav={() =>
                  navigation.reset({
                    index: 0,
                    routes: [{ name: listItem.navigasi }],
                  })
                }
                onPress={() =>
                  navigation.reset({
                    index: 0,
                    routes: [{ name: listItem.nav }],
                  })
                }
              />
            ))}
            {/* materi teks prosedur */}
          </ScrollView>
        </SafeAreaView>
      </View>
    );
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