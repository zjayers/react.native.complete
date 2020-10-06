// - Imports
import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup';
import authApi from '../api/auth';
import {
  AppErrorMessage, AppForm, AppFormField, AppSubmitButton,
} from '../components/forms';
import SafeArea from '../components/SafeArea';
import useAuth from '../hooks/useAuth';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

/**
 * LoginScreen Component
 * @returns {JSX.Element} - JSX to be rendered to the screen
 */
const LoginScreen = () => {
  const [loginFailed, setLoginFailed] = useState(false);

  const { login } = useAuth();

  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password);

    if (!result.ok) return setLoginFailed(true);

    setLoginFailed(false);
    return login(result.data);
  };

  return (
    <SafeArea style={styles.baseContainer}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />
      <AppErrorMessage style={styles.errorMsg} error="Invalid email and/or password." visible={loginFailed} />
      <AppForm
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="email"
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          textContentType="emailAddress"
          icon="email"
        />
        <AppFormField
          name="password"
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          placeholder="Password"
          textContentType="password"
          secureTextEntry
        />
        <AppSubmitButton title="Login" />
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
    alignSelf: 'center',
  },
  errorMsg: {
    alignSelf: 'center',
  },
});

// - Exports
export default LoginScreen;
