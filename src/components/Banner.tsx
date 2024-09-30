import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
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
                <Box className="relative">
                    <img
                        className="w-full"
                        src={require("../assets/images/home1.jpg")}
                        alt="Banner Slides"
                    />
                    <Box className="absolute top-0 left-0 w-full h-full flex items-center bg-opacity-80 bg-gray-900">
                        <Box className="container">
                            <Box className="flex justify-center pl-8 mb-10">
                                <Box className="sm:w-10/12 lg:w-8/12">
                                    <Heading as="h5" size="sm" color="yellow.400" mb={2} className="uppercase animate__animated animate__slideInDown title downed">
                                        ProGrowing Taskify
                                    </Heading>
                                    <Heading as="h1" size="4xl" color="white" mb={4} className="animate__animated animate__slideInDown topic">
                                        ProGrowing Online Learning Platform
                                    </Heading>
                                    <Text
                                        color="white"
                                        mb={3}
                                        pb={1}
                                        fontWeight="light"
                                        className="text-lg innertext"
                                    >
                                        Have access to ProGrowing Taskify, where you will be assigned projects
                                        and assignments that will give you the needed experience, and help
                                        you build your portfolio, and communication skills.
                                    </Text>
                                    <Link to="/about">
                                        <Button variant="outline" className="md:py-4 sm:py-2 md:px-8 sm:px-6 mr-3 upped topic animate__animated animate__slideInLeft">
                                            Read More
                                        </Button>
                                    </Link>
                                    <Link to="/login">
                                        <Button className="md:py-4 sm:py-2 md:px-8 sm:px-6 upped topic animate__animated animate__slideInRight">
                                            Login
                                        </Button>
                                    </Link>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box className="relative">
                    <img
                        className="w-full"
                        src={require("../assets/images/home2.jpg")}
                        alt="Banner Slides"
                    />
                    <Box className="absolute top-0 left-0 w-full h-full flex items-center bg-opacity-80 bg-gray-900">
                        <Box className="container">
                            <Box className="flex justify-center pl-8 mb-10">
                                <Box className="sm:w-10/12 lg:w-8/12">
                                    <Heading as="h5" size="sm" color="yellow.400" mb={2} className="uppercase animate__animated animate__slideInDown title downed">
                                        Free Online Courses
                                    </Heading>
                                    <Heading as="h1" size="4xl" color="white" mb={4} className="animate__animated animate__slideInDown topic">
                                        Learn From The Comfort of Your Home
                                    </Heading>
                                    <Text
                                        color="white"
                                        mb={3}
                                        pb={1}
                                        fontWeight="light"
                                        className="text-lg innertext"
                                    >
                                        Learning is a wonderful experience, and learning from the best
                                        makes everything ten times easier. The Progrowing mentors
                                        and lead instructors are all here to make your learning
                                        experience unforgettable.
                                    </Text>
                                    <Link to="/about">
                                        <Button variant="outline" className="md:py-4 sm:py-2 md:px-8 sm:px-6 mr-3 topic upped animate__animated animate__slideInLeft">
                                            Read More
                                        </Button>
                                    </Link>
                                    <Link to="/login">
                                        <Button className="md:py-4 sm:py-2 md:px-8 sm:px-6 topic upped animate__animated animate__slideInRight">
                                            Login
                                        </Button>
                                    </Link>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Slider>
        </Box>
    );
};
