// - Imports
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ListItem from '../components/list-item/ListItem';
import ListItemSeparator from '../components/list-item/ListItemSeparator';
import SafeArea from '../components/SafeArea';
import AppIcon from '../components/shared/AppIcon';
import useAuth from '../hooks/useAuth';
import { colors } from '../theme/colors';

const menuItems = [
  {
    title: 'My Listings',
    icon: { name: 'format-list-bulleted', backgroundColor: 'primary' },
  },
  {
    title: 'My Messages',
    icon: { name: 'email', backgroundColor: 'secondary' },
    targetScreen: 'Messages',
  },
];
/**
 * AccountScreen Component
 * @returns {JSX.Element} - JSX to be rendered to the screen
 */
const AccountScreen = ({ navigation }) => {
  const { user, logout } = useAuth();

  return (
    <SafeArea style={styles.screen}>
      <View style={styles.baseContainer}>
        <ListItem
          title={user.name}
          subTitle={user.email}
          image={require('../assets/img/user.jpg')}
        />
      </View>
      <View style={styles.baseContainer}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              onPress={() => navigation.navigate(item.targetScreen)}
              IconComponent={(
                <AppIcon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              )}
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<AppIcon name="logout" backgroundColor="yellow" />}
        onPress={logout}
      />
    </SafeArea>
  );
};

// - Styles
const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.lightGray,
  },
  baseContainer: {
    marginVertical: 20,
  },
});

// - Exports
export default AccountScreen;
