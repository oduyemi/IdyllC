import React from 'react';
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Icon,
  Flex,
} from '@chakra-ui/react';
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
    <Box py={16} px={{ base: 6, md: 16 }} bg="white" color="#E7A449">
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
            role="group"
            borderWidth="1px"
            bg="#CF0000"
            color="#fff"
            borderColor="gray.200"
            borderRadius="lg"
            p={{ base: 6, md: 8 }}
            transition="all 0.3s ease"
            _hover={{
              boxShadow: 'lg',
              bg: 'gray.50',
              color: '#1a202c',
              transform: 'translateY(-4px)',
            }}
          >
            <VStack spacing={4} align="start">
              <Flex
                w={12}
                h={12}
                align="center"
                justify="center"
                borderRadius="full"
                bg="whiteAlpha.300"
                transition="color 0.3s ease"
              >
                <Icon
                  as={value.icon}
                  w={6}
                  h={6}
                  color="white"
                  aria-label={value.title}
                  _groupHover={{ color: 'gray.700' }}
                />
              </Flex>
              <Heading as="h3" size="md" fontWeight="semibold">
                {value.title}
              </Heading>
              <Text fontSize="sm" color="inherit">
                {value.description}
              </Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};
