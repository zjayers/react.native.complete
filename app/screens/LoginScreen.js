// - Imports
import React from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";
import { AppForm, AppFormField, AppSubmitButton } from "../components/forms";
import SafeArea from "../components/SafeArea";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

/**
 * LoginScreen Component
 * @returns {JSX.Element} - JSX to be rendered to the screen
 */
const LoginScreen = () => {
  return (
    <SafeArea style={styles.baseContainer}>
      <Image
        style={styles.logo}
        source={require("../assets/img/logo-red.png")}
      />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={console.log}
        validationSchema={validationSchema}
      >
        <AppFormField
          name={"email"}
          placeholder={"Email"}
          autoCapitalize={"none"}
          autoCorrect={false}
          keyboardType="email-address"
          textContentType={"emailAddress"}
          icon={"email"}
        />
        <AppFormField
          name={"password"}
          autoCapitalize={"none"}
          autoCorrect={false}
          icon={"lock"}
          placeholder={"Password"}
          textContentType={"password"}
          secureTextEntry={true}
        />
        <AppSubmitButton title={"Login"} />
      </AppForm>
    </SafeArea>
  );
};

// - Styles
const styles = StyleSheet.create({
  baseContainer: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    marginTop: 50,
    marginBottom: 60,
    alignSelf: "center",
  },
});

// - Exports
export default LoginScreen;
