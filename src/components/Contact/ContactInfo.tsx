import React from 'react';
import { VStack, Text, Heading, Icon, HStack, useColorModeValue } from '@chakra-ui/react';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

export const ContactInfo: React.FC = () => {
  const textColor = useColorModeValue("brand.text", "brand.text");
  const iconColor = useColorModeValue("brand.primary", "brand.primary");

  return (
    <VStack align="start" spacing={6} maxW="600px" mx="auto" px={{ base: 4, md: 8 }}>
      <Heading as="h2" size="lg" color="#E7A449">
        Contact Information
      </Heading>

      <HStack>
        <Icon as={FaMapMarkerAlt} boxSize={5} color={"#CF0000"} />
        <Text color={textColor}>82 Ibilola Nelson House, Allen Avenue, Ikeja</Text>
      </HStack>

      <HStack>
        <Icon as={FaEnvelope} boxSize={5} color={"#CF0000"} />
        <Text color={textColor}>info@idyllconsults.com</Text>
      </HStack>

      <HStack>
        <Icon as={FaPhoneAlt} boxSize={5} color={"#CF0000"} />
        <Text color={textColor}>
          +234 706 220 3392 <br />
          +234 808 369 5430
        </Text>
      </HStack>
    </VStack>
  );
};
