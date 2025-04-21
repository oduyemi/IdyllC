import React from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react';

export const ContactForm = () => {
  return (
    <Box as="form" maxW="600px" mx="auto">
      <VStack spacing={5}>
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input placeholder="Your Name" />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="you@example.com" />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Message</FormLabel>
          <Textarea placeholder="How can we help you?" rows={5} />
        </FormControl>

        <Button color="white" backgroundColor="#000" type="submit" w="full">
          Send Message
        </Button>
      </VStack>
    </Box>
  );
};