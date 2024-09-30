import { Box, Text, Icon, SimpleGrid, Heading } from "@chakra-ui/react";
import React from "react";

export const Facts: React.FC = () => {
    return (
        <Box className="bg-gray-400 fact my-5 py-10">
            <Box className="container mx-auto">
                <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4}>
                    <Box textAlign="center" className="wow fadeIn" data-wow-delay="0.1s">
                        <Icon as={require("react-icons/fa").FaGlobe} boxSize={10} color="white" />
                        <Heading as="h2" fontSize="2xl" color="white" mb={2}>100+</Heading>
                        <Text color="white">Countries Represented</Text>
                    </Box>
                    <Box textAlign="center" className="wow fadeIn" data-wow-delay="0.3s">
                        <Icon as={require("react-icons/fa").FaUserFriends} boxSize={10} color="white" />
                        <Heading as="h2" fontSize="2xl" color="white" mb={2}>500+</Heading>
                        <Text color="white">Students Supported</Text>
                    </Box>
                    <Box textAlign="center" className="wow fadeIn" data-wow-delay="0.5s">
                        <Icon as={require("react-icons/fa").FaUniversity} boxSize={10} color="white" />
                        <Heading as="h2" fontSize="2xl" color="white" mb={2}>300+</Heading>
                        <Text color="white">Partner Institutions</Text>
                    </Box>
                    <Box textAlign="center" className="wow fadeIn" data-wow-delay="0.7s">
                        <Icon as={require("react-icons/fa").FaCheckCircle} boxSize={10} color="white" />
                        <Heading as="h2" fontSize="2xl" color="white" mb={2}>95%</Heading>
                        <Text color="white">Visa Success Rate</Text>
                    </Box>
                </SimpleGrid>
            </Box>
        </Box>
    );
};
