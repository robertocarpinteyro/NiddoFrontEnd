"use client";

import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, Paper, Typography } from '@mui/material';

const Niddia: React.FC = () => {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState('');

  const handleSendMessage = async () => {
    if (input.trim() === '') return;

    const newMessage = { sender: 'user', text: input };
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages); // Mostrar inmediatamente el mensaje del usuario

    try {
      const response = await fetch("https://api.mindstudio.ai/developer/v1/apps/run", {
        method: 'POST',
        body: JSON.stringify({
          appId: "8312d41c-5cd8-4e63-810a-a1808e29eebc",
          variables: {
            userMessage: input,
          },
          workflow: 'Main.flow'
        }),
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer sk7145786b25fd7f9b92a43cff9e5f896c240ba2601af79759386c6f05247546e441318e4765f85152af6392f520879359cf7fd4b9469517bbd27cac81f32a9ccb`,
        }
      });
      
      const data = await response.json();

      // Depuración: Verifica la respuesta completa
      console.log('API Response:', data);

      // Filtrar y extraer los mensajes del tipo `chatMessage`
      const chatMessages = data.thread.posts
        .filter((post: any) => post.type === 'chatMessage')
        .map((post: any) => ({
          sender: post.chatMessage.source === 'user' ? 'user' : 'bot',
          text: post.chatMessage.content,
        }))
        .filter((message: { text: string }) => 
          !message.text.includes("Chat history") && 
          !message.text.includes("Initial request form the user")
        ); // Filtra mensajes no deseados
      
      console.log('Mensajes filtrados:', chatMessages);

      const allMessages = [...updatedMessages, ...chatMessages];

      // Limitar a los 20 mensajes más recientes
      const limitedMessages = allMessages.slice(-20);

      setMessages(limitedMessages);
      setInput('');
    } catch (error) {
      console.error('Error fetching messages:', error);
      // Opcional: Mostrar un mensaje de error en la interfaz de usuario
    }
  };

  useEffect(() => {
    // Opcional: Cargar mensajes iniciales 
  }, []);

  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      maxWidth={500} 
      mx="auto" 
      my={4} 
      p={2}
      component={Paper} 
      elevation={3}
    >
      <Box flexGrow={1} mb={2} overflow="auto" maxHeight={400}>
        {messages.map((message, index) => (
          <Box 
            key={index} 
            alignSelf={message.sender === 'user' ? 'flex-end' : 'flex-start'} 
            bgcolor={message.sender === 'user' ? 'primary.main' : 'grey.300'} 
            color={message.sender === 'user' ? 'primary.contrastText' : 'text.primary'}
            px={2} 
            py={1} 
            borderRadius={1} 
            mb={1} 
            maxWidth="80%"
            sx={{ wordBreak: 'break-word' }} 
          >
            <Typography variant="body1">{message.text}</Typography>
          </Box>
        ))}
      </Box>
      <Box display="flex">
        <TextField 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          variant="outlined"
          fullWidth
        />
        <Button 
          onClick={handleSendMessage} 
          variant="contained" 
          color="primary" 
          sx={{ ml: 1 }}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default Niddia;
