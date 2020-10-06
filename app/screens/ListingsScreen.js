// - Imports
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import listingsApi from '../api/listings';
import AppActivityIndicator from '../components/animated/AppActivityIndicator';
import SafeArea from '../components/SafeArea';
import AppButton from '../components/shared/AppButton';
import AppCard from '../components/shared/AppCard';
import AppText from '../components/shared/AppText';
import useApi from '../hooks/useApi';
import routes from '../navigation/routes';
import { colors } from '../theme/colors';

/**
 * ListingsScreen Component
 * @returns {JSX.Element} - JSX to be rendered to the screen
 */
const ListingsScreen = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);

  const {
    request: loadListings, data, loading, error,
  } = useApi(
    listingsApi.getListings,
  );

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <>
      <AppActivityIndicator visible={loading} />
      <SafeArea style={styles.baseContainer}>
        {error && (
          <>
            <AppText style={styles.error}>
              Could not retrieve the listings.
            </AppText>
            <AppButton title="Retry" onPress={loadListings} />
          </>
        )}

        <FlatList
          data={data}
          refreshing={refreshing}
          onRefresh={loadListings}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={<View style={styles.topSpacer} />}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <AppCard
              title={item.title}
              subTitle={item.price}
              imageUrl={item.images[0].url}
              D
              thumbnailUrl={item.images[0].thumbnailUrl}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            />
          )}
        />
      </SafeArea>
    </>
  );
};

// - Styles
const styles = StyleSheet.create({
  baseContainer: {
    paddingHorizontal: 20,
    backgroundColor: colors.lightGray,
  },
  topSpacer: {
    height: 20,
  },
  error: {
    fontSize: 18,
    marginBottom: 20,
    alignSelf: 'center',
  },
  primaryText: {
    fontSize: 30,
  },
});

// - Exports
export default ListingsScreen;
