import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';
import authApi from '../api/auth';
import users from '../api/users';
import AppActivityIndicator from '../components/animated/AppActivityIndicator';
import {
  AppErrorMessage, AppForm, AppFormField, AppSubmitButton,
} from '../components/forms';
import SafeArea from '../components/SafeArea';
import useApi from '../hooks/useApi';
import useAuth from '../hooks/useAuth';
import logger from '../utils/logger';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

const RegisterScreen = () => {
  const registerApi = useApi(users.register);
  const loginApi = useApi(authApi.login);
  const auth = useAuth();
  const [error, setError] = useState('');

  const handleSubmit = async (userInfo) => {
    const result = await registerApi.request(userInfo);

    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError('An unexpected error occured.');
        logger.log(result);
      }
      return;
    }

    const { data: authToken } = await loginApi.request(userInfo.email, userInfo.password);
    await auth.login(authToken);
  };

  return (
    <>
      <AppActivityIndicator visible={registerApi.loading || loginApi.loading} />
      <SafeArea style={styles.container}>
        <AppForm
          initialValues={{ name: '', email: '', password: '' }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <AppErrorMessage style={styles.errorMsg} error={error} visible={error} />
          <AppFormField
            autoCorrect={false}
            icon="account"
            name="name"
            placeholder="Name"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />
          <AppSubmitButton title="Register" color="secondary" />
        </AppForm>
      </SafeArea>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  errorMsg: {
    alignSelf: 'center',
  },
});

export default RegisterScreen;
