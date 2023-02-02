import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";
import { Feather, Entypo, FontAwesome } from '@expo/vector-icons';

export default function CardDashboard(){
    return(
        <View style={styles.container}>
            <View style={{margin: 17}}>
                <Image source={require('../assets/logo.png')}/>
                <Text style={styles.text}>Teks Prosedur Bahasa Indonesia</Text>
                <View style={{flexDirection: 'row', marginTop: 12}}>
                    <TouchableOpacity>
                        <View style={styles.card}>
                            <View style={{flexDirection: 'row', alignItems: 'center', left: 34}}>
                                <Feather
                                    name="book"
                                    size={18}
                                    color="#FFFFFF"
                                />
                                <Text style={{color: '#FFFFFF', fontSize: 12, fontWeight: '600', marginLeft: 6}}>Materi</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft: 12}}>
                        <View style={styles.card}>
                            <View style={{flexDirection: 'row', alignItems: 'center', left: 42}}>
                                <FontAwesome name="pencil-square-o" size={20} color="#FFFFFF" />
                                <Text style={{color: '#FFFFFF', fontSize: 12, fontWeight: '600', textAlign: 'center', marginLeft: 6}}>Quiz</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', marginTop: 12}}>
                    <TouchableOpacity>
                        <View style={styles.card}>
                            <View style={{flexDirection: 'row', alignItems: 'center', left: 22}}>
                                <Feather
                                    name="check-square"
                                    size={18}
                                    color="#FFFFFF"
                                />
                                <Text style={{color: '#FFFFFF', fontSize: 12, fontWeight: '600', marginLeft: 6, alignSelf: 'center', textAlign: 'center'}}>Review Quiz</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft: 12}}>
                        <View style={styles.card}>
                            <View style={{flexDirection: 'row', alignItems: 'center', left: 14}}>
                                <Feather
                                    name="book-open"
                                    size={18}
                                    color="#FFFFFF"
                                />
                                <Text style={{color: '#FFFFFF', fontSize: 12, fontWeight: '600', textAlign: 'center', marginLeft: 6}}>Laporan Belajar</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'column',
        justifyContent: 'center',
        borderRadius: 8,
        marginTop: 24,
        borderColor:'#000',
        borderWidth:0.3,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowRadius: 8,
        shadowOpacity: 0.5,
    },
    text: {
        color: '#3C3C43',
        fontWeight: '500',
        fontSize: 14,
        marginTop: 12,
    },
    card: {
        backgroundColor: '#5970E7',
        borderRadius: 12,
        flexDirection: 'row',
        width: 140,
        height: 43
    },
    containmain: {
        flexDirection: 'row',
        alignItems: 'center', 
        alignSelf: 'center',
        justifyContent: 'center',      
    }
}) 