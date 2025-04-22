import { Box, Text, Icon, SimpleGrid, Heading } from "@chakra-ui/react";
import { FaGlobe, FaUserFriends, FaUniversity, FaCheckCircle } from "react-icons/fa";
import React from "react";

export const Facts: React.FC = () => {
  return (
    <Box bg="#CF0000" py={10}>
      <Box maxW="7xl" mx="auto" px={4}>
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8}>
          <Box textAlign="center">
            <Icon as={FaGlobe} boxSize={10} color="white" mb={2} />
            <Heading as="h2" fontSize="2xl" color="white">100+</Heading>
            <Text color="gray.300">Countries Represented</Text>
          </Box>
          <Box textAlign="center">
            <Icon as={FaUserFriends} boxSize={10} color="white" mb={2} />
            <Heading as="h2" fontSize="2xl" color="white">500+</Heading>
            <Text color="gray.300">Students Supported</Text>
          </Box>
          <Box textAlign="center">
            <Icon as={FaUniversity} boxSize={10} color="white" mb={2} />
            <Heading as="h2" fontSize="2xl" color="white">300+</Heading>
            <Text color="gray.300">Partner Institutions</Text>
          </Box>
          <Box textAlign="center">
            <Icon as={FaCheckCircle} boxSize={10} color="white" mb={2} />
            <Heading as="h2" fontSize="2xl" color="white">95%</Heading>
            <Text color="gray.300">Visa Success Rate</Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};
