// - Imports
import { useFormikContext } from "formik";
import React from "react";
import AppPicker from "../picker/AppPicker";
import AppErrorMessage from "./AppErrorMessage";

/**
 * AppFormPicker Component
 * @returns {JSX.Element} - JSX to be rendered to the screen
 */
const AppFormPicker = ({
  items,
  name,
  numberOfColumns,
  placeholder,
  PickerItemComponent,
  width,
}) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        numberOfColumns={numberOfColumns}
        selectedItem={values[name]}
        width={width}
        PickerItemComponent={PickerItemComponent}
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

// - Exports
export default AppFormPicker;
