import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import { Ionicons, Foundation } from '@expo/vector-icons';


class CardMateri extends Component {
  render() {
    return (
        <TouchableOpacity style={{marginTop: 16}} >
            <View style={styles.container}>
                <View style={{width: 40, height: 40, borderRadius: 12, backgroundColor:'#5970E714', alignItems:'center', justifyContent:'center'}}>
                    <Ionicons name="book-sharp" size={22} color="#5970E7"/>
                </View>
                <View style={{marginLeft: 16}}>
                    <Text style={{fontSize: 16, fontWeight: '500', color:'#131313'}}>{this.props.title}</Text>
                    <Text numberOfLines={4} style={{maxWidth: 270, marginTop: 2, fontWeight: '400', fontSize: 12, color:'#A5A5A5',}}>{this.props.desc}</Text>
                    <View style={{flexDirection: 'row'}}>
                        {/* materi */}
                        <View style={{flexDirection:'row', borderColor:'#F3F3F3', borderWidth: 1.5, borderRadius: 10, marginTop: 12, flex:0.35}}>
                            <View style={{margin: 8, flexDirection:'row', alignItems:'center'}}>
                                <Foundation name="clipboard-notes" size={18} color="#5970E7" />
                                <Text style={{textAlign:'center', color:'#A5A5A5', fontSize: 12, fontWeight:  '400', marginLeft: 6}}>{this.props.materi}</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row', borderColor:'#F3F3F3', borderWidth: 1.5, borderRadius: 10, marginTop: 12, flex:0.58, marginLeft: 12}}>
                            <View style={{margin: 8, flexDirection:'row', alignItems:'center'}}>
                                <Ionicons name="people-outline" size={19} color="#5970E7" />
                                <Text style={{textAlign:'center', color:'#A5A5A5', fontSize: 12, fontWeight:  '400', marginLeft: 6}}>{this.props.jumlah}</Text>
                            </View>
                        </View>                       
                    </View>
                    
                </View>
            </View>
            <View
                style={{
                    borderBottomWidth: 2,
                    borderBottomColor: '#1313130A',
                    width: '100%',
                    marginTop: 12
            }}
            />
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    }
});

export default CardMateri;