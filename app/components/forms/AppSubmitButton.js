// - Imports
import { useFormikContext } from "formik";
import React from "react";
import AppButton from "../shared/AppButton";

/**
 * AppSubmitButton Component
 * @returns {JSX.Element} - JSX to be rendered to the screen
 */
const AppSubmitButton = ({ title }) => {
  const { handleSubmit } = useFormikContext();
  return <AppButton title={title} onPress={handleSubmit} />;
};

// - Exports
export default AppSubmitButton;
