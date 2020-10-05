// - Imports
import React from 'react';
import {
  Image,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  View,
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
    source={require('../assets/img/background.jpg')}
    style={styles.imageBackground}
  >
    <View style={styles.logoContainer}>
      <Image
        source={require('../assets/img/logo-red.png')}
        style={styles.logo}
      />
      <Text style={styles.tagLine}>Sell What You Don't Need</Text>
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
  },
  logo: {
    width: 100,
    height: 100,
  },
  tagLine: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 20,
    fontStyle: 'italic',
  },
  buttonsContainer: {
    padding: 20,
    width: '100%',
  },
});

// - Exports
export default WelcomeScreen;
