import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Image,
} from 'react-native';

const image = {uri: '/Users/kirtik.raj/Desktop/ProjectZ/src/assets/bck2.jpeg'};

const facebookImage = {
  uri: '/Users/kirtik.raj/Desktop/ProjectZ/src/assets/facebook.png',
};

const googleImage = {
  uri: '/Users/kirtik.raj/Desktop/ProjectZ/src/assets/google.png',
};

const logo = {
  uri: '/Users/kirtik.raj/Desktop/ProjectZ/src/assets/logo1.png',
};

function LoginScreen({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={{flex: 1}} resizeMode="cover">
        <View
          style={{
            justifyContent: 'space-around',
            alignItems: 'center',
            flex: 2.5,
          }}>
          <Image style={styles.mainlogoDesign} source={logo} />
          <Text style={styles.mainLogoText}>Gratitude</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            flex: 1,
            marginTop: '10%',
          }}>
          <TouchableOpacity style={styles.logoButton}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
              <Image style={styles.logoDesign} source={facebookImage} />
              <Text style={styles.buttonText}>Facebook</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.logoButton}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
              <Image style={styles.logoDesign} source={googleImage} />
              <Text style={styles.buttonText}>Google</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{flex: 0.2}}>
          <Text style={styles.orTextDesign}>or</Text>
        </View>

        <View
          style={{
            justifyContent: 'space-around',
            alignItems: 'center',
            flex: 2,
          }}>
          <TextInput
            style={styles.inputBox}
            keyboardType="email-address"
            placeholder="Email id"
            placeholderTextColor="#fff"
          />

          <TextInput
            style={styles.inputBox}
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor="#fff"
          />
        </View>
        <View style={{flex: 0.5}}>
          <Text style={styles.textStyle}>Forgot Password</Text>
        </View>

        <View
          style={{justifyContent: 'center', alignItems: 'center', flex: 0.5}}>
          <TouchableOpacity
            style={styles.buttonDesign}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={{flex: 1}}>
          <Text
            style={{
              color: 'white',
              fontSize: 15,
              paddingLeft: '15%',
              marginTop: '5%',
            }}>
            Don't have an account ?
            <Text style={{color: 'red'}}> Register Now</Text>
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  buttonDesign: {
    backgroundColor: 'rgba(230, 191, 131,0.3)',
    marginTop: '2%',
    width: '80%',
    height: 40,
    borderWidth: 0,
    borderRadius: 10,
  },
  inputBox: {
    width: '80%',
    height: 50,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: 'rgba(230, 191, 131,0.7)',
    marginTop: '5%',
    fontSize: 20,
    color: '#fff',
  },

  buttonText: {
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 5,
  },

  textStyle: {
    color: 'red',
    fontSize: 15,
    paddingLeft: '60%',
  },
  logoButton: {
    backgroundColor: '#fff',
    marginTop: '10%',
    width: '40%',
    height: 40,
    borderWidth: 0,
    borderRadius: 10,
    alignItems: 'center',
  },
  logoDesign: {
    width: 30,
    height: 30,
    marginTop: 5,
  },

  mainlogoDesign: {
    width: 400,
    height: 400,
    marginTop: 5,
  },

  mainLogoText: {
    color: '#fff',
    fontSize: 45,
    fontFamily: 'papyrus',
  },

  orTextDesign: {
    color: '#fff',
    fontSize: 20,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
