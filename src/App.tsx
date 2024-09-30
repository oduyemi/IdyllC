import React from 'react';
import './App.css';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { Navigation } from './navigation';

function App() {
  return (
    <ChakraProvider>
      <Box className="App">
        <Navigation />
      </Box>
    </ChakraProvider>
  );
}

export default App;
