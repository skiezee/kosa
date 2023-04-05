import React from "react";
import { Text, View } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";


export default function IconProfile (props) {
    return (
      <View
        style={{
          backgroundColor: "#5970E714",
          width: 48,
          height: 48,
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Ionicons
            name={props.name}
            size={24}
            color="#5970E7"
            
          />
        </View>
          
      </View>
    );
}