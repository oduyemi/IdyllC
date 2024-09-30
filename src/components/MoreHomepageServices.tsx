import { Box, Text, SimpleGrid, Heading, Flex, Icon, Link } from "@chakra-ui/react";
import { FaWater, FaToilet, FaShower, FaTint, FaCheck, FaArrowRight } from "react-icons/fa";
import React from "react";

export const MoreHomepageServices: React.FC = () => {
    return (
        <Box className="py-10 px-4 lg:px-0">
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10}>
                {/* Left Side: 15 Years Experience */}
                <Flex 
                    display={{ base: "none", lg: "flex" }} 
                    alignItems="center" 
                    justifyContent="center" 
                    bg="blue.500" 
                    className="w-full h-full"
                >
                    <Heading 
                        as="h1" 
                        fontSize="6xl" 
                        color="white" 
                        transform="rotate(-90deg)"
                    >
                        15 Years Experience
                    </Heading>
                </Flex>

                {/* Right Side: Services */}
                <Box>
                    <Box textAlign={{ base: "center", lg: "left" }} mb={10}>
                        <Text fontSize="lg" color="gray.500" textTransform="uppercase">
                            Our Services
                        </Text>
                        <Heading fontSize="4xl" mb={5}>Explore Our Services</Heading>
                    </Box>

                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                        {/* Service 1 */}
                        <Box bg="gray.100" p={6} borderRadius="md">
                            <Flex 
                                alignItems="center" 
                                justifyContent="center" 
                                bg="white" 
                                border="5px solid white" 
                                w="75px" 
                                h="75px" 
                                mb={4}
                            >
                                <Icon as={FaWater} boxSize={10} color="blue.500" />
                            </Flex>
                            <Heading fontSize="xl" mb={3}>Drain Repair</Heading>
                            <Text mb={4}>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.</Text>
                            <Text color="blue.500"><Icon as={FaCheck} color="green.500" mr={2}/>Quality Service</Text>
                            <Text color="blue.500"><Icon as={FaCheck} color="green.500" mr={2}/>Customer Satisfaction</Text>
                            <Text color="blue.500"><Icon as={FaCheck} color="green.500" mr={2}/>Support 24/7</Text>
                            <Link href="#" textAlign="center" display="block" mt={4} color="blue.500" fontWeight="bold">
                                Read More <Icon as={FaArrowRight} ml={2}/>
                            </Link>
                        </Box>

                        {/* Service 2 */}
                        <Box bg="gray.100" p={6} borderRadius="md">
                            <Flex 
                                alignItems="center" 
                                justifyContent="center" 
                                bg="white" 
                                border="5px solid white" 
                                w="75px" 
                                h="75px" 
                                mb={4}
                            >
                                <Icon as={FaToilet} boxSize={10} color="blue.500" />
                            </Flex>
                            <Heading fontSize="xl" mb={3}>Toilet Pipe Repair</Heading>
                            <Text mb={4}>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.</Text>
                            <Text color="blue.500"><Icon as={FaCheck} color="green.500" mr={2}/>Quality Service</Text>
                            <Text color="blue.500"><Icon as={FaCheck} color="green.500" mr={2}/>Customer Satisfaction</Text>
                            <Text color="blue.500"><Icon as={FaCheck} color="green.500" mr={2}/>Support 24/7</Text>
                            <Link href="#" textAlign="center" display="block" mt={4} color="blue.500" fontWeight="bold">
                                Read More <Icon as={FaArrowRight} ml={2}/>
                            </Link>
                        </Box>

                        {/* Service 3 */}
                        <Box bg="gray.100" p={6} borderRadius="md">
                            <Flex 
                                alignItems="center" 
                                justifyContent="center" 
                                bg="white" 
                                border="5px solid white" 
                                w="75px" 
                                h="75px" 
                                mb={4}
                            >
                                <Icon as={FaShower} boxSize={10} color="blue.500" />
                            </Flex>
                            <Heading fontSize="xl" mb={3}>Sewer Line Repair</Heading>
                            <Text mb={4}>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.</Text>
                            <Text color="blue.500"><Icon as={FaCheck} color="green.500" mr={2}/>Quality Service</Text>
                            <Text color="blue.500"><Icon as={FaCheck} color="green.500" mr={2}/>Customer Satisfaction</Text>
                            <Text color="blue.500"><Icon as={FaCheck} color="green.500" mr={2}/>Support 24/7</Text>
                            <Link href="#" textAlign="center" display="block" mt={4} color="blue.500" fontWeight="bold">
                                Read More <Icon as={FaArrowRight} ml={2}/>
                            </Link>
                        </Box>

                        {/* Service 4 */}
                        <Box bg="gray.100" p={6} borderRadius="md">
                            <Flex 
                                alignItems="center" 
                                justifyContent="center" 
                                bg="white" 
                                border="5px solid white" 
                                w="75px" 
                                h="75px" 
                                mb={4}
                            >
                                <Icon as={FaTint} boxSize={10} color="blue.500" />
                            </Flex>
                            <Heading fontSize="xl" mb={3}>Water Heater Repair</Heading>
                            <Text mb={4}>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.</Text>
                            <Text color="blue.500"><Icon as={FaCheck} color="green.500" mr={2}/>Quality Service</Text>
                            <Text color="blue.500"><Icon as={FaCheck} color="green.500" mr={2}/>Customer Satisfaction</Text>
                            <Text color="blue.500"><Icon as={FaCheck} color="green.500" mr={2}/>Support 24/7</Text>
                            <Link href="#" textAlign="center" display="block" mt={4} color="blue.500" fontWeight="bold">
                                Read More <Icon as={FaArrowRight} ml={2}/>
                            </Link>
                        </Box>
                    </SimpleGrid>
                </Box>
            </SimpleGrid>
        </Box>
    );
};
