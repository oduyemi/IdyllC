import { Box, Image, Text, Button, SimpleGrid, Heading, Flex } from "@chakra-ui/react";
import React from "react";
import admission from "../assets/images/admission.jpg";
import graduate from "../assets/images/graduate.jpg";
import visa from "../assets/images/visa.jpg";

export const HomepageAbout: React.FC = () => {
    return (
        <Box className="py-10">
            <Box className="container mx-auto">
                <Flex flexDirection={{ base: "column", lg: "row" }} gap={5}>
                    <Box flex="1" className="wow fadeInUp" data-wow-delay="0.1s">
                        <Heading as="h2" color="teal.600" textTransform="uppercase">About Us</Heading>
                        <Text fontSize="2xl" mb={4}>We Are Trusted Plumbing Company Since 1990</Text>
                        <Text mb={4}>
                            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. 
                            Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.
                        </Text>
                        <Text className="text-primary" fontWeight="medium" mb={2}>
                            <span className="text-green-500 mr-2">✔️</span>Residential & commercial plumbing
                        </Text>
                        <Text className="text-primary" fontWeight="medium" mb={2}>
                            <span className="text-green-500 mr-2">✔️</span>Quality services at affordable prices
                        </Text>
                        <Text className="text-primary" fontWeight="medium" mb={4}>
                            <span className="text-green-500 mr-2">✔️</span>Immediate 24/7 emergency services
                        </Text>
                        <Box className="bg-blue-500 p-4 mt-5 flex items-center">
                            <Box className="bg-white w-15 h-15 flex items-center justify-center rounded-full">
                                <i className="fa fa-phone-alt fa-2x text-blue-500"></i>
                            </Box>
                            <Box ml={3}>
                                <Text fontSize="lg" fontWeight="medium" color="white">Emergency 24/7</Text>
                                <Text fontSize="lg" color="teal.600">+012 345 6789</Text>
                            </Box>
                        </Box>
                    </Box>
                    <Box flex="1" pt={4} minHeight="500px" position="relative">
                        <Image 
                            src={admission} 
                            alt="Admission" 
                            objectFit="cover" 
                            width="100%" 
                            height="100%" 
                            position="absolute" 
                            top={0} 
                            left={0} 
                        />
                        <Image 
                            src={graduate} 
                            alt="Graduate" 
                            objectFit="cover" 
                            width="50%" 
                            height="50%" 
                            position="absolute" 
                            bottom={0} 
                            left={0} 
                            bg="white" 
                            padding={2} 
                        />
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
};
