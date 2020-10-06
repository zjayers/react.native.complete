// - Imports
import React from 'react';
import {
  Image, ImageBackground, Platform, StyleSheet, View,
} from 'react-native';
import AppButton from '../components/shared/AppButton';
import routes from '../navigation/routes';

/**
 * WelcomScreen Component
 * @returns {JSX.Element} - JSX to be rendered to the screen
 */
const WelcomeScreen = ({ navigation }) => (
  <ImageBackground
    blurRadius={Platform.OS === 'android' ? 1.75 : 7}
    source={require('../assets/background.jpg')}
    style={styles.imageBackground}
  >
    <View style={styles.logoContainer}>
      <Image
        source={require('../assets/logo-red.png')}
        style={styles.logo}
      />
      <Image style={styles.tagLine} source={require('../assets/tagLine.png')} />
    </View>
    <View style={styles.buttonsContainer}>
      <AppButton
        title="login"
        onPress={() => {
          navigation.navigate(routes.LOGIN);
        }}
        color="primary"
      />
      <AppButton
        title="register"
        onPress={() => {
          navigation.navigate(routes.REGISTER);
        }}
        color="secondary"
      />
    </View>
  </ImageBackground>
);

// - Styles
const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    width: 100,
    height: 100,
    top: 40,
  },
  tagLine: {
    width: 300,
    height: 40,
    top: 80,
  },
  buttonsContainer: {
    padding: 20,
    width: '100%',
  },
});

// - Exports
export default WelcomeScreen;
