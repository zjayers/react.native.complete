// - Imports
import { useFormikContext } from 'formik';
import React from 'react';
import ImageInputList from '../images/ImageInputList';
import AppErrorMessage from './AppErrorMessage';

/**
 * AppImagePicker Component
 * @returns {JSX.Element} - JSX to be rendered to the screen
 */
const AppImagePicker = ({ name }) => {
  const {
    errors, setFieldValue, touched, values,
  } = useFormikContext();

  const imageUris = values[name];

  const handleAddImage = (uri) => {
    setFieldValue(name, [...imageUris, uri]);
  };

  const handleRemoveImage = (uri) => {
    setFieldValue(
      name,
      imageUris.filter((u) => u !== uri),
    );
  };

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAddImage}
        onRemoveImage={handleRemoveImage}
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

// - Exports
export default AppImagePicker;
