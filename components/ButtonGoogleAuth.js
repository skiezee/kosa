import { View, TouchableOpacity, Text, Image } from "react-native";


export default function ButtonGoogleAuth(){
    return(
        <View style={{marginTop: 20}}>
            <TouchableOpacity style={{ backgroundColor: '#FFFF', width:'100%', height: 48, borderRadius: 8, borderColor: '#4848481F', borderWidth: 1, }}>
                <View style={{flexDirection: "row", flex: 1, alignItems: 'center',  justifyContent: 'center', }}>
                    <Image source={require('../assets/google.png')}/>
                    <Text style={{color: '#484848', textAlign: 'center', fontSize: 14, fontWeight: '500', marginLeft: 6}}>Sign in with Google</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}