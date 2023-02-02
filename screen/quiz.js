import React from "react";
import { View, Text, SafeAreaView, useColorScheme, ScrollView, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CardHome from "../components/cardHome";
import InputSearch from "../components/SearchInput";
import CardQuiz from "../components/CardQuiz";

export default function QuizScreen(){

    const colorScheme = useColorScheme();

    const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

    return(
        <SafeAreaView style={[styles.container, themeContainerStyle]}>
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
              <CardHome press={() => navigation.navigate('Quiz')}/>
              <InputSearch/>
              {/* import component card quiz dan search */}

              

              {/* materi teks prosedur */}
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 24}}>
                    <Text style={{color: '#131313', fontSize: 18, fontWeight: '500'}} >Quiz Teks Prosedur</Text>
                    <Text style={{color: '#5970E7', fontSize: 14, fontWeight: '600', marginTop: 6}} onPress={() => navigation.navigate('Materi')}>Lainnya</Text>
                </View>
                <CardQuiz/>
               {/* materi teks prosedur */}
            </ScrollView>
        </SafeAreaView>
    )
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