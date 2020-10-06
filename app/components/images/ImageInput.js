// - Imports
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import React, { useEffect } from 'react';
import {
  Alert, Image, StyleSheet, TouchableWithoutFeedback, View,
} from 'react-native';
import { colors } from '../../theme/colors';
import logger from '../../utils/logger';

/**
 * ImageInput Component
 * @returns {JSX.Element} - JSX to be rendered to the screen
 */
const ImageInput = ({ imageUri, onChangeImage }) => {
  useEffect(() => {
    requestCameraRollPermission();
  }, []);

  /**
   * Request Users Permission to access the camera roll
   * @returns {Promise<void>}
   */
  const requestCameraRollPermission = async () => {
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!granted) alert('You must enable permission to access the photo library.');
  };

  /**
   * Handle Image button press (Delete or Select a new image)
   */
  const handlePress = async () => {
    if (!imageUri) await selectImage();
    else {
      Alert.alert('Delete', 'Are you sure you want to delete this image?', [
        {
          text: 'Yes',
          onPress: () => onChangeImage(null),
        },
        {
          text: 'No',
        },
      ]);
    }
  };

  /**
   * Select a new image
   * @returns {Promise<void>}
   */
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) {
        onChangeImage(result.uri);
      }
    } catch (e) {
      logger.log('Error Reading Image');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.baseContainer}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <MaterialCommunityIcons
            name="camera"
            size={40}
            color={colors.mediumGray}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

// - Styles
const styles = StyleSheet.create({
  baseContainer: {
    backgroundColor: colors.lightGray,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

// - Exports
export default ImageInput;
