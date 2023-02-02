import { View, TouchableOpacity, Text } from "react-native";


export default function CustomBtnAuth(props){
    return(
        <View style={{marginTop: 40, alignItems: 'center'}}>
            <TouchableOpacity style={{backgroundColor: '#5970E7', width: '100%', height: 48, borderRadius: 8, justifyContent: 'center'}} onPress={props.nav}>
                <Text style={{color: '#FFFFFF', textAlign: 'center', fontSize: 14, fontWeight: '700'}}>{props.txt}</Text>
            </TouchableOpacity>
        </View>
    )
}