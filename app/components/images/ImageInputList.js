// - Imports
import React, { useRef, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ImageInput from './ImageInput';

/**
 * ImageInputList Component
 * @returns {JSX.Element} - JSX to be rendered to the screen
 */
const ImageInputList = ({ imageUris = [], onRemoveImage, onAddImage }) => {
  const [removing, setRemoving] = useState(false);

  const fList = useRef(null);

  const handleAdd = (uri) => {
    setRemoving(false);
    onAddImage(uri);
  };

  const handleRemove = (uri) => {
    setRemoving(true);
    onRemoveImage(uri);
  };

  return (
    <View style={styles.baseContainer}>
      <FlatList
        ref={fList}
        data={imageUris}
        keyExtractor={(uri) => uri}
        horizontal
        showsHorizontalScrollIndicator={false}
        onContentSizeChange={() => !removing && fList.current.scrollToEnd()}
        ListFooterComponent={
          <ImageInput onChangeImage={(uri) => handleAdd(uri)} />
        }
        renderItem={({ item: uri }) => (
          <View style={styles.imageListItem} key={uri}>
            <ImageInput
              imageUri={uri}
              onChangeImage={() => handleRemove(uri)}
            />
          </View>
        )}
      />
    </View>
  );
};

// - Styles
const styles = StyleSheet.create({
  baseContainer: {
    flexDirection: 'row',
  },
  imageListItem: {
    marginRight: 10,
  },
});

// - Exports
export default ImageInputList;
