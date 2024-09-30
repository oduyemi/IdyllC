import { Box, Text, Icon, SimpleGrid, Heading } from "@chakra-ui/react";
import React from "react";

export const Facts: React.FC = () => {
    return (
        <Box className="bg-gray-800 my-5 py-10">
            <Box className="container mx-auto">
                <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4}>
                    <Box textAlign="center" className="wow fadeIn" data-wow-delay="0.1s">
                        <Icon as={require("react-icons/fa").FaCheck} boxSize={10} color="white" />
                        <Heading as="h2" fontSize="2xl" color="white" mb={2}>1234</Heading>
                        <Text color="white">Years Experience</Text>
                    </Box>
                    <Box textAlign="center" className="wow fadeIn" data-wow-delay="0.3s">
                        <Icon as={require("react-icons/fa").FaUsersCog} boxSize={10} color="white" />
                        <Heading as="h2" fontSize="2xl" color="white" mb={2}>1234</Heading>
                        <Text color="white">Expert Technicians</Text>
                    </Box>
                    <Box textAlign="center" className="wow fadeIn" data-wow-delay="0.5s">
                        <Icon as={require("react-icons/fa").FaUsers} boxSize={10} color="white" />
                        <Heading as="h2" fontSize="2xl" color="white" mb={2}>1234</Heading>
                        <Text color="white">Satisfied Clients</Text>
                    </Box>
                    <Box textAlign="center" className="wow fadeIn" data-wow-delay="0.7s">
                        <Icon as={require("react-icons/fa").FaWrench} boxSize={10} color="white" />
                        <Heading as="h2" fontSize="2xl" color="white" mb={2}>1234</Heading>
                        <Text color="white">Completed Projects</Text>
                    </Box>
                </SimpleGrid>
            </Box>
        </Box>
    );
};
