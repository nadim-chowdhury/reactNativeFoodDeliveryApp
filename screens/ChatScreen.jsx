import React, { useState, useCallback, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

// Simulated Firebase setup and chat messages
const demoMessages = [
  {
    _id: 1,
    text: 'Your order has been shipped!',
    createdAt: new Date(),
    user: {
      _id: 2,
      name: 'Support',
    },
  },
  {
    _id: 2,
    text: 'When will my order arrive?',
    createdAt: new Date(),
    user: {
      _id: 1,
      name: 'Customer',
    },
  },
];

const ChatScreen = ({ route }) => {
  const { orderId } = route.params;
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Replace with actual Firebase Firestore implementation
    setMessages(demoMessages);
  }, []);

  const onSend = useCallback((newMessages = []) => {
    // Add new message to the chat
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, newMessages)
    );
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(newMessages) => onSend(newMessages)}
      user={{
        _id: 1,
        name: 'Customer',
      }}
    />
  );
};

export default ChatScreen;
