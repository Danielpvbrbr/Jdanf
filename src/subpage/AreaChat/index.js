import React, { useContext, useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
// import { StatusBar } from 'expo-status-bar';
import { AuthContext } from '../../contexts/auth';

export default function AreaChat() {
  const [messages, setMessages] = useState([]);
  const { sendMessages, chat, user } = useContext(AuthContext)

  useEffect(() => {
    setMessages(chat)
  }, [])
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    sendMessages(messages)

  }, [])


  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: user.uid,
        name: user.name,
        avatar: 'https://placeimg.com/140/140/any',

      }}
    />
  )
}
