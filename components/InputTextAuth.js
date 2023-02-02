import React from 'react';
import {  TextInput, View, } from 'react-native';

export default function InputTextAuth(props){
    return(
        <View>
            <TextInput 
                secureTextEntry={props.secure} 
                style={{
                height: 48,
                width: 350,
                fontSize: 16,
                borderColor: '#B8B8D2',
                borderWidth: 1,
                borderRadius: 8,
                paddingLeft:12,
                paddingRight:12,
                marginTop: 12
                }}
                placeholder= {props.plch}
                placeholderTextColor = "#3F72AF4D" 
            />
         </View>
    ) 
}