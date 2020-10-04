// - Imports
import { Formik } from "formik";
import React from "react";

/**
 * AppForm Component
 * @returns {JSX.Element} - JSX to be rendered to the screen
 */
const AppForm = ({ initialValues, onSubmit, validationSchema, children }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
};

// - Exports
export default AppForm;
