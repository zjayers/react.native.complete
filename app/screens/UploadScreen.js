// - Imports
import React from 'react';
import {
  View, Text, StyleSheet, Modal,
} from 'react-native';
import * as Progress from 'react-native-progress';
import LottieView from 'lottie-react-native';
import AppText from '../components/shared/AppText';
import { colors } from '../theme/colors';

/**
 * UploadScreen Component
 * @returns {JSX.Element} - JSX to be rendered to the screen
 */
const UploadScreen = ({ progress = 0, visible = false, onAnimationFinish }) => (
  <Modal visible={visible}>
    <View style={styles.baseContainer}>
      {progress < 1 ? (
        <Progress.Bar color={colors.primary} progress={progress} width={200} />
      ) : (
        <LottieView
          style={styles.animation}
          source={require('../assets/animations/done.json')}
          autoPlay
          loop={false}
          onAnimationFinish={onAnimationFinish}
        />
      )}
    </View>
  </Modal>
);

// - Styles
const styles = StyleSheet.create({
  baseContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  animation: {
    width: 150,
  },
});

// - Exports
export default UploadScreen;
