// - Imports
import PropTypes from 'prop-types';
import { useFormikContext } from 'formik';
import React from 'react';
import AppTextInput from '../shared/AppTextInput';
import AppErrorMessage from './AppErrorMessage';

/**
 * AppFormField Component
 * @returns {JSX.Element} - JSX to be rendered to the screen
 */
const AppFormField = ({ name, width, ...otherProps }) => {
  const {
    setFieldTouched,
    setFieldValue,
    values,
    errors,
    touched,
  } = useFormikContext();

  return (
    <>
      <AppTextInput
        {...otherProps}
        width={width}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        onBlur={() => setFieldTouched(name)}
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

// - Exports
export default AppFormField;
