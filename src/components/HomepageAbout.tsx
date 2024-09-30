import { Box, Image, Text, Heading, Flex } from "@chakra-ui/react";
import React from "react";
import homeAbout from "../assets/images/homeAbout.jpg";
import facts from "../assets/images/facts.jpg";


export const HomepageAbout: React.FC = () => {
    return (
        <Box className="py-10">
            <Box className="container mx-auto">
                <Flex flexDirection={{ base: "column", lg: "row" }} gap={5}>
                    <Box flex="1" className="wow fadeInUp" data-wow-delay="0.1s">
                        <Heading as="h2" color="blue.600" textTransform="uppercase">About Us</Heading>
                        <Text fontSize="2xl" mb={4}>Your educational journey becomes our shared success</Text>
                        <Text mb={4}>
                            Idyll Consults is committed to transforming the 
                            international student journey by offering 
                            comprehensive support, from visa assistance to 
                            accommodation arrangements. We prioritize ethical 
                            recruitment, transparency, and personalized guidance, 
                            treating every student as part of our extended family.
                            <br/><br />
                            With a focus on inclusivity and a student-centric 
                            approach, we stay connected with students beyond 
                            admission, ensuring they succeed academically and 
                            personally. Our services are free of charge for 
                            admissions, making education accessible to all. At 
                            Idyll Consults, your educational success is 
                            our priority!


                        </Text>
                        <Text className="text-blue-600" fontWeight="medium" mb={2}>
                            <span className="text-green-500 mr-2">✔️</span>Residential & commercial plumbing
                        </Text>
                        <Text className="text-blue-600" fontWeight="medium" mb={2}>
                            <span className="text-green-500 mr-2">✔️</span>Quality services at affordable prices
                        </Text>
                        <Text className="text-blue-600" fontWeight="medium" mb={4}>
                            <span className="text-green-500 mr-2">✔️</span>Immediate 24/7 emergency services
                        </Text>
                        <Box className="bg-yellow-400 p-4 mt-5 flex items-center">
                            <Box className="bg-white w-15 h-15 flex items-center justify-center rounded-full">
                                <i className="fa fa-phone-alt fa-2x text-blue-500"></i>
                            </Box>
                            <Box ml={3}>
                                <Text fontSize="lg" fontWeight="medium" color="gray.500">Support 24/7</Text>
                                <Text fontSize="lg" color="gray.600">+234 706 220 3392</Text>
                                <Text fontSize="lg" color="gray.600">+234 808 369 5430</Text>
                            </Box>
                        </Box>
                    </Box>
                    <Box flex="1" pt={4} minHeight="500px" position="relative">
                        <Image 
                            src={homeAbout} 
                            alt="Admission" 
                            objectFit="cover" 
                            width="100%" 
                            height="100%" 
                            position="absolute" 
                            top={0} 
                            left={0} 
                        />
                        <Image 
                            src={facts} 
                            alt="facts" 
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
