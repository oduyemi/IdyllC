import React from 'react';
import { VStack, Text, Heading, Icon, HStack } from '@chakra-ui/react';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

export const ContactInfo = () => {
  return (
    <VStack align="start" spacing={6} maxW="600px" mx="auto">
      <Heading as="h2" size="lg">Contact Information</Heading>

      <HStack>
        <Icon as={FaMapMarkerAlt} boxSize={5} />
        <Text>82 Ibilola Nelson House, Allen Avenue, Ikeja</Text>
      </HStack>

      <HStack>
        <Icon as={FaEnvelope} boxSize={5} />
        <Text>info@idyllconsults.com</Text>
      </HStack>

      <HStack>
        <Icon as={FaPhoneAlt} boxSize={5} />
        <Text>
            +234 706 220 3392 <br/>
            +234 808 369 5430
        </Text>
      </HStack>
    </VStack>
  );
};