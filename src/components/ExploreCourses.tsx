import { Box, Text, SimpleGrid, Heading, Flex, Icon, Link } from "@chakra-ui/react";
import { FaWater, FaToilet, FaShower, FaTint, FaCheck, FaArrowRight } from "react-icons/fa";
import React from "react";

export const ExploreCourses: React.FC = () => {
    return (
        <Box className="py-10 px-4 lg:px-0">
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10}>
                <Flex 
                    display={{ base: "none", lg: "flex" }} 
                    alignItems="center" 
                    justifyContent="center" 
                    bg="blue.600" 
                    className="w-full h-full"
                >
                    <Heading 
                        as="h1" 
                        fontSize="6xl" 
                        color="white" 
                        transform="rotate(-90deg)"
                    >
                        Your tagline here
                    </Heading>
                </Flex>

                {/* Right Side: Services */}
                <Box>
                    <Box textAlign={{ base: "center", lg: "left" }} mb={10}>
                        <Text fontSize="lg" color="yellow.400" textTransform="uppercase">
                            Our Courses
                        </Text>
                        <Heading fontSize="4xl" mb={5} color="blue.600">Explore Our Courses</Heading>
                    </Box>

                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                        <Box bg="gray.100" p={6} borderRadius="md">
                            <Heading fontSize="xl" mb={3}>Course 1</Heading>
                            <Text mb={4}>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.</Text>
                            <Text color="blue.500"><Icon as={FaCheck} color="green.500" mr={2}/>Value One</Text>
                            <Text color="blue.500"><Icon as={FaCheck} color="green.500" mr={2}/>Value Two</Text>
                            <Text color="blue.500"><Icon as={FaCheck} color="green.500" mr={2}/>Value Three</Text>
                            <Link href="#" textAlign="center" display="block" mt={4} color="blue.500" fontWeight="bold">
                                Learn More <Icon as={FaArrowRight} ml={2}/>
                            </Link>
                        </Box>

                        <Box bg="gray.100" p={6} borderRadius="md">
                            <Heading fontSize="xl" mb={3}>Course 2</Heading>
                            <Text mb={4}>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.</Text>
                            <Text color="blue.500"><Icon as={FaCheck} color="green.500" mr={2}/>Value One</Text>
                            <Text color="blue.500"><Icon as={FaCheck} color="green.500" mr={2}/>Value Two</Text>
                            <Text color="blue.500"><Icon as={FaCheck} color="green.500" mr={2}/>Value Three</Text>
                            <Link href="#" textAlign="center" display="block" mt={4} color="blue.500" fontWeight="bold">
                                Learn More <Icon as={FaArrowRight} ml={2}/>
                            </Link>
                        </Box>

                        <Box bg="gray.100" p={6} borderRadius="md">
                            <Heading fontSize="xl" mb={3}>Course 3</Heading>
                            <Text mb={4}>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.</Text>
                            <Text color="blue.500"><Icon as={FaCheck} color="green.500" mr={2}/>Value One</Text>
                            <Text color="blue.500"><Icon as={FaCheck} color="green.500" mr={2}/>Value Two</Text>
                            <Text color="blue.500"><Icon as={FaCheck} color="green.500" mr={2}/>Value Three</Text>
                            <Link href="#" textAlign="center" display="block" mt={4} color="blue.500" fontWeight="bold">
                                Learn More <Icon as={FaArrowRight} ml={2}/>
                            </Link>
                        </Box>

                        <Box bg="gray.100" p={6} borderRadius="md">
                            <Heading fontSize="xl" mb={3}>Course 4</Heading>
                            <Text mb={4}>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.</Text>
                            <Text color="blue.500"><Icon as={FaCheck} color="green.500" mr={2}/>Value One</Text>
                            <Text color="blue.500"><Icon as={FaCheck} color="green.500" mr={2}/>Value Two</Text>
                            <Text color="blue.500"><Icon as={FaCheck} color="green.500" mr={2}/>Value Three</Text>
                            <Link href="#" textAlign="center" display="block" mt={4} color="blue.500" fontWeight="bold">
                                Learn More <Icon as={FaArrowRight} ml={2}/>
                            </Link>
                        </Box>
                    </SimpleGrid>
                </Box>
            </SimpleGrid>
        </Box>
    );
};
