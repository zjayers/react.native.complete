// - Imports
import { useFormikContext } from 'formik';
import React from 'react';
import AppButton from '../shared/AppButton';

/**
 * AppSubmitButton Component
 * @returns {JSX.Element} - JSX to be rendered to the screen
 */
const AppSubmitButton = ({ title, color }) => {
  const { handleSubmit } = useFormikContext();
  return <AppButton title={title} onPress={handleSubmit} color={color} />;
};

// - Exports
export default AppSubmitButton;
