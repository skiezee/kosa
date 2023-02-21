import React from "react";
import { View, Text, TouchableOpacity} from "react-native";

export default function ListMateri(props){
    return(
        <View style={props.style}>
            <TouchableOpacity style={{ borderColor:'#F3F3F3', borderWidth: 1.5, borderRadius: 10, flex: 1}} onPress={props.press}>
                <Text style={{margin: 8, color:'#A5A5A5', textAlign: 'center'}}>{props.text}</Text>                
            </TouchableOpacity>
        </View>
    )
}