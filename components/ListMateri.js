import React from "react";
import { View, Text, TouchableOpacity} from "react-native";

export default function ListMateri(props){
    return(
        <View style={props.style}>
            <TouchableOpacity style={{borderColor: '#F3F3F3', borderWidth: 1, borderRadius: 10, }} onPress={props.press}>
                <Text style={{textAlign: 'center', margin: 12, color: '#A5A5A5', fontSize: 14}}>{props.text}</Text>
            </TouchableOpacity>
        </View>
    )
}