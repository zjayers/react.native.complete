// - Imports
import { Notifications } from 'expo';
import React from 'react';
import { Alert, Keyboard } from 'react-native';
import * as Yup from 'yup';
import messagesApi from '../../api/messages';
import AppForm from './AppForm';
import AppFormField from './AppFormField';
import AppSubmitButton from './AppSubmitButton';
import logger from '../../utils/logger';

/**
 * ContactSellerForm Component
 * @returns {JSX.Element} - JSX to be rendered to the screen
 */
const ContactSellerForm = ({ listing }) => {
  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();

    const result = await messagesApi.send(message, listing.id);

    if (!result.ok) {
      logger.log('Error Submitting Contact Form', result);
      return Alert.alert('Error', 'Could not send message to the seller. Please try again later.');
    }

    resetForm();

    return Notifications.presentLocalNotificationAsync({
      title: 'Awesome!',
      body: 'Your message was sent to the seller.',
    });
  };

  return (
    <AppForm
      initialValues={{ message: '' }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <AppFormField
        maxLength={255}
        multiline
        name="message"
        numberOfLines={3}
        placeholder="Message..."
      />
      <AppSubmitButton title="Contact Seller" />
    </AppForm>
  );
};

const validationSchema = Yup.object().shape({
  message: Yup.string().required().min(1).label('Message'),
});

export default ContactSellerForm;
