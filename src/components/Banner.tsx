import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Heading, Text, Button, Flex, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Banner: React.FC = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
    };

    return (
        <Box className="banner">
            <Slider {...settings}>
                {/* First Slide */}
                <Box position="relative">
                    <Image
                        width="100%"
                        src={require("../assets/images/home1.jpg")}
                        alt="Banner Slide 1"
                    />
                    <Flex
                        position="absolute"
                        top="0"
                        left="0"
                        width="100%"
                        height="100%"
                        alignItems="center"
                        bg="rgba(0, 0, 0, 0.7)" 
                    >
                        <Box width="100%" px={{ base: 4, md: 10 }} mx="auto" textAlign="center">
                            <Box maxWidth={{ base: "100%", lg: "70%" }} mx="auto">
                                <Heading
                                    as="h5"
                                    size="sm"
                                    color="yellow.400"
                                    mb={2}
                                    textTransform="uppercase"
                                    animation="slideInDown 1s ease-in-out"
                                >
                                    Admission is FREE
                                </Heading>
                                <Heading
                                    as="h1"
                                    size="2xl"
                                    color="white"
                                    mb={4}
                                    animation="slideInDown 1s ease-in-out"
                                >
                                    Secure Your Admission Free of Charge
                                </Heading>
                                <Text
                                    color="white"
                                    mb={3}
                                    pb={1}
                                    fontWeight="light"
                                    fontSize="lg"
                                >
                                    There is no agent fee for admissions, and we truly believe 
                                    that no one should pay to be admitted. Aside from any 
                                    application fees remitted to the respective Universities, 
                                    we do not charge any admission fee.
                                </Text>
                                <Flex justifyContent="center" mt={2}>
                                    <Link to="/service/admission">
                                        <Button
                                            variant="outline"
                                            colorScheme="blue"
                                            size="lg"
                                            mr={3}
                                            animation="slideInLeft 1s ease-in-out"
                                        >
                                            Read More
                                        </Button>
                                    </Link>
                                    <Link to="/about">
                                        <Button
                                            colorScheme="blue"
                                            size="lg"
                                            animation="slideInRight 1s ease-in-out"
                                        >
                                            About Us
                                        </Button>
                                    </Link>
                                </Flex>
                            </Box>
                        </Box>
                    </Flex>
                </Box>

                {/* Second Slide */}
                <Box position="relative">
                    <Image
                        width="100%"
                        src={require("../assets/images/home2.jpg")}
                        alt="Banner Slide 2"
                    />
                    <Flex
                        position="absolute"
                        top="0"
                        left="0"
                        width="100%"
                        height="100%"
                        alignItems="center"
                        bg="rgba(0, 0, 0, 0.7)"
                    >
                        <Box width="100%" px={{ base: 4, md: 10 }} mx="auto" textAlign="center">
                            <Box maxWidth={{ base: "100%", lg: "70%" }} mx="auto">
                                <Heading
                                    as="h5"
                                    size="sm"
                                    color="yellow.400"
                                    mb={2}
                                    textTransform="uppercase"
                                    animation="slideInDown 1s ease-in-out"
                                >
                                    Visa Assistance
                                </Heading>
                                <Heading
                                    as="h1"
                                    size="2xl"
                                    color="white"
                                    mb={4}
                                    animation="slideInDown 1s ease-in-out"
                                >
                                    Smooth Visa Assistance for Every Journey
                                </Heading>
                                <Text
                                    color="white"
                                    mb={3}
                                    pb={1}
                                    fontWeight="light"
                                    fontSize="lg"
                                >
                                    Whether you're traveling for business, study, or leisure, 
                                    our dedicated visa support team ensures a seamless 
                                    application process. We handle the details, so you 
                                    can focus on your plans with peace of mind.
                                </Text>
                                <Flex justifyContent="center" mt={2}>
                                    <Link to="/services/visa">
                                        <Button
                                            variant="outline"
                                            colorScheme="blue"
                                            size="lg"
                                            mr={3}
                                            animation="slideInLeft 1s ease-in-out"
                                        >
                                            Read More
                                        </Button>
                                    </Link>
                                    <Link to="/about">
                                        <Button
                                            colorScheme="blue"
                                            size="lg"
                                            animation="slideInRight 1s ease-in-out"
                                        >
                                            About Us
                                        </Button>
                                    </Link>
                                </Flex>
                            </Box>
                        </Box>
                    </Flex>
                </Box>
            </Slider>
        </Box>
    );
};
