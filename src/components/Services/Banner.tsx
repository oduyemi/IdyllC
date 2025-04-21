import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

export const ServicesBanner: React.FC = () => {
  return (
    <Box
      position="relative"
      py={28}
      px={{ base: 6, md: 16 }}
      textAlign="center"
      color="white"
      bgImage={`url(${require('../../assets/images/services.jpg')})`}
      bgPosition="center"
      bgSize="cover"
      bgRepeat="no-repeat"
      _before={{
        content: '""',
        position: 'absolute',
        inset: 0,
        bg: 'blackAlpha.700',
      }}
    >
      <Box position="relative" zIndex={1} maxW="3xl" mx="auto">
        <Heading
          as="h1"
          size="2xl"
          fontWeight="medium"
          fontFamily="Georgia, serif"
          mb={4}
        >
          Services
        </Heading>
        <Text fontSize="lg" color="gray.300">
          We are committed to guiding students on their academic journeys by offering expert counselling, global admissions support, and dedicated care.
        </Text>
      </Box>
    </Box>
  );
};
