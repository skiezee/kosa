import React from "react";
import { Text, View } from "react-native";
import IconProfile from "../components/CustomIconProfile";
import { MaterialIcons } from "@expo/vector-icons";

export default function IsiProfile(){
    return (
      <View>
        <View style={{ flexDirection: "row", marginTop: 24 }}>
          <IconProfile name="person" />
          <View
            style={{
              flexDirection: "col",
              justifyContent: "center",
              marginLeft: 12,
            }}
          >
            <Text
              style={{
                color: "#131313",
                fontWeight: "500",
                fontSize: 18,
              }}
            >
              Akun Anda
            </Text>
            <Text
              style={{
                color: "#A5A5A5",
                fontWeight: "400",
                fontSize: 12,
              }}
            >
              Atur dan amankan akun Anda
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", marginTop: 24 }}>
          <IconProfile name="notifications" />
          <View
            style={{
              flexDirection: "col",
              justifyContent: "center",
              marginLeft: 12,
            }}
          >
            <Text
              style={{
                color: "#131313",
                fontWeight: "500",
                fontSize: 18,
              }}
            >
              Notifikasi
            </Text>
            <Text
              style={{
                color: "#A5A5A5",
                fontWeight: "400",
                fontSize: 12,
              }}
            >
              Atur dan sesuaikan notifikasi Anda
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", marginTop: 24 }}>
          <IconProfile name="language" />
          <View
            style={{
              flexDirection: "col",
              justifyContent: "center",
              marginLeft: 12,
            }}
          >
            <Text
              style={{
                color: "#131313",
                fontWeight: "500",
                fontSize: 18,
              }}
            >
              Bahasa
            </Text>
            <Text
              style={{
                color: "#A5A5A5",
                fontWeight: "400",
                fontSize: 12,
              }}
            >
              Atur dan sesuaikan bahasa Anda
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", marginTop: 24 }}>
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
              <MaterialIcons name="privacy-tip" size={24} color="#5970E7" />
            </View>
          </View>

          <View
            style={{
              flexDirection: "col",
              justifyContent: "center",
              marginLeft: 12,
            }}
          >
            <Text
              style={{
                color: "#131313",
                fontWeight: "500",
                fontSize: 18,
              }}
            >
              Privasi dan Kebijakan
            </Text>
            <Text
              style={{
                color: "#A5A5A5",
                fontWeight: "400",
                fontSize: 12,
              }}
            >
              Privasi dan Kebijakan
            </Text>
          </View>
        </View>

        <View style={{  justifyContent: "center" }}>
          {/* konten lainnya */}
          <Text
            style={{
              position: "sticky",
              bottom: -90,
              color: "#A5A5A5",
              fontWeight: "500",
              fontSize: 12,
              textAlign: "center",
              alignSelf: "center",
            }}
          >
            Version 1.1.0
          </Text>
        </View>
      </View>
    );
}