import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';
import ListingsScreen from '../screens/ListingsScreen';
import routes from './routes';

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen
      name={routes.LISTING}
      component={ListingsScreen}
      options={{ headerShown: false, title: 'Return To Listings' }}
    />
    <Stack.Screen
      name={routes.LISTING_DETAILS}
      component={ListingDetailsScreen}
      options={{ title: '' }}
    />
  </Stack.Navigator>
);

export default FeedNavigator;
