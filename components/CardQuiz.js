import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CardQuiz(props){
    return(
        <View style={styles.container}>
            <View style={{margin: 20}}>
                 {/* icon and title desc */}
                <View style={{flexDirection: 'row'}}>
                    <View style={{width: 40, height: 40, borderRadius: 12, backgroundColor:'#5970E714', alignItems:'center', justifyContent:'center'}}>
                        <Ionicons name="book-sharp" size={22} color="#5970E7"/>
                    </View>
                    <View style={{marginLeft: 12}}>
                        <Text style={{fontSize: 16, fontWeight: '500'}}>Quiz 1 Teks Prosedur</Text>
                        <Text style={{color: '#A5A5A5', fontSize: 12, fontWeight: '400', }}>Pengenalan Teks Prosedur</Text>
                    </View>
                </View>
                {/* icon and title desc */}

                {/* soal, type, time */}

                {/* soal, type, time */}
            </View>
           
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        borderColor: '#1313130A',
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'column',
        marginTop: 16
    }
})