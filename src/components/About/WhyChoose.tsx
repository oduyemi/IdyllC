import React from 'react';
import { Box, Heading, Text, SimpleGrid, VStack, Icon } from '@chakra-ui/react';
import { FaGlobe, FaHandsHelping, FaUserShield } from 'react-icons/fa';

const values = [
  {
    title: 'Global Network',
    description: 'Access top institutions worldwide with our international partnerships.',
    icon: FaGlobe,
  },
  {
    title: 'Student-Centered',
    description: 'We prioritize your goals and provide dedicated mentorship every step of the way.',
    icon: FaHandsHelping,
  },
  {
    title: 'Trust & Integrity',
    description: 'Transparency, honesty, and ethical support for all students and families.',
    icon: FaUserShield,
  },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <Box py={16} px={{ base: 6, md: 16 }} bg="white" color="black">
      <Heading
        as="h2"
        size="xl"
        textAlign="center"
        fontWeight="bold"
        mb={12}
        letterSpacing="wide"
      >
        Why Choose Us?
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {values.map((value, index) => (
          <Box
            key={index}
            borderWidth="1px"
            borderColor="gray.200"
            borderRadius="lg"
            p={8}
            transition="all 0.3s ease"
            _hover={{
              boxShadow: 'lg',
              bg: 'gray.50',
              transform: 'translateY(-4px)',
            }}
          >
            <VStack spacing={4} align="start">
              <Icon as={value.icon} w={8} h={8} color="gray.700" />
              <Heading as="h3" size="md" fontWeight="semibold">
                {value.title}
              </Heading>
              <Text fontSize="sm" color="gray.700">
                {value.description}
              </Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};
