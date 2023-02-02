import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, useColorScheme} from 'react-native';
import InputTextAuth from '../components/InputTextAuth';
import CustomBtnAuth from '../components/ButtonAuth';
import ButtonAppleAuth from '../components/ButtonApple';
import ButtonGoogleAuth from '../components/ButtonGoogleAuth';


export default function LoginScreen({navigation}) {

    const colorScheme = useColorScheme();

    const themeContainerStyle =
      colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

    const textDesc = 'Akses materi, latihan soal, dan beragam fitur menarik lainnya sekarang'
    const textDaftar = 'Yuk, daftar di KOSA. Gratis!'

    return (
      <View style={[styles.container, themeContainerStyle]}>
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
        <View style={{ flex: 1, alignItems: 'center', marginTop: 64}}>
            <Text style={styles.textdaftar}>{textDaftar}</Text>
            <Text style={styles.textdesc}>{textDesc}</Text>
            <Image source={require('../assets/login.png')} style={{marginTop: 48}}/>

            <View style={{marginTop:24}}>
                <InputTextAuth plch="Masukan email" secure={false}/>
                <InputTextAuth plch="Password" secure={true}/>

                <CustomBtnAuth nav={()=> navigation.navigate('Dashboard')} txt= "Sign in"/>
                
                <Text style={styles.textacc}>Don't have an account yet?</Text>

                <ButtonGoogleAuth/>
                <ButtonAppleAuth/>
            </View>

        </View>
      </View>
      </View>
    );
}

const styles = StyleSheet.create({
  textdaftar: {
    color: '#3C3C43', 
    fontWeight: '500', 
    fontSize: 16,
  },
  textdesc: {
    marginTop: 8, 
    textAlign: 'center', 
    maxWidth: 300, 
    color: '#3C3C43', 
    fontSize: 13, 
    fontWeight: '400'
  },
  textacc: {
    textAlign: 'center', 
    color: '#3C3C43', 
    marginTop: 20
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightContainer: {
    backgroundColor: '#FFFFFF',
  },
  darkContainer: {
    backgroundColor: '#FFFFFF',
  },
});