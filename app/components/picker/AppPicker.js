// - Imports
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { colors } from '../../theme/colors';
import { fontStyle } from '../../theme/font';
import SafeArea from '../SafeArea';
import AppText from '../shared/AppText';
import PickerItem from './PickerItem';

/**
 * App Picker Component
 * @returns {JSX.Element} - JSX to be rendered to the screen
 */
const AppPicker = ({
  icon,
  placeholder,
  items,
  numberOfColumns = 1,
  PickerItemComponent = PickerItem,
  selectedItem,
  onSelectItem,
  width = '100%',
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <View style={[styles.baseContainer, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.mediumGray}
              style={styles.icon}
            />
          )}
          <AppText
            style={[
              styles.inputText,
              selectedItem ? null : { color: colors.placeholderGray },
            ]}
          >
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={colors.mediumGray}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <SafeArea>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            style={styles.list}
            numColumns={numberOfColumns}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </SafeArea>
      </Modal>
    </>
  );
};

// - Styles
const styles = StyleSheet.create({
  baseContainer: {
    backgroundColor: colors.lightGray,
    borderRadius: 25,
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  inputText: {
    fontSize: 18,
    color: colors.darkGray,
    flex: 1,
    ...fontStyle,
  },
  list: {
    flex: 1,
    width: '100%',
    marginTop: 20,
  },
});

// - Exports
export default AppPicker;
