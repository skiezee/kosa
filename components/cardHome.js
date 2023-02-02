import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function CardHome(props){
    return(
        <View style={{backgroundColor:'#5970E7', borderRadius: 16, marginTop: 24}}>
            
            <ImageBackground source={require('../assets/card.png')}>
                <View style={{margin: 16}}>
                    <Text style={{fontSize: 18, color: 'white', fontWeight: '700'}}>Kuis Teks Prosedur</Text>
                    <Text style={{fontSize: 12, color: 'white', marginTop: 2, fontWeight: '500'}}>Raih poin setinggi mungkin</Text>
                    <TouchableOpacity style={{flexDirection: 'row', marginTop: 40}} onPress={props.press}>
                        <Text style={{fontSize: 10, color: 'white', fontWeight: '500',}}>{props.next}</Text>
                        <AntDesign name={props.name} size={13} color="white" style={{marginLeft: 4}}/>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}