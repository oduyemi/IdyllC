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

    const overlayBg = "rgba(0, 0, 0, 0.6)";

    const buttonStyles = {
        variant: "outline",
        borderColor: "whiteAlpha.600",
        color: "whiteAlpha.900",
        _hover: {
            bg: "whiteAlpha.900",
            color: "black",
            borderColor: "whiteAlpha.900",
        },
        borderRadius: "full",
        fontWeight: "normal",
    };

    return (
        <Box className="banner" bg="black">
            <Slider {...settings}>
                {[{
                    img: require("../../assets/images/home1.jpg"),
                    subheading: "Admission is FREE",
                    heading: "Secure Your Admission Free of Charge",
                    text: "We believe that no one should pay to be admitted. Aside from any university application fees, our services are absolutely free.",
                    btn1Link: "/services/admissions",
                    btn2Link: "/about"
                }, {
                    img: require("../../assets/images/home2.jpg"),
                    subheading: "Visa Assistance",
                    heading: "Smooth Visa Assistance for Every Journey",
                    text: "Whether it's business, study, or leisure, we make your visa application process seamless and worry-free.",
                    btn1Link: "/services/visa-assistance",
                    btn2Link: "/about"
                }].map((slide, idx) => (
                    <Box key={idx} position="relative">
                        <Image
                            src={slide.img}
                            alt={`Banner Slide ${idx + 1}`}
                            width="100%"
                            maxHeight={500}
                            objectFit="cover"
                            filter="grayscale(30%) brightness(80%) contrast(110%)"
                        />
                        <Flex
                            position="absolute"
                            top="0"
                            left="0"
                            width="100%"
                            height="100%"
                            align="center"
                            justify="center"
                            bg={overlayBg}
                            px={6}
                        >
                            <Box maxW="3xl" textAlign="center">
                                <Text 
                                    className="text-xs text-gray-400 mb-2"
                                    sx={{
                                        textTransform: "uppercase",
                                        letterSpacing: 3,    
                                        }}                            
                                >
                                    {slide.subheading}
                                </Text>
                                <Heading as="h3"
                                    sx={{
                                        fontSize: { base: "3xl", md: "4xl", lg: "5xl" },
                                        color: "white",
                                        fontWeight: "extrabold",
                                        mb: 4,
                                        lineHeight: 1.2,
                                    }}
                                >
                                    {slide.heading}
                                </Heading>
                                <Text className="text-gray-300 mb-6 font-light text-md">{slide.text}</Text>
                                <Flex justify="center" gap={4} mt={4} wrap="wrap">
                                    <Link to={slide.btn1Link}>
                                        <Button size="md" {...buttonStyles}>Read More</Button>
                                    </Link>
                                    <Link to={slide.btn2Link}>
                                        <Button size="md" {...buttonStyles}>About Us</Button>
                                    </Link>
                                </Flex>
                            </Box>
                        </Flex>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};
