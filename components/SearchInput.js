import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather, Entypo } from '@expo/vector-icons';

export default function InputSearch(props, {clicked, searchPhrase}) {
  return (
    <View style={styles.container}>
      <View
        style={
          clicked ? styles.searchBar__clicked : styles.searchBar__unclicked
        }
      >
        {/* search Icon */}
        <Feather
          name="search"
          size={18}
          color="#141E614D"
          style={{ marginLeft: 1 }}
        />
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder={props.plch}
          placeholderTextColor="#141E614D"
          value={searchPhrase}
          onChangeText={props.onChangeText}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      marginTop: 20,
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'row',
      width: '105%',
    },
    searchBar__unclicked: {
      padding: 10,
      flexDirection: 'row',
      width: '95%',
      backgroundColor: '#FFFF',
      borderWidth: 1,
      borderColor: '#F3F3F3',
      borderRadius: 8,
      alignItems: 'center',
    },
    searchBar__clicked: {
      padding: 10,
      flexDirection: 'row',
      width: '80%',
      backgroundColor: '#FFFF',
      borderWidth: 1,
      borderColor: '#F3F3F3',
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    input: {
      fontSize: 14,
      marginLeft: 10,
      width: '90%',
    },
  });