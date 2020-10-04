// - Imports
import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import CategoryPickerItem from "../components/picker/CategoryPickerItem";
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  AppSubmitButton,
} from "../components/forms";
import SafeArea from "../components/SafeArea";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  {
    label: "Furniture",
    value: 1,
    backgroundColor: "cyan",
    icon: "floor-lamp",
  },
  { label: "Cars", value: 2, backgroundColor: "red", icon: "car" },
  { label: "Cameras", value: 3, backgroundColor: "orange", icon: "camera" },
  { label: "Games", value: 4, backgroundColor: "gold", icon: "cards" },
  {
    label: "Clothing",
    value: 5,
    backgroundColor: "lightGreen",
    icon: "shoe-heel",
  },
  { label: "Sports", value: 6, backgroundColor: "teal", icon: "basketball" },
  {
    label: "Movies & Music",
    value: 7,
    backgroundColor: "blue",
    icon: "headphones",
  },
  {
    label: "Books",
    value: 8,
    backgroundColor: "purple",
    icon: "book",
  },
  {
    label: "Other",
    value: 9,
    backgroundColor: "mediumGray",
    icon: "checkerboard",
  },
];

/**
 * ListingEditScreen Component
 * @returns {JSX.Element} - JSX to be rendered to the screen
 */
const ListingEditScreen = (props) => {
  return (
    <SafeArea style={styles.baseContainer}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={console.log}
        validationSchema={validationSchema}
      >
        <AppFormField maxLength={255} name={"title"} placeholder={"Title"} />
        <AppFormField
          keyboardType={"numeric"}
          maxLength={8}
          name={"price"}
          placeholder={"Price"}
          width={120}
        />
        <AppFormPicker
          items={categories}
          name={"category"}
          placeholder={"Category"}
          width={200}
          PickerItemComponent={CategoryPickerItem}
          numberOfColumns={3}
        />
        <AppFormField
          maxLength={255}
          multiline
          name={"description"}
          numberOfLines={3}
          placeholder={"Description"}
        />
        <AppSubmitButton title={"Post"} />
      </AppForm>
    </SafeArea>
  );
};

// - Styles
const styles = StyleSheet.create({
  baseContainer: {},
});

// - Exports
export default ListingEditScreen;
