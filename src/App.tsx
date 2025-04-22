import React from 'react';
import './App.css';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import { Navigation } from './navigation';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box className="App">
        <Navigation />
      </Box>
    </ChakraProvider>
  );
}

export default App;
