// - Imports
import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ListItem from '../components/list-item/ListItem';
import ListItemDeleteAction from '../components/list-item/ListItemDeleteAction';
import ListItemSeparator from '../components/list-item/ListItemSeparator';
import SafeArea from '../components/SafeArea';

const messageRepo = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../assets/img/user.jpg'),
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../assets/img/user.jpg'),
  },
  {
    id: 3,
    title: 'T3',
    description: 'D3',
    image: require('../assets/img/user.jpg'),
  },
];

/**
 * MessagesScreen Component
 * @returns {JSX.Element} - JSX to be rendered to the screen
 */
const MessagesScreen = () => {
  const [messages, setMessages] = useState(messageRepo);
  const [refreshing, setRefreshing] = useState(false);

  const handleMessageDelete = (clickedMessage) => {
    // Delete the message from the messages array
    setMessages((prevMessages) => prevMessages.filter((m) => m.id !== clickedMessage.id));
    // Call the server to delete the message from there as well
  };

  return (
    <SafeArea>
      <FlatList
        style={styles.messageList}
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        ItemSeparatorComponent={() => <ListItemSeparator />}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages(messageRepo);
        }}
        renderItem={({ item }) => (
          <ListItem
            image={item.image}
            title={item.title}
            subTitle={item.description}
            onPress={() => {
              console.log('Tapped: ', item);
            }}
            rightActions={() => (
              <ListItemDeleteAction
                onPress={() => {
                  handleMessageDelete(item);
                }}
              />
            )}
          />
        )}
      />
    </SafeArea>
  );
};

// - Styles
const styles = StyleSheet.create({
  messageList: {},
});

// - Exports
export default MessagesScreen;
