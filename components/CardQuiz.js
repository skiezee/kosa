import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons, Foundation } from "@expo/vector-icons";

export default function CardQuiz(props){
    return (
      <View style={styles.container}>
        <View style={{ margin: 20 }}>
          {/* icon and title desc */}
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 12,
                backgroundColor: "#5970E714",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons name="book-sharp" size={22} color="#5970E7" />
            </View>
            <View style={{ marginLeft: 12, marginTop: 2 }}>
              <Text style={{ fontSize: 16, fontWeight: "500" }}>
                {props.title}
              </Text>
              <Text
                style={{
                  color: "#A5A5A5",
                  fontSize: 12,
                  fontWeight: "400",
                  marginTop: 2,
                }}
              >
                {props.desc}
              </Text>
            </View>
          </View>
          {/* icon and title desc */}

          {/* soal, type, time */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 4,
            }}
          >
            <View
              style={{
                borderColor: "#F3F3F3",
                borderWidth: 1.5,
                borderRadius: 10,
                marginTop: 12,
                flex: 0.3,
              }}
            >
              <Text
                style={{ margin: 8, color: "#5970E7", textAlign: "center" }}
              >
                {props.soal}
              </Text>
            </View>
            <View
              style={{
                borderColor: "#F3F3F3",
                borderWidth: 1.5,
                borderRadius: 10,
                marginTop: 12,
                flex: 0.3,
              }}
            >
              <Text
                style={{ margin: 8, color: "#5970E7", textAlign: "center" }}
              >
                {props.type}
              </Text>
            </View>
            <View
              style={{
                borderColor: "#F3F3F3",
                borderWidth: 1.5,
                borderRadius: 10,
                marginTop: 12,
                flex: 0.3,
              }}
            >
              <Text
                style={{ margin: 8, color: "#5970E7", textAlign: "center" }}
              >
                {props.time}
              </Text>
            </View>
          </View>
          {/* soal, type, time */}

          {/* line */}
          <View
            style={{
              borderBottomWidth: 1.5,
              borderBottomColor: "#1313130A",
              width: "100%",
              marginTop: 12,
            }}
          />
          {/* line */}

          {/* button review and start quiz*/}
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <TouchableOpacity
              style={{
                borderColor: "#5970E7",
                borderWidth: 1,
                borderRadius: 10,
                marginTop: 12,
                flex: 0.48,
              }}
              onPress={props.onPress}
            >
              <Text
                style={{
                  margin: 8,
                  color: "#5970E7",
                  textAlign: "center",
                  fontSize: 14,
                  fontWeight: "500",
                }}
              >
                Review
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#5970E7",
                borderRadius: 10,
                marginTop: 12,
                flex: 0.48,
              }}
              onPress={props.nav}
            >
              <Text
                style={{
                  margin: 8,
                  color: "white",
                  textAlign: "center",
                  fontSize: 14,
                  fontWeight: "500",
                }}
              >
                Mulai Quiz
              </Text>
            </TouchableOpacity>
          </View>
          {/* button review and start quiz*/}
        </View>
      </View>
    );
}
const styles = StyleSheet.create({
    container: {
        borderColor: '#1313130A',
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'column',
        marginTop: 16,
    }
})