// - Imports
import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

/**
 * NewListingButton Component
 * @returns {JSX.Element} - JSX to be rendered to the screen
 */
const NewListingButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.baseContainer}>
      <MaterialCommunityIcons
        name="plus-circle"
        color={colors.white}
        size={40}
      />
    </View>
  </TouchableOpacity>
);

// - Styles
const styles = StyleSheet.create({
  baseContainer: {
    backgroundColor: colors.primary,
    height: 80,
    width: 80,
    borderRadius: 40,
    bottom: 20,
    borderWidth: 10,
    borderColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// - Exports
export default NewListingButton;
